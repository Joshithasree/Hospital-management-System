import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
function SignUp(){
	const [patientDetails, setPatientDetails] = useState({});
	const [message, setMessage] = useState('');
  	const handleSubmit = async () => {
    try {
      const res = await axios.post('/patients', {
        ...patientDetails
      });
      if (res.status === 200) {
        setMessage('Patient added successfully');
        setPatientDetails({});
      }
    } catch (err) {
      console.log(err);
    }
  };
		return (
			<div>
				<Form style={{ marginTop: "25px" }}>
					<FormGroup>
						<Row>
							<Col sm="2">
								<Label>Name *</Label>
							</Col>
							<Col sm="10">
								<Input
									type="text"
									onChange={(e) =>
										setPatientDetails({ ...patientDetails, name: e.target.value })
									}
								/>
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row>
							<Col sm="2">
								<Label>Email *</Label>
							</Col>
							<Col sm="10">
								<Input
									type="email"
									onChange={(e) =>
										setPatientDetails({ ...patientDetails, email: e.target.value })
									}
								/>
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row>
							<Col sm="2">
								<Label>Password *</Label>
							</Col>
							<Col sm="10">
								<Input
									type="password"
									onChange={(e) =>
										setPatientDetails({ ...patientDetails, 
											password: e.target.value,
										})
									}
								/>
								<small>
									(Must be atleast of length 8 with one
									Uppercase,one Lowercase,a number and a
									special character)
								</small>
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row>
							<Col sm="2">
								<Label>Address</Label>
							</Col>
							<Col sm="10">
								<Input
									type="text"
									onChange={(e) =>
										setPatientDetails({ ...patientDetails, 
											address: e.target.value,
										})
									}
								/>
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row>
							<Col sm="2">
								<Label>Phone</Label>
							</Col>
							<Col sm="10">
								<Input
									type="phone"
									onChange={(e) =>
										setPatientDetails({ ...patientDetails,  phone: e.target.value })
									}
								/>
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row>
							<Col sm="2">
								<Label>Sex</Label>
							</Col>
							<Col sm="10">
								<Input
									type="text"
									onChange={(e) =>
										setPatientDetails({ ...patientDetails,  sex: e.target.value })
									}
								/>
							</Col>
						</Row>
					</FormGroup>
					
					<FormGroup>
						<Row>
							<Col sm="2">
								<Label>Age *</Label>
							</Col>
							<Col sm="10">
								<Input
									type="number"
									onChange={(e) =>
										setPatientDetails({ ...patientDetails,  age: e.target.value })
									}
								/>
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row>
							<Col sm="2">
								<Label>Blood Group</Label>
							</Col>
							<Col sm="10">
								<Input
									type="text"
									onChange={(e) =>
										setPatientDetails({ ...patientDetails, 
											bloodgroup: e.target.value,
										})
									}
								/>
							</Col>
						</Row>
					</FormGroup>
					<FormGroup>
						<Row>
							<Col sm="2"></Col>
							<Col sm="10">
								<Button color="success"onClick={() => handleSubmit()}>
									Submit
								</Button>
							</Col>
						</Row>
					</FormGroup>
				</Form>
			</div>
		);
	};
export default SignUp;


