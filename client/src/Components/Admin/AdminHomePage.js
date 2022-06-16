import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddDepartmentForm from '../Department/addDepartment';
import GetDepartment from '../Department/getDepartment';
import Appointments from '../Doctor/Appointments';
import Header from '../header';
import AddPatientForm from '../Patient/addPatient';
import BookAppointment from '../Patient/bookAppointment';
import Patients from '../Patient/Patients';
import ViewAppointments from '../ViewAppointments';
import AddDoctorForm from './AddDoctor';
import GetDoctor from './GetDoctors';
import NavBar from './Navbar';
import Profile from './Profile';
function AdminHomePage() {
  const name = useSelector((state) => state.login.name);
  const { pagename } = useParams();
  const getPage = () => {
    switch (pagename) {
      case 'addDepartment':
        return <AddDepartmentForm />;
      case 'getDepartment':
        return <GetDepartment />;
      case 'addPatient':
        return <AddPatientForm />;
      case 'patients':
        return <Patients />;
      case 'bookAppointment':
        return <BookAppointment />;
      case 'addDoctor':
        return <AddDoctorForm />;
      case 'getDoctors':
        return <GetDoctor />;
      case 'getAppointments':
        return <ViewAppointments />;
      default:
        return <h1>Page Not Found</h1>;
    }
  };
  return (
    <div>
      <NavBar />
      <Header msg={name} />
      {getPage()}
    </div>
  );
}
export default AdminHomePage;
