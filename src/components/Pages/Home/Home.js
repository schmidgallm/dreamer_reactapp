import React from 'react'
import hero from '../../../assets/img/hero.jpg'
import inspiration from '../../../assets/img/inspiration.jpg'
import resources from '../../../assets/img/resources.jpg'
import analytics from '../../../assets/img/analytics.jpg'
import justin from '../../../assets/img/justin.jpg'

const Home = () => {
    return (
        <main className="home">
            {/* Header */}
            <header className="header-container">
                <img
                    className="img-fluid img-responsive"
                    src={hero}
                    alt="writers collaborating"
                />
                <div className="overlay" />
                <div className="header-text">
                    <h1>Analyze your skill and level up</h1>
                    <p>
                        Don't just stop with prompts. Get access to detailed
                        analysis on how your stories and prompts are performing
                        while measuring your skills increasing as a writer.
                    </p>
                    <p>
                        Plus access to rank boosting on all your works, weekly
                        contest giveaways, and more!
                    </p>
                    <a href="/subscribe" className="home-btn btn btn-primary">
                        Level Up
                    </a>
                </div>
            </header>
            {/* Writers Block */}
            <div className="writers-block">
                <h2>Writers Block</h2>
                <div className="cards">
                    <div className="card">
                        <img
                            src={inspiration}
                            className="card-img-top"
                            alt="person writing"
                        />
                        <div className="overlay" />
                        <div className="card-body">
                            <h5 className="card-title">Inspiration</h5>
                            <p className="card-text">
                                Wheter your story has yet to begin or you're
                                already suffering from witer's block, a little
                                inspiration will go a long way. Check out
                                thousand of prompts to get that imagination
                                going or post one to help your fellow authors.
                            </p>
                            <a href="prompts" className="btn btn-secondary">
                                Get Inspiration
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src={resources}
                            className="card-img-top"
                            alt="person writing"
                        />
                        <div className="overlay" />
                        <div className="card-body">
                            <h5 className="card-title">Resources</h5>
                            <p className="card-text">
                                Writing can be tough without the right resources
                                backing you up. We keep a treasure trove of
                                resources for you disposal. Got a question or
                                need some advise? Just check out all the
                                resources. Keep writing we know you can do it!
                            </p>
                            <a href="resources" className="btn btn-secondary">
                                Get Resources
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src={analytics}
                            className="card-img-top"
                            alt="person writing"
                        />
                        <div className="overlay" />
                        <div className="card-body">
                            <h5 className="card-title">Analytics</h5>
                            <p className="card-text">
                                Keep leveling up your skill as an author and
                                check out your analytics daily. See how many
                                people have viewed your submissions. How many
                                people liked it, left comments, and much more.
                            </p>
                            <a href="/dashboard" className="btn btn-secondary">
                                Get Stats
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Author Spotlights */}
            <div className="spotlights">
                <h2>Author Spotlights</h2>
                <div className="authors container">
                    <div className="author">
                        <div className="author-img">
                            <img src={justin} alt="justin thao" />
                        </div>
                        <div className="author-bio">
                            <h3>Justin Thau</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="author">
                        <div className="author-bio">
                            <h3>Justin Thau</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="author-img">
                            <img src={justin} alt="justin thao" />
                        </div>
                    </div>
                    <div className="author">
                        <div className="author-img">
                            <img src={justin} alt="justin thao" />
                        </div>
                        <div className="author-bio">
                            <h3>Justin Thau</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Message From Us */}
            <div className="message">
                <h2>Message From Us</h2>
                <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus. Temporibus autem quibusdam et aut
                    officiis debitis aut rerum necessitatibus saepe eveniet ut
                    et voluptates repudiandae sint et molestiae non recusandae.
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat.
                </p>
            </div>
        </main>
    )
}

export default Home
