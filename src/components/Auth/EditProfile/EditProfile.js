import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../../actions/profile';
import { deleteAccount } from '../../../actions/auth';

const EditProfile = ({
    createProfile,
    history,
    toggleEditableProfile,
    deleteAccount,
}) => {
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
        createProfile(formData, history, true);

        // prop function from dashboard page that will hide form after submission
        toggleEditableProfile();
    };

    return (
        <div className="container register my-5">
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
                    <small id="penNameHelp" className="form-text text-muted">
                        Pen Name is optional if you wish to use your real name.
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

                <button type="submit" className="register-btn btn btn-primary">
                    Submit
                </button>
            </form>
            <button
                className="mt-4 btn btn-danger d-block ml-auto"
                onClick={() => deleteAccount()}
            >
                Delete Profile
            </button>
        </div>
    );
};

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
};

export default connect(null, { createProfile, deleteAccount })(
    withRouter(EditProfile)
);
