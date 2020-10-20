import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Layout/Spinner';
import { getAllProfiles } from '../../../actions/profile';

const Profiles = ({ getAllProfiles, profile: { profiles, loading } }) => {
    // redux action to fetch all profiles
    useEffect(() => {
        getAllProfiles();
    }, []);

    console.log(profiles);
    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <h1>Writers</h1>
                    <p>Connect with other writers</p>
                    <div>
                        {profiles.length > 0 ? (
                            profiles.map(prof => <p>{prof.penName}</p>)
                        ) : (
                            <h4>No profiles found</h4>
                        )}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

Profiles.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile,
});

export default connect(mapStateToProps, { getAllProfiles })(Profiles);
