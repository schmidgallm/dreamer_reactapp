import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../../actions/auth'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-link nav-brand">
                    <NavLink className="nav-brand" to="/">
                        Dreamers
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/prompts">
                        Prompts
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/prompts">
                        Resources
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/prompts">
                        Community
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/prompts">
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to={isAuthenticated ? '/dashboard' : '/login'}
                    >
                        <i className="fa fa-user"></i> Profile
                    </NavLink>
                </li>
                <li className="nav-link">
                    {isAuthenticated && (
                        <NavLink onClick={logout} to="#!">
                            <i className="fa fa-sign-out" />
                            {` `}
                            <span className="hide-sm">Logout</span>
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar)

// Form Section to search site
/*
  <form className='form-inline my-2 my-lg-0'>
    <input
      className='form-control mr-sm-2'
      style={{ fontFamily: 'Arial, FontAwesome' }}
      type='search'
      placeholder='&#xf002; Search topics'
      aria-label='Search'
    />
  </form>
*/
