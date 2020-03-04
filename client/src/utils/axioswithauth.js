import Axios from 'axios';

export const axiosWithAuth = () => {
  return Axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: localStorage.getItem('token')
    }
  });
};
