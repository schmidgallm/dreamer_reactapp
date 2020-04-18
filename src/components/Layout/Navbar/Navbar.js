import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';
import './Navbar.css';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav ml-auto mr-5'>
      <li className='nav-item'>
        <a onClick={logout} className='nav-link' href='#!'>
          <i className='fa fa-sign-out' />
          {` `}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/prompts'>
          Prompts
        </Link>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/dashboard'>
          <i className='fa fa-user' /> {` `}
          <span className='hide-sm'>Dashboard</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='navbar-nav ml-auto mr-5'>
      <li className='nav-item'>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/prompts'>
          Prompts
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <a className='navbar-brand ml-5' href='/'>
        Quill & Parchment
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
