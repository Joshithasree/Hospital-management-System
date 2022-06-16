import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './Components/User/User';
import './App.css';
import AdminHomePage from './Components/Admin/AdminHomePage';
import AddDepartmentForm from './Components/Department/addDepartment';
import Appointments from './Components/Doctor/Appointments';
import ErrorBoundary from './Components/ErrorBoundary';
import Footer from './Components/Footer';
import Header from './Components/header';
import LogIn from './Components/Login';
import PatientHomePage from './Components/Patient';
import Signup from './Components/Register/Register';
import store from './utils/Redux/store';
import BookAppointment from './Components/Patient/bookAppointment';
import GetDoctor from './Components/Admin/GetDoctors';
import ViewAppointments from './Components/ViewAppointments';
import DoctorLogin from './Components/Doctor/doctorLogin';
import UpdateAppointment from './Components/Admin/UpdateAppointment';
function App() {
  return (
    
    <ErrorBoundary>
      <Provider store={store}>
      {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<LogIn />}/>
          <Route path="/doctorLogin" element= {<DoctorLogin />} />
          <Route path="/login" element= {<LogIn/>} />
          <Route path="/signup" element= {<Signup/>} /> 
          <Route path='/user' element={<User />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path='/getDoctors' element={<GetDoctor />} />
          <Route path='/bookAppointment' element={<BookAppointment/>} />
          <Route path="/admin/:pagename" element={<AdminHomePage/>} />
          <Route path="/patient/:pagename" element={<PatientHomePage/>} />
          <Route path="/doctor/appointments" element={<ViewAppointments />} />
          <Route path="/admin/updateAppointment/:doctorId/:appointmentId" element={<UpdateAppointment />} />

        </Routes>
        <Footer />
      </Provider>
    </ErrorBoundary>
  
  );
}
export default App;
