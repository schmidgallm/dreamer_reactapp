import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ profile }) => {
    console.log(profile);
    return (
        <div className="container mt-5">
            <div className="profile-header">
                {profile.penName ? (
                    <h2>{profile.penName}</h2>
                ) : (
                    <h2>{profile.user.name}</h2>
                )}
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default UserProfile;
