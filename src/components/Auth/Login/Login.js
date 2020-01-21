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
    <div className='container register'>
      <form onSubmit={onSubmit}>
        <div class='form-group'>
          <label for='email'>Email address</label>
          <input
            type='email'
            class='form-control'
            id='email'
            aria-describedby='emailHelp'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div class='form-group'>
          <label for='password'>Password</label>
          <input
            type='password'
            class='form-control'
            id='password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <button type='submit' class='login-btn btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
