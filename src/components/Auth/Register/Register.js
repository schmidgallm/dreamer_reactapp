import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className='row register'>
      <header>
        <h1>Get inspired by thousands of authors</h1>
        <p>Read, write, share.</p>
      </header>
      <section className='success-message'>
        <h4>All Set!</h4>
      </section>
      <form className='col s12'>
        <div className='row'>
          <div className='input-field col s6'>
            <input id='first_name' type='text' className='validate' />
            <label for='first_name'>First Name</label>
          </div>
          <div className='input-field col s6'>
            <input id='last_name' type='text' className='validate' />
            <label for='last_name'>Last Name</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input id='email' type='email' className='validate' />
            <label for='email'>Email</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input id='password' type='password' className='validate' />
            <label for='password'>Password</label>
          </div>
        </div>
        <button
          className='btn waves-effect waves-light'
          type='submit'
          name='action'
        >
          Submit
          <i className='material-icons right'>send</i>
        </button>
      </form>
    </div>
  );
};
export default Register;
