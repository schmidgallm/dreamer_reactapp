import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileById } from '../../../actions/profile';
import Spinner from '../../Layout/Spinner';

const Profile = ({
    getProfileById,
    profile: { profile, loading },
    auth,
    match,
}) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);

    console.log(profile);
    return (
        <div className="profile">
            {profile === null || loading ? <Spinner /> : <Fragment></Fragment>}
        </div>
    );
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
