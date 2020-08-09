import React from 'react';
import promptheader from '../../../assets/img/promptheader.jpg';
import Prompt from '../Prompt';

const Prompts = (props) => {
  console.log(props.match.url + '/test');
  return (
    <div className='prompt-wrapper'>
      <div className='prompt-header'>
        <img src={promptheader} alt='writing on paper' />
        <h1>Writing Prompts</h1>
        <span>1,502,503 prompts submitted</span>
        <p>
          Wheter your story has yet to begin or you're already suffering from
          witer's block, writing prompts will jump start your brain better than
          a cup of coffee! Stay for the endless possibilites you and others can
          imagine with just a little headstart!
        </p>
      </div>
      <Prompt />
    </div>
  );
};

export default Prompts;
