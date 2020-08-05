import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <NavLink className='navbar-brand' to='/'>
        Dreamers
      </NavLink>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto ml-4'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/prompts'>
              Prompts
            </NavLink>
          </li>
        </ul>

        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            style={{ fontFamily: 'Arial, FontAwesome' }}
            type='search'
            placeholder='&#xf002; Search topics'
            aria-label='Search'
          />
        </form>
        <NavLink
          className='nav-link ml-4'
          to={isAuthenticated ? '/dashboard' : '/login'}
        >
          <i className='fa fa-user'></i>
        </NavLink>
        {isAuthenticated && (
          <NavLink onClick={logout} className='nav-link' to='#!'>
            <i className='fa fa-sign-out' />
            {` `}
            <span className='hide-sm'>Logout</span>
          </NavLink>
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
