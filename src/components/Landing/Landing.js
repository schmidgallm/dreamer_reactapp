import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Landing.css';
import HeaderImg from './img/header-img.png';
import quotes from '../../config/quotes';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Fragment>
      {/* Header */}
      <div className='header'>
        <div className='wrapper'>
          <div className='header-text'>
            <div className='grid'>
              <h1>
                Create. Share. <em>jfjdkfj</em>
              </h1>
              <p>For writers by writers.</p>
              <button className='btn btn-warning'>Begin</button>
            </div>
          </div>
          <div className='header-img'>
            <img
              src={HeaderImg}
              alt='vector-building'
              className='animated pulse infinite'
            />
          </div>

          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 694 138'
          >
            <path
              className='st0'
              d='M-1,122c0,0,49-60,96-78c65.3-25.01,82,24,137,47s58,33,95,12s44-46,88-50s77,48.53,109,40
  c45-12,65.08-50.19,87-51c27-1,83-43,83-43v139H-1V122z'
              fill='#fff'
            />
          </svg>
        </div>
      </div>

      {/* Card Section */}
      <div className='cards container'>
        <div className='card'>
          <h3>Get Inspired</h3>
          <p>
            Stuck on blank page? Lets try and make it easy for you. Check out
            all the writing prompts for ideas.
          </p>
        </div>
        <div className='card'>
          <h3>Upload Work</h3>
          <p>
            We make uploading as easy as possible. Once uploaded your work will
            be ready for the public. Want to boost it top of page. Check out our
            Sponsered Books section.
          </p>
        </div>
        <div className='card'>
          <h3>Get Paid</h3>
          <p>
            Its your work so why let some publishing company take most of
            earnings? Here you will recieve 80% of all sales.
          </p>
        </div>
      </div>

      {/* Section 1 */}
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
          <h3>Sign up and start writing!</h3>
          <form>
            <div className='form-group'>
              <label htmlFor='username'>User Name</label>
              <input
                type='text'
                className='form-control'
                id='user'
                aria-describedby='name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
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
              <label htmlFor='password1'>Password</label>
              <input type='password' className='form-control' id='password1' />
            </div>
            <div className='form-group'>
              <label htmlFor='password2'>Re-Type Password</label>
              <input type='password' className='form-control' id='password2' />
            </div>
            <div className='form-group form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='exampleCheck1'
              />
              <label className='form-check-label' htmlFor='exampleCheck1'>
                Email me for updates and new features
              </label>
            </div>
            <button type='submit' className='btn btn-warning'>
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Section 2 */}
      <div className='section section-2 container'>
        <div className='quotes'>
          <span>
            <i className='fa fa-quote-left'></i>
          </span>
          <p className='quote'>
            {quotes[Math.floor(Math.random() * quotes.length)].quote}
          </p>
          <p className='author'>
            - {quotes[Math.floor(Math.random() * quotes.length)].author}
          </p>
        </div>
        <div className='section-text section-2-text'>
          <h2>Join millions of authors in the new way to publicate.</h2>
        </div>
      </div>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
