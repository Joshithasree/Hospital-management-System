import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarText,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import { AuthContext } from '../../Context/AuthContext';
function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate()
  // const Logout = () => {
  //   dispatch({ type: 'LOG_OUT' });
  //   navigate('/login');
  // };
  function handleOut(){
    dispatch({ type: "LOGOUT" })
    localStorage.removeItem('user')
    navigate('/doctorLogin');
  }
  
  return (
    <div>
      <Navbar style={{ backgroundColor: '#6BB96D' }} dark expand="md">
        <NavbarToggler onClick={() => setOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          </Nav>
          <NavbarText>
            <Button color="danger" onClick={handleOut}>
              Logout
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
