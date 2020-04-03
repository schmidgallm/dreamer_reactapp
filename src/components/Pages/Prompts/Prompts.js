import React from 'react';
import './Prompts.css';
import Prompt from '../Prompt';

const Prompts = (props) => {
	console.log(props.match.url + '/test');
	return (
		<div className="prompt-wrapper">
			<div className="prompt-header">
				<h1>Writing Prompts</h1>
				<p>Get some inspiration below by thousands of prompts published by authors around the world.</p>
			</div>
			<Prompt />
		</div>
	);
};

export default Prompts;
