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
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  // init all state
  const [tab, setTab] = useState('profile');

  // get profile on component render
  useEffect(() => {
    getCurrentProfile();
  }, []);

  // render tab on state selected
  const changeTabHandler = (tab) => {
    setTab(tab);
    console.log(tab);
  };

  const renderTab = (tab) => {
    switch (tab) {
      case 'profile':
        return <Profile profile={profile} />;
      case 'prompts':
        return <Prompts />;
      case 'stories':
        return <Stories />;
      case 'charts':
        return <Charts />;
      default:
        return <Profile />;
    }
  };

  // return
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className='dashboard'>
      <div className='menu'>
        <div className='profile'></div>
        <ul>
          <li onClick={() => changeTabHandler('profile')}>
            <i className='fa fa-user'></i>Profile
          </li>
          <li onClick={() => changeTabHandler('prompts')}>
            <i className='fa fa-pencil'></i>Prompts
          </li>
          <li onClick={() => changeTabHandler('stories')}>
            <i className='fa fa-book'></i>Stories
          </li>
          <li onClick={() => changeTabHandler('charts')}>
            <i className='fa fa-line-chart'></i>Charts
          </li>
        </ul>
      </div>
      <div className='data'>
        <div className='center my-5'>
          {profile !== null ? (
            <div className='center'>{renderTab(tab)}</div>
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
