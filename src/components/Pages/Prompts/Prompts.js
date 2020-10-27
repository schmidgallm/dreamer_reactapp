// Dependencies
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux Actions
import { getPrompts } from '../../../actions/prompts';

// Componenets
import Spinner from '../../Layout/Spinner';
import PromptItem from './PromptItem';

const Prompts = ({ getPrompts, prompts: { prompts, loading } }) => {
    // run effect on component mount to fetch all prompts
    useEffect(() => {
        getPrompts();
    }, [getPrompts]);

    // return jsx
    return (
        <div className="prompt-wrapper">
            <div className="prompt-wrapper-header container-fluid">
                <div className="container">
                    <h1>Writing Prompts</h1>
                    <p>
                        Wheter your story has yet to begin or you're already
                        suffering from witer's block, writing prompts will jump
                        start your brain better than a cup of coffee! Stay for
                        the endless possibilites you and others can imagine with
                        just a little headstart!
                    </p>
                </div>
            </div>
            <div className="prompt-wrapper-body container">
                <main>
                    <div className="add">
                        <Link
                            to="/prompts/create/submit"
                            className="btn btn-secondary"
                        >
                            Create Prompt
                        </Link>
                    </div>
                    {loading ? (
                        <Spinner />
                    ) : (
                        prompts.map(prompt => (
                            <PromptItem key={prompt._id} prompt={prompt} />
                        ))
                    )}
                </main>
                <aside>Trending Genres of Prompts</aside>
            </div>
        </div>
    );
};

Prompts.propTypes = {
    getPrompts: PropTypes.func.isRequired,
    prompts: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    prompts: state.prompts,
});

export default connect(mapStateToProps, { getPrompts })(Prompts);
