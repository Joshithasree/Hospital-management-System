import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Login/styles.module.css";
import { AuthContext } from "../../Context/AuthContext";

const DoctorLogin = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        password: "",
      });
    
      const { loading, error, dispatch } = useContext(AuthContext);
      const navigate = useNavigate()
    
      const handleChange = (e) => {
          console.log(e.target.value)
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
    
      const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/login", credentials);
          console.log(res.data);
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
          navigate("/appointments") 
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
      };
      
	return (
    <div>
    
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h1>Doctor Login</h1>
						<input
							 type="text"
                             placeholder="name"
                             id="name"
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
						{/* <input
							 type="text"
                             placeholder="role"
                             id="role"
                             onChange={handleChange}
							className={styles.input}
						/> */}
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

export default DoctorLogin;







