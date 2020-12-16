// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const StoryCommentItem = ({
    removeComment,
    storyId,
    comment: { _id, text, user, date, penName, name },
    auth,
}) => {
    return (
        <div className="comment">
            <Link to={`/profile/${user}`}>{penName ? penName : name}</Link>
            <p>
                <Moment format="DD/MM/YYYY">{date}</Moment>{' '}
            </p>
            <p>{text}</p>
            {!auth.loading && user === auth.user._id && (
                <button
                    onClick={() => removeComment(storyId, _id)}
                    className="btn btn-danger"
                    type="button"
                >
                    delete
                </button>
            )}
        </div>
    );
};

StoryCommentItem.propTypes = {
    storyId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {})(StoryCommentItem);
