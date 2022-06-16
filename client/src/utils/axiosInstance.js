import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}api`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `${localStorage.getItem('token')}`,
  },
});
export default axiosInstance;
