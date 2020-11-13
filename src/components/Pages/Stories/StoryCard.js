import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const StoryCard = ({ story }) => {
    return (
        <div className="card story my-3">
            <div className="card-header">
                <Link to={`/profile/${story.user}`}>{story.penName}</Link> |{' '}
                <Moment format="MM/DD/YYYY">{story.publishedDate}</Moment>
            </div>
            <Link to={`/stories/${story._id}`} className="story-link">
                <div className="card-body">
                    <h4>
                        {story.title} | <span>{story.genre}</span>
                    </h4>
                    <p>{story.synopsis}</p>
                </div>
            </Link>
            <div className="card-footer">
                <div className="likes">
                    <i className="fa fa-thumbs-up"></i>
                    <span>0</span>
                    <i className="fa fa-thumbs-down"></i>
                </div>
                <div className="comments">
                    <i className="fa fa-comment"></i>
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
};

export default StoryCard;
