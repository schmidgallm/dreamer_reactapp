import React from 'react'
import cta from '../../../../assets/img/cta.jpg'

const Header = () => {
    return (
        <header className="home-header">
            <div className="copy">
                <h1>Welcome to Dreamers!</h1>
                <p>
                    Join our creative community for authors by authors.
                    Thousands of prompts, published stories, analytics boosts,
                    and tons of resources. All for you to level up your writing
                    skills.
                </p>
                <a href="/subscribe" className="btn btn-primary">
                    Level Up
                </a>
            </div>
            <div className="img">
                <img src={cta} alt="vector drawn computer and pens" />
            </div>
        </header>
    )
}

export default Header
