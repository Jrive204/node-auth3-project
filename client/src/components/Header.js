import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const { push } = useHistory();

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <p
        style={{
          textAlign: 'center',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}
        onClick={() => {
          // Axios.get('http://localhost:5000/api/auth/logout').then(response => {
          //   push('/');
          //   localStorage.clear();
          //   sessionStorage.clear();
          //   console.log(response);
          // });
          push('/');
          localStorage.clear();
        }}>
        Logout
      </p>
      &nbsp;&nbsp;
      <p
        style={{
          textAlign: 'center',
          textDecoration: 'underline',
          cursor: 'pointer',
          marginLeft: '5%'
        }}>
        <span onClick={() => push('/users')} style={{ marginLeft: '3%' }}>
          Users
        </span>
      </p>
    </div>
  );
};

export default Header;
