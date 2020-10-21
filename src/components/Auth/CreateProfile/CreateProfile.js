import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    // set state
    const [formData, setFormData] = useState({
        penName: '',
        bio: '',
        favoriteBook: '',
        favoriteAuthor: '',
    });

    const { penName, bio, favoriteBook, favoriteAuthor } = formData;

    // on change handler
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    // on submit handler
    const onSubmit = e => {
        e.preventDefault();
        // dispatch redux action
        createProfile(formData, history);
    };

    return (
        <div className="center">
            <div className="container register">
                <div className="jumbotron">
                    <h1>Create Profile</h1>
                    <div className="diagonal"></div>
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="penName">Pen Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="penName"
                            name="penName"
                            value={penName}
                            onChange={e => onChange(e)}
                        />
                        <small
                            id="penNameHelp"
                            className="form-text text-muted"
                        >
                            Pen Name is optional if you wish to use your real
                            name.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bio"
                            name="bio"
                            value={bio}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="favoriteBook">Favorite Book</label>
                        <input
                            type="text"
                            className="form-control"
                            id="favoriteBook"
                            name="favoriteBook"
                            value={favoriteBook}
                            onChange={e => onChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="favoriteAuthor">Favorite Author</label>
                        <input
                            type="text"
                            className="form-control"
                            id="favoriteAuthor"
                            name="favoriteAuthor"
                            value={favoriteAuthor}
                            onChange={e => onChange(e)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="register-btn btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
