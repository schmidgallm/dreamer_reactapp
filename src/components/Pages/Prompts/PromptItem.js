// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Redux Actions
import { addLike, removeLike } from '../../../actions/prompts';

const PromptItem = ({ prompt, auth, addLike, removeLike }) => {
    return (
        <div key={prompt._id} className="prompt card">
            <div className="prompt-header card-header">
                <span>
                    {prompt.penName} |{' '}
                    {moment(prompt.publishedDate).format('MM/DD/YYYY')}
                </span>

                <span>
                    {' '}
                    <i className="fa fa-ellipsis-h"></i>
                </span>
            </div>
            <div className="prompt-body card-body">
                <h5>
                    {prompt.title} |{' '}
                    <span className="text-muted">{prompt.genre}</span>
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
    );
};

PromptItem.propTypes = {
    prompt: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PromptItem);
