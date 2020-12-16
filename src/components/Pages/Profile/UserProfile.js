import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const UserProfile = ({ profile }) => {
    console.log(profile);
    return (
        <div className="container mt-5 user-profile">
            <header className="profile-header border p-3 my-5">
                <div className="profile-header-img"></div>
                <div className="profile-header-copy">
                    {profile.penName ? (
                        <h2>{profile.penName}</h2>
                    ) : (
                        <h2>{profile.user.name}</h2>
                    )}
                    <p>
                        Dreaming since{' '}
                        {moment(profile.user.date).format('MM/DD/YYYY')} |{' '}
                        <span>Rating: {profile.rating}</span>
                    </p>
                </div>
            </header>
            <div className="profile-body border p-3 my-5">
                <div className="profile-body-about">
                    <h3>About</h3>
                    <p>{profile.bio}</p>
                </div>
                <div className="profile-body-featured-prompts p3"></div>
                <div className="profile-body-featured-stories p3"></div>
                <div className="profile-body-most-liked p3"></div>
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default UserProfile;
