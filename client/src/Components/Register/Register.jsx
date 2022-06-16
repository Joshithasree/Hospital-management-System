import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from './styles.modules.css';
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
	const [data, setData] = useState({
		username: undefined,
		email: undefined,
		password: undefined
	})
	const { error, dispatch } = useContext(AuthContext)

	const navigate = useNavigate();

	const handleChange = (e) => {
		console.log(e.target.value)
		setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("/auth/register", data);
			console.log(res.data);
			navigate("/login")
			//   dispatch({ type: "LOGIN_START" });
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};
	console.log(error)
	return (
		<div>
			<div className='signup_container'>
				<div className='signup_form_container'>

					<div className='top'>
						<form className='form_container' >
							<h1 style={{"font-family": "'Fira Sans', sans-serif"}}>Register User</h1>
							<input
								type="text"
								placeholder="User Name"
								id="username"
								onChange={handleChange}
								className='input'
							/>
							<input
								type="email"
								placeholder="Email"
								id="email"
								onChange={handleChange}
								className='input'
							/>
							<input
								type="password"
								placeholder="Password"
								id="password"
								onChange={handleChange}
								className='input'
							/>

							{error && <div className='error_msg'>{error.message}</div>}
							<button type="submit" onClick={handleClick} className='green_btn'>
								Sign Up
							</button>
						</form>

					</div>

				</div>
				<div className='left'>
					<h1 style={{ "font-family": "'Fira Sans', sans-serif" }}>User Already Exist?</h1>
					<Link to="/login">
						<button type="button" className='white_btn'>
							Log in
						</button>
					</Link>
				</div>
			</div>

		</div>
	);
};

export default Register;
