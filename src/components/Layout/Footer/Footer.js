import React from 'react';

const Footer = () => {
  return (
    <footer className='pt-4 my-mb-5 pt-md-5 border-top'>
      <div className='row container footer'>
        <div className='col-12 col-md'>
          <img
            className='mb-2'
            src='/docs/4.4/assets/brand/bootstrap-solid.svg'
            alt=''
            width='24'
            height='24'
          />
          <small className='d-block mb-3 text-muted'>
            Dreamers &copy; 2020
          </small>
        </div>
        <div className='col-4 col-md'>
          <h5>Coming soon</h5>
          <ul className='list-unstyled text-small'>
            <li>
              <a className='text-muted' href='/'>
                Writers Space
              </a>
            </li>
            <li>
              <a className='text-muted' href='/'>
                Peer Edits and Reviews
              </a>
            </li>
            <li>
              <a className='text-muted' href='/'>
                Publishing
              </a>
            </li>
            <li>
              <a className='text-muted' href='/'>
                Writers Discussion
              </a>
            </li>
          </ul>
        </div>
        <div className='col-4 col-md'>
          <h5>Resources</h5>
          <ul className='list-unstyled text-small'>
            <li>
              <a className='text-muted' href='/'>
                Resource 1
              </a>
            </li>
            <li>
              <a className='text-muted' href='/'>
                Resource 2
              </a>
            </li>
            <li>
              <a className='text-muted' href='/'>
                Resource 3
              </a>
            </li>
          </ul>
        </div>
        <div className='col-4 col-md'>
          <h5>About</h5>
          <ul className='list-unstyled text-small'>
            <li>
              <a className='text-muted' href='/'>
                Our Mission
              </a>
            </li>
            <li>
              <a className='text-muted' href='/'>
                Privacy
              </a>
            </li>
            <li>
              <a className='text-muted' href='/'>
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
