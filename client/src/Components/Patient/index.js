import Cookies from 'js-cookie';
import React from 'react';
import { useParams } from 'react-router-dom';
import User from '../User/User';
import GetDoctor from '../Admin/GetDoctors';
import Appointments from '../Doctor/Appointments';
import Header from '../header';
import BookAppointment from './bookAppointment';
import Profile from './Profile';
import ViewAppointments from '../ViewAppointments';
function PatientHomePage() {
  const { pagename } = useParams();
  console.log(pagename);
  const getPage = () => {
    switch (pagename) {
      case 'bookAppointment':
        return <BookAppointment />;
      case 'appointments':
        return <ViewAppointments />;
      case 'getDoctors':
        return <GetDoctor />
      default:
        return <h1>Page Not Found</h1>;
    }
  };
  return (
    <div>
      <User />
      <Header msg={Cookies.get('patientName')} />
      {getPage()}
    </div>
  );
}
export default PatientHomePage;
