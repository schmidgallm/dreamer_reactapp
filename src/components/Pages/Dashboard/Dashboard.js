// Dependencies
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux Actions
import { getCurrentProfile } from '../../../actions/profile';

// Components
import Spinner from '../../Layout/Spinner';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  // get profile on component render
  useEffect(() => {
    getCurrentProfile();
    console.log(profile);
  }, []);

  // return
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className='dashboard'>
      <div className='menu'>
        <div className='profile'></div>
        <ul>
          <li>
            <i className='fa fa-user'></i>Profile
          </li>
          <li>
            <i className='fa fa-pencil'></i>Prompts
          </li>
          <li>
            <i className='fa fa-book'></i>Stories
          </li>
          <li>
            <i className='fa fa-line-chart'></i>Charts
          </li>
        </ul>
      </div>
      <div className='data'>
        <div className='box'>
          <p className='lead'>
            <i className='fa fa-user'></i> Welcome {user && user.name}
          </p>
          {profile !== null ? (
            <Fragment>has</Fragment>
          ) : (
            <Fragment>
              <p>No profile created yet. Please create one below.</p>
              <Link to='/create-profile' className='btn btn-primary my-2'>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
