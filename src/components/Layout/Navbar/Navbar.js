import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<a className="navbar-brand ml-5" href="/">
				Quill & Parchment
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto mr-5">
					<li className="nav-item">
						<a className="nav-link" href="/register">
							Register
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/login">
							Login
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/prompts">
							Prompts
						</a>
					</li>
					{/* <li className='nav-item'>
            <a className='nav-link' href='/stories'>
              Login
            </a>
          </li> */}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
