import React from 'react'
import dreamersLogo from '../../../assets/img/dreamersLogo.gif'

const Footer = () => {
    return (
        <footer className="border-top container">
            <div className="footer-section">
                <img
                    src={dreamersLogo}
                    alt="dreamers logo"
                    className="img-fluid img-responsive"
                />
                <p>@2020 Dreamers LLC</p>
            </div>
            <div className="footer-section">
                <h4>Coming Soon</h4>
                <ul>
                    <li>Writing Spaces</li>
                    <li>Peer Edit and Review</li>
                    <li>Publishing</li>
                    <li>Community Discussions</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                    <li>Resource 1</li>
                    <li>Resource 2</li>
                    <li>Resource 3</li>
                    <li>Resource 4</li>
                    <li>More</li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>About</h4>
                <ul>
                    <li>Our Mission</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
