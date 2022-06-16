import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Col,
  Input,
  Nav,
  NavItem,
  NavLink,
  Row,
  Table,
} from 'reactstrap';
import axios from 'axios';
import axiosInstance from '../../utils/axiosInstance';
import Loader from '../Loader';
import { AuthContext } from '../../Context/AuthContext';
function GetDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const {user} = useContext(AuthContext)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get('/doctors');
      if (res.status === 200) {
        setDoctors(res.data.doctors);
        setLoading(false);
      }  
    };
    getData();
  }, []);
 
  const handleDelete = async (id) => {
    await axios.delete(`/doctors/${id}`);
    setLoading(false);
    setDoctors(doctors => doctors.filter(doctor => doctor._id !== id))
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      
        <Nav tabs>
          <NavItem>
            <NavLink active>
              <Link to="/admin/getDoctors">Doctor List</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/bookAppointment">Book Appointment</Link>
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink>
              <Link to="/patientLogin/patientAppointments">
                View Appointments
              </Link>
            </NavLink>
          </NavItem> */}
        </Nav>
     
      <Row>
        <Col className="mt-2 mr-5" sm="3">
          {' '}
        </Col>
        <Col className="mt-3">
          <Input
            style={{ width: '50%' }}
            placeholder="Search..."
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Table
            striped
            style={{
              width: '50%',
              'box-shadow': '2px 2px 4px 4px #CCCCCC',
              marginTop: '30px',
            }}
          >
            <thead style={{'color':"#6BB96D"}}>
              <tr>
                <th>Doctor Id</th>
                <th>Doctor Name</th>
                <th>Department</th>
                <th>Email</th>
                
                
              </tr>
            </thead>
            <tbody>
              {
                doctors
                  .filter((doctor) => {
                    if (search === '') {
                      return doctor;
                    } else if (
                      doctor.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return doctor;
                    }
                  })
                  .map((doctor) => {
                    return (
                      <tr>
                        <th scope="row">{doctor._id}</th>
                        <td>{doctor.name}</td>
                        <td>{doctor.department}</td>
                        <td>{doctor.email}</td>
                      
                            <td >
                            <Button
                              id={doctor._id}
                              color="danger"
                              onClick={(e) => handleDelete(e.target.id)}
                            >
                              Delete
                            </Button>
                          </td>
                         
                          
                        
                          
                        
                      </tr>
                    );
                  })
            
              }
            </tbody>
              
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default GetDoctor;
