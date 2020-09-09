import React from 'react'

const Home = () => {
    return (
        <div className="home">
            <div className="grid hero p-3 my-5">
                <div className="hero-item hero-item-1 bg-image center">
                    <h3>Prompts</h3>
                </div>
                <div className="hero-item hero-item-2 bg-image center">
                    <h3>Resources</h3>
                </div>
                <div className="hero-item hero-item-3 bg-image center">
                    <h3>Dashboard</h3>
                </div>
                <div className="hero-item hero-item-4 bg-image center">
                    <h3>Community</h3>
                </div>
            </div>
            <div className="spotlight py-3 container my-5">
                <h2>Author Spotlight | Michael Schmidgall</h2>
            </div>
        </div>
    )
}

export default Home
