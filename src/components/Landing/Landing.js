import React, { Fragment } from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <Fragment>
      <div className='header'>
        <div className='header-text'>
          <h1>
            Create. Share. <em>Inspire</em>
          </h1>
          <p>For writers by writers.</p>
          <button className='btn btn-warning'>Begin</button>
        </div>
        <div className='header-img'></div>
        <div className='circle circle-1'></div>
        <div className='circle circle-2'></div>
      </div>
      <div className='section section-1 container'>
        <div className='section-text section-1-text'>
          <h2>Find inspiration across the globe.</h2>
          <p>
            We are not your oridanry platform. Our one and only goal is to help
            any writer find what they are looking for with themes, characters,
            points of view, and anything in between. Join millions of writers
            across the globe and combat the blank page.
          </p>
        </div>
        <div className='section-cta section-1-cta'>
          <p>Sing up and start writing!</p>
          <form>
            <div className='form-group'>
              <label for='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
              <small id='emailHelp' className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className='form-group'>
              <label for='exampleInputPassword1'>Password</label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <div className='form-group form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='exampleCheck1'
              />
              <label className='form-check-label' for='exampleCheck1'>
                Check me out
              </label>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
