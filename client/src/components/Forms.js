import React, { useState } from 'react';

const Forms = () => {
  const [state, setstate] = useState({
    username: '',
    password: '',
    department: ''
  });
  const [signup, setsignup] = useState(false);

  const handlechange = e => {
    e.preventDefault();
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column'
      }}>
      {!signup ? (
        <>
          <h1 style={{ width: '100%', textAlign: 'center' }}>
            Login <br />
            <span style={{ fontSize: '15px' }}>
              Need to sign up? click{' '}
              <span className='signup' onClick={() => setsignup(!signup)}>
                here
              </span>
            </span>{' '}
          </h1>
          <form style={{ display: 'flex' }}>
            <br />
            <label>
              username {console.log(state)}
              <input
                name='username'
                value={state.username}
                type='text'
                onChange={handlechange}
              />
            </label>
            <label>
              Password:
              <input
                name='password'
                value={state.password}
                type='password'
                onChange={handlechange}
              />
            </label>
            <label>
              department
              <input
                name='department'
                value={state.department}
                type='text'
                onChange={handlechange}
              />
            </label>
            <input type='submit' />
          </form>
        </>
      ) : (
        <>
          <h1 style={{ width: '100%', textAlign: 'center' }}>
            Signup <br />
            <span style={{ fontSize: '15px' }}>
              Already signed up? click&nbsp;
              <span className='signup' onClick={() => setsignup(!signup)}>
                here
              </span>
            </span>
          </h1>

          <form style={{ display: 'flex' }}>
            <label>
              username {console.log(state)}
              <input
                name='username'
                value={state.username}
                type='text'
                onChange={handlechange}
              />
            </label>
            <label>
              Password:
              <input
                name='password'
                value={state.password}
                type='password'
                onChange={handlechange}
              />
            </label>
            <label>
              department
              <input
                name='department'
                value={state.department}
                type='text'
                onChange={handlechange}
              />
            </label>
            <input type='submit' />
          </form>
        </>
      )}
    </div>
  );
};

export default Forms;
