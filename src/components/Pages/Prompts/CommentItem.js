// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const CommentItem = ({
    promptId,
    comment: { _id, text, user, date },
    auth,
}) => {
    return (
        <div className="comment">
            <Link to={`/profile/${user}`}>user</Link>
            <p>
                <Moment format="DD/MM/YYYY">{date}</Moment>{' '}
            </p>
            <p>{text}</p>
        </div>
    );
};

CommentItem.propTypes = {
    promptId: PropTypes.string.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {})(CommentItem);
