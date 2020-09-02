import React from 'react';
import Register from '../../Auth/Register';
import cta from '../../../assets/img/cta.jpg';

const Landing = () => {
  return (
    <div className='landing'>
      <div className='hero'>
        <div className='copy'>
          <h1>Never fear the blank page again</h1>
          <p>
            Inspire or get inspired. Thousands of prompts and stories from
            writers around the globe.
          </p>
          <a className='btn btn-primary' href='/register'>
            Get Started
          </a>
        </div>
      </div>
      <div className='cards'>
        <div className='card'>
          <div className='card-header center'>Inspiration</div>
          <div className='card-body'>
            <h3>Inspire or get inspired</h3>
            <p>
              Whether you are lacking inspiration and needing that boost or
              looking to inspire your community, this is the place to do it
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='card-header center'>Author Spotlight</div>
          <div className='card-body'>
            <h3>Justin Schmidgall</h3>
            <p>
              Justin came into dreamers this year and has been a pillar of the
              writing community from the start. Publishing both prompts for
              fellow authors along with his own colleciton of short stories.{' '}
              <br />
              Check him out <a href='/'>here</a>
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='card-header center'>Coming Soon</div>
          <div className='card-body'>
            <h3>Mentorship Programs</h3>
            <p>
              We are excited to announce addition of mentorship program with our
              select authors. Additionally you may now publish your works with
              dreamers.
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='card-header center'>Message From Us</div>
          <div className='card-body'>
            <h3>For Writers by Writers</h3>
            <p>
              From our team to you we strive to bring you the best inspiration
              you can find. We are here for one reason only to bring together
              the writing community and inspire everyone to create thier
              masterpieces.
            </p>
          </div>
        </div>
      </div>
      {/* CTA SECTION */}
      <div className="cta">
        <div className="cta-container">
          <div className="cta-copy">
            <h2>Start you dream now!</h2>
            <p className="mt-0">Join our community to create, share, get inspiration or inspire others.</p>
            <img src={cta} alt='writing cartoon'/>
          </div>
        </div>
        <Register />
      </div>
    </div>
  );
};

export default Landing;
