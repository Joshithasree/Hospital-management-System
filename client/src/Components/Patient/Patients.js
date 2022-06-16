import React, { useEffect, useState } from 'react';
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
function Patients() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get('/patients');
      if (res.status === 200) {
        setPatients(res.data.patients);
        setLoading(false);
      }
    };
    getData();
  }, []);
  const handleDelete = async (id) => {
    await axios.delete(`patients/${id}`);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink active>
            <Link to="/admin/patientList">Patient List</Link>
          </NavLink>
        </NavItem>
      </Nav>
      <Row>
        <Col className="mt-2" sm="3"></Col>
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
                <th>Patient Id</th>
                <th>Patient Name</th>
                <th>Patient Email</th>
              </tr>
            </thead>
            <tbody>
              {typeof patients != undefined ? (
                patients
                  .filter((patient) => {
                    if (search === '') {
                      return patient;
                    } else if (
                      patient.name.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return patient;
                    }
                  })
                  .map((patient, index) => {
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{patient.name}</td>
                        <td>{patient.email}</td>
                        <td>
                          <Button
                            id={patient._id}
                            color="danger"
                            onClick={(e) => handleDelete(e.target.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })
              ) : (
                <h1>ok</h1>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Patients;
