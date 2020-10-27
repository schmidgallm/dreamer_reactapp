import React from 'react';

const SideNav = () => {
    return (
        <nav id="side-nav" className="navbar navbar-expand-lg navbar-light">
            <div className="side-nav-content">
                <div className="side-nav-header">
                    <h1>Dreamers</h1>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav mr-auto flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="/stories">
                            Stories
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Prompts
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="/prompts">
                                All Prompts
                            </a>
                            <a
                                className="dropdown-item"
                                href="/prompts/create/submit"
                            >
                                Create a Prompt
                            </a>
                            <div className="dropdown-divider"></div>
                            <a
                                className="dropdown-item"
                                href="/dashboard/prompts"
                            >
                                Your Prompts
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/community">
                            Community
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Dashboard
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a
                                className="dropdown-item"
                                href="/dashboard/profile"
                            >
                                Profile
                            </a>
                            <a
                                className="dropdown-item"
                                href="/dashboard/prompts"
                            >
                                Your Prompts
                            </a>
                            <a
                                className="dropdown-item"
                                href="/dashboard/stories"
                            >
                                Your Stories
                            </a>
                            <a
                                className="dropdown-item"
                                href="/dashboard/charts"
                            >
                                Charts
                            </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Resources
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a
                                className="dropdown-item"
                                href="/resources/copyrights"
                            >
                                Copyrights
                            </a>
                            <a
                                className="dropdown-item"
                                href="/resources/editing"
                            >
                                Editing
                            </a>
                            <a
                                className="dropdown-item"
                                href="/resources/agents"
                            >
                                Literary Agents
                            </a>
                            <a
                                className="dropdown-item"
                                href="/resources/marketing"
                            >
                                Marketing
                            </a>
                            <a
                                className="dropdown-item"
                                href="/resources/publishing"
                            >
                                Publishing
                            </a>
                            <a
                                className="dropdown-item"
                                href="/resources/classes"
                            >
                                Classes
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/resources">
                                All Resources
                            </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Support
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="/faq">
                                FAQ
                            </a>
                            <a className="dropdown-item" href="/tickets">
                                Support Tickets
                            </a>
                            <a className="dropdown-item" href="/about">
                                About Us
                            </a>
                            <a className="dropdown-item" href="/advertising">
                                Advertsing
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SideNav;
