import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const Logout = () => {
  //   dispatch({ type: 'LOG_OUT' });
  //   navigate('/login');
  // };
  function handleOut(){
    dispatch({type:"LOGOUT"})
    navigate('/login');
  }
  
  return (
    <div>
      <Navbar style={{ backgroundColor: '#6BB96D' }} dark expand="md">
        <NavbarToggler onClick={() => setOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        <NavItem className="mynav">
              <NavLink activeStyle={{ color: '#61dafb' }} to="/patient/getDoctors">
               View Doctors
              </NavLink>
            </NavItem>
            <NavItem className="mynav">
              <NavLink activeStyle={{ color: '#61dafb' }} to="/patient/bookAppointment">
               Book Appointment
              </NavLink>
            </NavItem>
            <NavItem className="mynav">
              <NavLink activeStyle={{ color: '#61dafb' }} to="/patient/appointments">
              View Appointments
              </NavLink>
            </NavItem>
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
