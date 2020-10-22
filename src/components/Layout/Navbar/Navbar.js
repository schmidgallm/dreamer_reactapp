import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
    if (!isAuthenticated) {
        return null;
    }

    return (
        <nav id="top-nav" className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-brand">Hi {user ? user.name : null}</div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i id="top-nav-fa" className="fa fa-user"></i>
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <a className="dropdown-item" href="/dashboard">
                            Dashboard
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" onClick={logout}>
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
