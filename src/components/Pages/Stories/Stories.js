// Dependencies
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux Actions
import { getStories } from '../../../actions/stories';

// return JSX
const Stories = ({ getStories }) => {
    // Run effect to fetch all stories on component mount
    // Rerender when getStories prop has changed
    useEffect(() => {
        getStories();
    }, [getStories]);
    return (
        <div className="story-wrapper container">
            <header>
                <h1>Welcome to Stories</h1>
                <p>
                    Some really good paragraph of why we need stories. they
                    bring everyone together and the heart and soul of this
                    community
                </p>
            </header>

            <main>
                <div className="add">
                    <Link
                        to="/stories/create/submit"
                        className="btn btn-secondary"
                    >
                        Upload a Story
                    </Link>
                </div>
            </main>
        </div>
    );
};

Stories.propTypes = {
    getStories: PropTypes.func.isRequired,
    stories: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    stories: state.stories,
});

export default connect(mapStateToProps, { getStories })(Stories);
