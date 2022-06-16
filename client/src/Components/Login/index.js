import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
      });
    
      const { loading, error, dispatch } = useContext(AuthContext);
      const {user} = useContext(AuthContext)
      const navigate = useNavigate()
    
      const handleChange = (e) => {
          console.log(e.target.value)
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/auth/login", credentials);
          console.log(res.data);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
          if(res.data.isAdmin){
            navigate("/admin/addDoctor")
          }else{
            navigate("/patient/bookAppointment")
          }
            
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };
      
	return (
    <div>
    <div className={styles.top}>
					<h1 style={{"font-family": "'Fira Sans', sans-serif"}}>New User ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h1>Login to Your Account</h1>
						<input
							 type="text"
                             placeholder="username"
                             id="username"
                             onChange={handleChange}
							className={styles.input}
						/>
						<input
						type="password"
                        placeholder="password"
                        id="password"
                        onChange={handleChange}
						className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error.message}</div>}
						<button type="submit" onClick={handleClick} className={styles.green_btn}>
							Log In
						</button>
					</form>
				</div>
				
			</div>
      
		</div>
    
        </div>
	);
};

export default Login;
