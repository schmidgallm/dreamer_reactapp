// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PromptItem = ({ prompt, auth }) => {
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
                        <i className="fa fa-thumbs-up"></i>
                        <span className="mx-2">{prompt.likes.length}</span>
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
    );
};

PromptItem.propTypes = {
    prompt: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {})(PromptItem);
