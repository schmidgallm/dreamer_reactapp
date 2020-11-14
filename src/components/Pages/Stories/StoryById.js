// Dependencies
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

// Redux Actions
import {
    getStory,
    addOneLike,
    removeOneLike,
    removeComment,
} from '../../../actions/stories';

// Components
import Spinner from '../../Layout/Spinner';
import StoryComment from '../../Forms/StoryComment';
import StoryCommentItem from './StoryCommentItem';

const StoryById = ({
    getStory,
    stories: { story, loading },
    match,
    addOneLike,
    removeOneLike,
    removeComment,
}) => {
    // get story on component mount
    useEffect(() => {
        getStory(match.params.id);
    }, [getStory]);

    // check if story is empty object
    const isEmtpy = obj => {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }

        return JSON.stringify(obj) === JSON.stringify({});
    };

    return loading || isEmtpy(story) ? (
        <Spinner />
    ) : (
        <div className="story-id">
            <div className="card">
                <div className="card-header">
                    <span>
                        <Link to={`/profile/${story.user}`}>
                            {story.penName}
                        </Link>{' '}
                        |{' '}
                        <Moment format="DD/MM/YYYY">
                            {story.publishedDate}
                        </Moment>
                    </span>
                    <span>
                        <i className="fa fa-ellipsis-h"></i>
                    </span>
                </div>
                <div className="card-body">
                    <h5>
                        {story.title} | {story.genre}
                    </h5>
                    <p>{story.synopsis}</p>
                </div>
                <div className="card-footer">
                    <div>
                        <span>
                            <i className="fa fa-thumbs-up"></i>
                            <span className="mx-2">
                                {story.likes.length === 0
                                    ? null
                                    : story.likes.length}
                            </span>
                            <i className="fa fa-thumbs-down"></i>
                        </span>
                    </div>
                    <div>
                        <span>
                            <i className="fa fa-comment"></i>{' '}
                            {story.comments.length === 0
                                ? null
                                : story.comments.length}
                        </span>
                    </div>
                    <div>
                        <span>
                            <i className="fa fa-heart"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div className="story-comment">
                <StoryComment commentAs={story.penName} storyId={story._id} />
            </div>

            <div className="comment-section">
                {story.comments.map(comment => (
                    <StoryCommentItem
                        key={comment._id}
                        comment={comment}
                        storyId={story._id}
                        removeComment={removeComment}
                    />
                ))}
            </div>
        </div>
    );
};

StoryById.propTypes = {
    getStory: PropTypes.func.isRequired,
    stories: PropTypes.object.isRequired,
    addOneLike: PropTypes.func.isRequired,
    removeOneLike: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    stories: state.stories,
});

export default connect(mapStateToProps, {
    getStory,
    addOneLike,
    removeOneLike,
    removeComment,
})(StoryById);
