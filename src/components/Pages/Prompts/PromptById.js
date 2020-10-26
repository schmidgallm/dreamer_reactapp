// Dependencies
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

// Redux Actions
import { getPrompt, addLike, removeLike } from '../../../actions/prompts';

// Components
import Spinner from '../../Layout/Spinner';

const PromptById = ({
    getPrompt,
    prompts: { prompt, loading },
    match,
    addLike,
    removeLike,
}) => {
    // get prompt on component mount
    useEffect(() => {
        getPrompt(match.params.id);
    }, [getPrompt]);

    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <div className="prompt card prompt-id">
                        <div className="prompt-header card-header">
                            <span>
                                <Link to={`/profile/${prompt.user}`}>
                                    {prompt.penName}
                                </Link>{' '}
                                |{' '}
                                {moment(prompt.publishedDate).format(
                                    'MM/DD/YYYY'
                                )}
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
                            <p className="prompt-content">{prompt.content}</p>
                        </div>

                        <div className="prompt-footer card-footer">
                            <div>
                                <span>
                                    <i
                                        className="fa fa-thumbs-up"
                                        onClick={e => addLike(prompt._id)}
                                    ></i>
                                    <span className="mx-2">
                                        {prompt.likes.length === 0
                                            ? null
                                            : prompt.likes.length}
                                    </span>
                                    <i
                                        className="fa fa-thumbs-down"
                                        onClick={e => removeLike(prompt._id)}
                                    ></i>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <i className="fa fa-comment"></i>{' '}
                                    {prompt.comments.length === 0
                                        ? null
                                        : prompt.comments.length}
                                </span>
                            </div>
                            <div>
                                <span>
                                    <i className="fa fa-heart"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

PromptById.propTypes = {
    getPrompt: PropTypes.func.isRequired,
    prompts: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    prompts: state.prompts,
});

export default connect(mapStateToProps, { getPrompt, addLike, removeLike })(
    PromptById
);
