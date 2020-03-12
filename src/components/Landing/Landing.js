import React, { Fragment } from 'react';
import './Landing.css';
import quotes from '../../config/quotes';

const Landing = () => {
  return (
    <Fragment>
      {console.log(quotes)}
      {/* Header */}
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

export default Landing;
