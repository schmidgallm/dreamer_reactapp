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
            <div className="card-body">
                <h4>
                    {story.title} | <span>{story.genre}</span>
                </h4>
                <p>{story.synopsis}</p>
            </div>
        </div>
    );
};

StoryCard.propTypes = {
    story: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

export default StoryCard;
