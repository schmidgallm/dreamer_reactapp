// Dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux
import { addPrompt } from '../../../actions/prompts';

const AddPrompt = ({ addPrompt }) => {
    // init components form state
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        content: '',
    });

    // Destructure state
    const { title, genre, content } = formData;

    // on change handler
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    // on submit handler
    const onSubmit = e => {
        e.preventDefault();
        // dispatch redux action
        addPrompt(formData);
        // clear form
        setFormData({
            title: '',
            genre: '',
            content: '',
        });
    };

    return (
        <div className="center add-prompt">
            <div className="container">
                <div className="jumbotron">
                    <h1>Add A Prompt</h1>
                </div>
                <form id="prompt-form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={title}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="genre"
                            name="genre"
                            value={genre}
                            onChange={e => onChange(e)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Enter your prompt here</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            id="content"
                            name="content"
                            value={content}
                            onChange={e => onChange(e)}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="register-btn btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

AddPrompt.propTypes = {
    addPrompt: PropTypes.func.isRequired,
};

export default connect(null, { addPrompt })(AddPrompt);
