import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';

const MobileNav = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <div className='mobile-nav lg-hide'>
      <ul center>
        <li>
          <NavLink to='/'>
            <i className='fa fa-home'></i>
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to='/prompts'>
            <i className='fa fa-pencil'></i>
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to='/'>
            <i className='fa fa-search'></i>
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink to={isAuthenticated ? '/dashboard' : '/login'}>
            <i className='fa fa-user'></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

MobileNav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(MobileNav);
