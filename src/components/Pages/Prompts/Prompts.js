import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllPrompts } from '../../../actions/prompts';
import Spinner from '../../Layout/Spinner';

const Prompts = ({ getAllPrompts, prompts: { prompts, loading } }) => {
    // run effect on component mount to fetch all prompts
    useEffect(() => {
        getAllPrompts();
    }, []);
    return (
        <div className="prompt-wrapper">
            <div className="prompt-wrapper-header container-fluid">
                <div className="container">
                    <h1>Writing Prompts</h1>
                    <p>
                        Wheter your story has yet to begin or you're already
                        suffering from witer's block, writing prompts will jump
                        start your brain better than a cup of coffee! Stay for
                        the endless possibilites you and others can imagine with
                        just a little headstart!
                    </p>
                </div>
            </div>
            <div className="prompt-wrapper-body container">
                <main>
                    {loading ? (
                        <Spinner />
                    ) : (
                        prompts.map(prompt => (
                            <div key={prompt._id} className="prompt card">
                                <div className="prompt-header card-header">
                                    <span>
                                        <a href={`profile/${prompt.user}`}>
                                            {prompt.penName}
                                        </a>{' '}
                                        | {prompt.publishedDate}
                                    </span>

                                    <span>
                                        {' '}
                                        <i className="fa fa-ellipsis-h"></i>
                                    </span>
                                </div>
                                <div className="prompt-body card-body">
                                    <h5>
                                        {prompt.title} |{' '}
                                        <span className="text-muted">
                                            {prompt.genre}
                                        </span>
                                    </h5>
                                    <p className="prompt-content">
                                        {prompt.content}
                                    </p>
                                </div>
                                <div className="prompt-footer card-footer">
                                    <div>
                                        <span>
                                            <i className="fa fa-thumbs-up"></i>
                                            <span className="mx-2">
                                                {prompt.likes.length}
                                            </span>
                                            <i className="fa fa-thumbs-down"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <i className="fa fa-comment"></i>{' '}
                                            {prompt.comments.length}
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <i className="fa fa-heart"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </main>
                <aside>Trending Genres of Prompts</aside>
            </div>
        </div>
    );
};

Prompts.propTypes = {
    getAllPrompts: PropTypes.func.isRequired,
    prompts: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    prompts: state.prompts,
});

export default connect(mapStateToProps, { getAllPrompts })(Prompts);
