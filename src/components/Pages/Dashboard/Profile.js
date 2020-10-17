// Dependencies
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteProfile } from '../../../actions/profile';
import EditProfile from '../../Auth/EditProfile';

const Profile = ({ profile, user, deleteProfile }) => {
    const [showEditableProfile, toggleEditableProfile] = useState(false);

    return (
        <div className="dashboard-header">
            <header>
                <h2>Hi {profile.penName ? profile.penName : user.name}</h2>
                <p className="lead">Dreaming since 9/18/2020</p>
                <button
                    onClick={() => toggleEditableProfile(!showEditableProfile)}
                    className="btn btn-secondary"
                >
                    Edit Profile
                </button>
                <button
                    className="btn btn-danger ml-3"
                    onClick={() => deleteProfile()}
                >
                    Delete Profile
                </button>
            </header>

            {showEditableProfile && (
                <div className="edit-profile">
                    <EditProfile
                        toggleEditableProfile={toggleEditableProfile}
                    />
                </div>
            )}
        </div>
    );
};

Profile.propTypes = {
    deleteProfile: PropTypes.func.isRequired,
};

export default connect(null, { deleteProfile })(Profile);
