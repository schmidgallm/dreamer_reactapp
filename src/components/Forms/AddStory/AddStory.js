// Dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Redux Actions
import { addStory } from '../../../actions/stories';

const AddStory = ({ addStory }) => {
    // init components form state
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        synopsis: '',
    });
    const [file, setFile] = useState(null);

    // Destructure state
    const { title, genre, synopsis } = formData;

    // on change handler
    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    // on file upload change handler
    const onFileChange = e => {
        setFile(e.target.files[0]);
    };

    // on submit handler
    const onSubmit = e => {
        e.preventDefault();

        // init new form data and append file
        const formData = new FormData();
        formData.append('story', file);
        formData.append('title', title);
        formData.append('genre', genre);
        formData.append('synopsis', synopsis);

        // Call Redux action to post story
        addStory(formData);
    };

    return (
        <div className="center add-story">
            <div className="container">
                <div className="jumbotron">
                    <h1>Add A Story</h1>
                </div>
                <form id="story-form" onSubmit={e => onSubmit(e)}>
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
                        <label htmlFor="synopsis">Enter your synopsis</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            id="synopsis"
                            name="synopsis"
                            value={synopsis}
                            onChange={e => onChange(e)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group mb-5">
                        <input
                            type="file"
                            name="file"
                            accept="application/pdf"
                            id="story"
                            onChange={e => onFileChange(e)}
                        />
                        <span>Must be PDF</span>
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

AddStory.propTypes = {
    addStory: PropTypes.func.isRequired,
};

export default connect(null, { addStory })(AddStory);
