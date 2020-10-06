import React from 'react'
import Container from '../../../Layout/Container'

const Cards = () => {
    return (
        <Container>
            <div className="card-container container">
                <div className="card-container-header">
                    <h2>Why Join the Dreamers Community?</h2>
                    <p>
                        Join the creative community and expand your skill set as
                        an author. Inspiration, analytics, community of peers,
                        and so much more.
                    </p>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="card-body">
                            <i class="fa fa-pencil"></i>
                            <h5 className="card-title">Inspiration</h5>
                            <p className="card-text">
                                Read and contribute writing prompts to either
                                gain or give inspiration. Either way its a great
                                way to warm up.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <i class="fa fa-line-chart"></i>
                            <h5 className="card-title">Analytic Trends</h5>
                            <p className="card-text">
                                Gain insights on industries top trends. Also
                                gain insights to each of your posts to track
                                your progress of a writer.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <i class="fa fa-users"></i>
                            <h5 className="card-title">Community</h5>
                            <p className="card-text">
                                Everyone is welcome! From novice to professional
                                everyone will gain something unique.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card-container-footer">
                    <a href="/register" className="btn btn-secondary">
                        Join our community now!
                    </a>
                </div>
            </div>
        </Container>
    )
}

export default Cards
