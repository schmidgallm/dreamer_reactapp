import React from 'react'
import cta from '../../../../assets/img/cta.jpg'

const Header = () => {
    return (
        <header className="home-header">
            <div className="copy">
                <h1>Welcome to Dreamers!</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, maxime expedita! Consequuntur saepe esse, voluptatum
                    sit ut delectus molestias similique.
                </p>
            </div>
            <div className="img">
                <img src={cta} alt="vector drawn computer and pens" />
            </div>
        </header>
    )
}

export default Header
