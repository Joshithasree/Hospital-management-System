import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
import Cookies from "js-cookie";
class BookAppointment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			phone: "",
			age: "",
			date: Date.now(),
			description: "",
			Id: "",
		};
		this.inputRef = React.createRef();
	}
	handleSubmit(e) {
		console.log(this.state);
		const Id = this.state.Id;
		// const headers = {
		// 	authorization: Cookies.get("token"),
		// };
		axios
			.post(`/doctors/${Id}/appointments`, this.state, )
			.then((res) => {
				console.log(res);
				alert("Appointment added successfully");
			});
	}
	// componentDidMount() {
	// 	this.inputRef.current.focus();
	// }
	render() {
		return (
			<div>
				<Nav tabs>
					<NavItem>
						<NavLink>
							<Link to="/getDoctors">Doctor List</Link>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink active>
							<Link to="/bookAppointment">
								Book Appointment
							</Link>
						</NavLink>
					</NavItem>
					{/* <NavItem>
						<NavLink>
							<Link to="/bookedAppointments">
								View Appointments
							</Link>
						</NavLink>
					</NavItem> */}
				</Nav>
				<Row>
					<Col md="3"></Col>
					<Col md="6">
						<Form className="mt-3">
							<FormGroup>
								<Label>Name *</Label>
								<Input
									
									type="String"
									onChange={(e) => {
										this.setState({ name: e.target.value });
									}}
								/>
							</FormGroup>
							
							<FormGroup>
								<Label>Phone</Label>
								<Input
									type="String"
									onChange={(e) => {
										this.setState({
											phone: e.target.value,
										});
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Age *</Label>
								<Input
									type="number"
									onChange={(e) => {
										this.setState({ age: e.target.value });
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Date</Label>
								<Input
									type="date"
									onChange={(e) => {
										this.setState({ date: e.target.value });
									}}
								/>
							</FormGroup>
						
							<FormGroup>
								<Label>Description</Label>
								<Input
									type="String"
									onChange={(e) => {
										this.setState({
											description: e.target.value,
										});
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Doctor Id *</Label>
								<Input
									type="String"
									onChange={(e) => {
										this.setState({ Id: e.target.value });
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Button
									color="success"
									onClick={() => this.handleSubmit()}
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
}
export default BookAppointment;
