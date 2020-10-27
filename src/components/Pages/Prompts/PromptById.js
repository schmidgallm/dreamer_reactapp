// Dependencies
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

// Redux Actions
import { getPrompt, addLike, removeLike } from '../../../actions/prompts';

// Components
import Spinner from '../../Layout/Spinner';
import PromptItem from './PromptItem';

const PromptById = ({
    getPrompt,
    prompts: { prompt, loading },
    match,
    addLike,
    removeLike,
}) => {
    // get prompt on component mount
    useEffect(() => {
        getPrompt(match.params.id);
    }, [getPrompt]);

    const isEmpty = obj => {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) return false;
        }
        return true;
    };

    return loading || prompt === null ? (
        <Spinner />
    ) : (
        <div className="prompt-id">
            <PromptItem prompt={prompt} showLink={false} />
        </div>
    );
};

PromptById.propTypes = {
    getPrompt: PropTypes.func.isRequired,
    prompts: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    prompts: state.prompts,
});

export default connect(mapStateToProps, { getPrompt, addLike, removeLike })(
    PromptById
);
