// Dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux Actions
import { getPrompt, addOneLike, removeOneLike } from '../../../actions/prompts';

// Components
import Spinner from '../../Layout/Spinner';
import PromptItem from './PromptItem';

const PromptById = ({ getPrompt, prompts: { prompt, loading }, match }) => {
    // get prompt on component mount
    useEffect(() => {
        getPrompt(match.params.id);
    }, [getPrompt]);

    return loading || prompt === null ? (
        <Spinner />
    ) : (
        <div className="prompt-id">
            <PromptItem prompt={prompt} showLinks={false} />
        </div>
    );
};

PromptById.propTypes = {
    getPrompt: PropTypes.func.isRequired,
    prompts: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    prompts: state.prompts,
});

export default connect(mapStateToProps, { getPrompt })(PromptById);
