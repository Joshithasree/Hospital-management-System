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
    navigate('/login');
  }
  
  return (
    <div>
      <Navbar style={{ backgroundColor: '#6BB96D' }} dark expand="md">
        <NavbarToggler onClick={() => setOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <div className='mynav'>
              <NavLink
                active
                activeStyle={{ color: '#61dafb' }}
                exact
                to="/admin/addDepartment"
              >
                Departments
              </NavLink>
            </div>
            <NavItem className="mynav">
              <NavLink activeStyle={{ color: '#61dafb' }} to="/admin/addDoctor">
                Doctors
              </NavLink>
            </NavItem>
            <NavItem className="mynav">
              <NavLink activeStyle={{ color: '#61dafb' }} to="/admin/addPatient">
                Patients
              </NavLink>
            </NavItem>
            <NavItem className="mynav">
              <NavLink activeStyle={{ color: '#61dafb' }} to="/admin/bookAppointment">
               Book Appointment
              </NavLink>
            </NavItem>
            <NavItem className="mynav">
              <NavLink activeStyle={{ color: '#61dafb' }} to="/admin/getAppointments">
              View  Appointments
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
