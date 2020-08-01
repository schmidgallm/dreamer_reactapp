import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';
import './Dashboard.css';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
    console.log(profile);
  }, []);
  return (
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
        <div className='box'></div>
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
