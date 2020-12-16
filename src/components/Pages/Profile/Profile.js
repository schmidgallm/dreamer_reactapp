// Dependencies
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux Actions
import { getProfileById } from '../../../actions/profile';

// Components
import Spinner from '../../Layout/Spinner';
import UserProfile from './UserProfile';

const Profile = ({ getProfileById, profile: { profile, loading }, match }) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    return (profile === null) | loading ? (
        <Spinner />
    ) : (
        <UserProfile profile={profile[0]} loading={loading} />
    );
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
