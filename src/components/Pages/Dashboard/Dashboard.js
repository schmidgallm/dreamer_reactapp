// Dependencies
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux Actions
import { getCurrentProfile } from '../../../actions/profile';

// Components
import Spinner from '../../Layout/Spinner';
import Profile from './Profile';
import Prompts from './Prompts';
import Stories from './Stories';
import Charts from './Charts';

const Dashboard = ({
    getCurrentProfile, // redux action
    auth: { user }, // redux state
    profile: { profile, loading }, // redux state
    slug, // prop passed to component to decide on which page to render
}) => {
    // get profile on component render
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    // render component based on slug prop
    const renderSlug = slug => {
        switch (slug) {
            case 'profile':
                return <Profile profile={profile} user={user} />;
            case 'prompts':
                return <Prompts profile={profile} />;
            case 'stories':
                return <Stories profile={profile} />;
            case 'charts':
                return <Charts profile={profile} />;
            default:
                return <Profile profile={profile} />;
        }
    };

    // return
    return loading && profile === null ? (
        <Spinner />
    ) : (
        <div className="dashboard-container">
            <div className="dashboard">
                <div className="data-wrapper">
                    {profile !== null ? (
                        <div>{renderSlug(slug)}</div>
                    ) : (
                        <Fragment>
                            <h1>Welcome to Dreamers!!!</h1>
                            <p>
                                While you are here please create a profile for
                                yourself. Feel free to include a pen name as
                                well!!
                            </p>
                            <Link
                                to="/create-profile"
                                className="btn btn-primary my-2"
                            >
                                Create Profile
                            </Link>
                        </Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

/*
    {location.state.newUser && (
                                <Fragment>
                                    
                                </Fragment>
                            )}
*/
