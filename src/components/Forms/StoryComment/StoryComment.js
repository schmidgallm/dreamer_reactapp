import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addComment } from '../../../actions/stories';

const StoryComment = ({ addComment, storyId, commentAs }) => {
    // init form state
    const [text, setText] = useState('');

    return (
        <div>
            <form
                id="prompt-form"
                onSubmit={e => addComment(storyId, { text })}
            >
                <div className="form-group">
                    <label htmlFor="text">
                        Comment as{' '}
                        <Link to="/dashboard/profile">{commentAs}</Link>
                    </label>
                    <textarea
                        type="text"
                        className="form-control"
                        rows="3"
                        id="text"
                        name="text"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

StoryComment.propTypes = {
    addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(StoryComment);
