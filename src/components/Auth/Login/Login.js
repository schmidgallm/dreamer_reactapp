import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
    // init state
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    // on change handler
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    // on submit handler
    const onSubmit = e => {
        e.preventDefault();
        // REDUX ACTION HERE
        login(email, password);
    };

    // Redirect on successful login
    if (isAuthenticated) {
        return <Redirect to="/community" />;
    }

    return (
        <div className="auth-form">
            <div className="form-container">
                <form onSubmit={onSubmit}>
                    <h3 className="text-center">Login to Dreamers</h3>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
                        />
                    </div>

                    <button type="submit" className="login-btn btn btn-primary">
                        Submit
                    </button>
                    <p>
                        Don't have an account?{' '}
                        <Link to="/register">
                            <b>
                                <i>Register</i>
                            </b>
                        </Link>
                    </p>
                </form>
            </div>
            <a href="/forgot-password" className="forgot-password">
                Forgot Your Password?
            </a>
        </div>
    );
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
