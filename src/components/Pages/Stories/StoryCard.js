import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

// Redux Actions
import { addLike, removeLike } from '../../../actions/stories';

const StoryCard = ({ story, auth, addLike, removeLike }) => {
    return (
        <div className="card story my-3">
            <div className="card-header">
                <Link to={`/profile/${story.user}`}>{story.penName}</Link> |{' '}
                <Moment format="MM/DD/YYYY">{story.publishedDate}</Moment>
            </div>
            <Link to={`/stories/${story._id}`} className="story-link">
                <div className="card-body">
                    <h5>
                        {story.title} | <span>{story.genre}</span>
                    </h5>
                    <p>{story.synopsis}</p>
                </div>
            </Link>
            <div className="card-footer">
                <div className="likes">
                    <i
                        className="fa fa-thumbs-up"
                        onClick={() => addLike(story._id)}
                    ></i>
                    <span>
                        {' '}
                        {story.likes.length === 0 ? null : story.likes.length}
                    </span>
                    <i
                        className="fa fa-thumbs-down"
                        onClick={() => removeLike(story._id, false)}
                    ></i>
                </div>
                <div className="comments">
                    <i className="fa fa-comment">
                        {' '}
                        {story.comments.length === 0
                            ? null
                            : story.comments.length}
                    </i>
                </div>
                <div className="hearts">
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        </div>
    );
};

StoryCard.propTypes = {
    story: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {
    addLike,
    removeLike,
})(StoryCard);
