import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setAlert } from '../../../actions/alert'
import { register } from '../../../actions/auth'

const Register = ({ setAlert, register, isAuthenticated }) => {
    // init state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

    // on change handler
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    // on submit handler
    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            // REDUX ACTION HERE
            return setAlert('passwords do not match', 'danger')
        }
        // REDUX ACTION HERE
        register({ name, email, password })
    }

    // Redirect on successful registeration
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="auth-form">
            <div className="form-container">
            <form onSubmit={onSubmit}>
            <h3 className="text-center">Register For Dreamers</h3>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Re-Enter Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password2"
                        name="password2"
                        value={password2}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>

                <button type="submit" className="register-btn btn btn-primary">
                    Submit
                </button>
                <p>
                Alredy have an account?{' '}
                <Link to="/login" className="sign-in-msg">
                    Sign In
                </Link>
            </p>
            </form>
           
            </div>
        </div>
    )
}

// init prop types
Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

// map state to props to find if authenticated
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

// connect takes two args. First is any state to map. Second is object with any actions to bring in
// connect also allows us to use actions as props
export default connect(mapStateToProps, { setAlert, register })(Register)
