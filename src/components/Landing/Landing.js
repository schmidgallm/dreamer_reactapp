import React, { Fragment } from 'react';
import mediumImg from './img/header-img-medium.jpg';
import './Landing.css';

const Landing = () => {
  return (
    <Fragment>
      <div className='header'>
        <div className='header-text'>
          <h1>
            Create. Share. <span>Inspire</span>
          </h1>
          <p>For authors by authors. Inspire and be inspired.</p>
          <button className='btn btn-primary'>Begin</button>
        </div>
        <div className='header-img'>
          <img src={mediumImg} alt='inspirational' />
        </div>
      </div>
      <div className='feature'>dkfjkdfj</div>
    </Fragment>
  );
};

export default Landing;
