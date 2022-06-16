import jwt from 'jwt-decode';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Input, Row, Table } from 'reactstrap';

import axios from 'axios';
import BookAppointment from '../Patient/bookAppointment';
import { AuthContext } from '../../Context/AuthContext';
import NavBar from "./NavBar";
import Header from '../header';
function Appointments() {
  const {user} =useContext(AuthContext)
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [prescription, setPrescription] = useState('');
  useEffect(() => {
    const id  = user._id;
    const getData = async () => {
      const res = await axios.get(`/doctors/${id}/appointments`);
      if (res.status === 200) {
        setAppointments(res.data.appointments);
      }
    };
    getData();
  }, [user]);
  const handlePres = async (appointment) => {
    this.setState({ isOpen: false });
    console.log(this.state);
    console.log(appointment);
    await axios.post(`/doctors/appointments/${appointment._id}`, {
      prescription: prescription,
    });
  };

  return (
   
    <div>
    
      <NavBar />
      <Header/>
      <center><h1>View Your Appointments</h1></center>
      <Row>
        <Col className="mt-3" sm="3"></Col>
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
            <thead>
              <th>Patient Name</th>
              <th>Problem</th>
              <th>Age</th>
              <th>Date</th>
              <th>Phone Number</th>
            </thead>
            {typeof appointments != undefined
              ? appointments
                  .filter((appointment) => {
                    if (search === '') {
                      return appointment;
                    } else if (
                      appointment.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return appointment;
                    }
                  })
                  .map((appointment) => {
                    return (
                      <tr>
                        <td>{appointment.name}</td>
                        <td>{appointment.description}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.phone}</td>
                       
                      </tr>
                    );
                  })
              : null}
          </Table>
        </Col>
      </Row>
      </div>
  );
}

export default Appointments;
