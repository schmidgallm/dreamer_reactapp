import React, { Fragment } from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <Fragment>
      <div className='header'>
        <div className='header-text'>
          <h1>
            Create. Share.{' '}
            <span>
              <em>Inspire</em>
            </span>
          </h1>
          <p>For authors by authors. Inspire and be inspired.</p>
          <button className='btn btn-primary'>Begin</button>
        </div>
        <div className='header-img'></div>
        <div className='circle circle-1'></div>
        <div className='circle circle-2'></div>
      </div>
      <div className='section section-1 container'></div>
    </Fragment>
  );
};

export default Landing;
