import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {
	Button,
	Form,
	FormGroup,
	Input,
	Label,
	NavItem,
	NavLink,
	Nav,
	Row,
	Col,
	InputGroupButtonDropdown,
} from "reactstrap";
const UpdateAppointment = () => {
    const {doctorId,appointmentId}=useParams()
    const [appointment,setAppointment]= useState( {
        name: "",
        phone: "",
        age: "",
        day: "",
        description: "",
    })
    useEffect(()=>{
        async function getAppointment(){
         const res = await axios.get(`/doctors/${doctorId}/appointments/${appointmentId}`);
         console.log(res.data)
         setAppointment(res.data)
        }
    getAppointment();
    },[doctorId,appointmentId])
    const handleChange = (e) => {
      setAppointment((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(appointment)
    }
    return (
        <div>
            
            <Row>
                <Col md="3"></Col>
                <Col md="6">
                    <Form className="mt-3">
                        <FormGroup>
                            <Label>Name *</Label>
                            <Input
                                
                                type="String"
                                value={appointment.name}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label>Phone</Label>
                            <Input
                                type="String"
                                value={appointment.phone}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Age *</Label>
                            <Input
                                type="number"
                                value={appointment.age}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Day</Label>
                            <Input
                                type="date"
                                value={appointment.day}
                                onChange={handleChange}
                            />
                        </FormGroup>
                  
                        <FormGroup>
                            <Label>Description</Label>
                            <Input
                                type="String"
                                value={appointment.description}
                                onChange={handleChange}
                            />
                        </FormGroup>
                       
                        <FormGroup>
                            <Button
                                color="success"
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default UpdateAppointment