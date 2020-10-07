import React from 'react'
import cta from '../../../../assets/img/cta.png'

const Header = () => {
    return (
        <header className="home-header">
            <div className="home-header-content">
                <div className="copy">
                    <h1>
                        The Exclusive Toolkit For Authors Of All Levels And Avid
                        Readers
                    </h1>
                    <p>
                        Join our creative community for authors by authors.
                        Thousands of prompts, published stories, analytics
                        boosts, and tons of resources. All for you to level up
                        your writing skills.
                    </p>
                    <a href="/subscribe" className="btn btn-secondary">
                        Start Your Dream Today
                    </a>
                </div>
                <div className="img">
                    <img src={cta} alt="vector drawn computer and pens" />
                </div>
            </div>
        </header>
    )
}

export default Header
