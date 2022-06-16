import React, { useEffect, useState } from 'react';
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

import Loader from './Loader';
function ViewAppointments() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const role = useSelector((state) => state.login.role);
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
    await axios.delete(`/doctor/${id}`);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div>


      {/* <NavItem>
            <NavLink active>
              <Link to="/admin/getDoctors">Doctor List</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link to="/bookAppointment">Book Appointment</Link>
            </NavLink>
          </NavItem> */}
      {/* <NavItem>
            <NavLink>
              <Link to="/patientLogin/patientAppointments">
                View Appointments
              </Link>
            </NavLink>
          </NavItem> */}


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
            <thead style={{ 'color': "#6BB96D" }}>
              <tr>
                <th>Doctor Id</th>
                <th>Doctor Name</th>
                <th>Department</th>
                <th >Appointments <br /> Patient Name </th>
                <th>Patient Problem</th>

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

                        {doctor.appointments.map((appointment) => {
                          return (
                            <tr>

                              <td>{appointment.name}</td>

                            </tr>


                          )
                        })}
                        <td>
                          {doctor.appointments.map((appointment) => {
                            return (
                              <tr>
                                <td>{appointment.description}</td>
                              </tr>
                            )
                          })}
                        </td>
                        <td>
                        {doctor.appointments.map((appointment) => {
                            return (
                              <Link to={`/admin/updateAppointment/${doctor._id}/${appointment._id}`}>
                            <Button

                              color="warning"

                            >
                              Update
                            </Button>
                          </Link>
                            )
                          })}
                          

                        </td>
                        <td>
                        {doctor.appointments.map((appointment) => {
                            return (
                              <Button
                         
                            color="danger"
                            onClick={(e) => handleDelete(appointment._id)}
                          >
                            Delete
                          </Button>
                            )
                          })}
                          

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

export default ViewAppointments;
