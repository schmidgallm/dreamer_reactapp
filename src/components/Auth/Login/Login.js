import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // init state
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  // on change handler
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // on submit handler
  const onSubmit = e => {
    e.preventDefault();
    // REDUX ACTION HERE
    console.log(formData);
  };

  return (
    <div className='container login'>
      <div className='jumbotron'>
        <h1>
          Inspire. Share. <span>Create.</span>
        </h1>
        <div className='diagonal'></div>
      </div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='email'
            aria-describedby='emailHelp'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <button type='submit' className='login-btn btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
