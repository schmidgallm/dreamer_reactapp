import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../../actions/auth'


const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
  if(!isAuthenticated) {
      return (
          null
      )
  }

  return (
    <nav className="px-5 navbar navbar-expand-lg navbar-light">
    <div className="navbar-brand">
        Hi {user ? user.name : null}
    </div>
    <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"></span>
    </button>

    <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
    >
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/community">
                    Community
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                    Dashboard
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/prompts">
                    Prompts
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/stories">
                    Stories
                </a>
            </li>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    Resources
                </a>
                <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                >
                    <a
                        className="dropdown-item"
                        href="/resources/copyrights"
                    >
                        Copyrights
                    </a>
                    <a
                        className="dropdown-item"
                        href="/resources/editing"
                    >
                        Editing
                    </a>
                    <a
                        className="dropdown-item"
                        href="/resources/agents"
                    >
                        Literary Agents
                    </a>
                    <a
                        className="dropdown-item"
                        href="/resources/marketing"
                    >
                        Marketing
                    </a>
                    <a
                        className="dropdown-item"
                        href="/resources/publishing"
                    >
                        Publishing
                    </a>
                    <a
                        className="dropdown-item"
                        href="/resources/classes"
                    >
                        Classes
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/resources">
                        All Resources
                    </a>
                </div>
            </li>
            <li className="nav-item">
                <a
                    className="nav-link btn btn-secondary px-4 text-white ml-2"
                    href="/subscribe"
                >
                    Go Pro
                </a>
            </li>
            <li className="nav-item">
                <a
                    className="nav-link btn btn-secondary px-4 text-white ml-2"
                    href="#"
                    onClick={logout}
                >
                    Logout
                </a>
            </li>
        </ul>
    </div>
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
