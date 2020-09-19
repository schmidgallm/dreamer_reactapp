import React from 'react'

const Prompts = (profile) => {
    const userProfile = profile.profile
    const promptLength = userProfile.prompts.length
    return (
        <div className="dashboard-header">
            <header>
                <h2>Your Prompts</h2>
                <p>
                    You have submitted {promptLength} prompts so far!{' '}
                    <span>{promptLength > 0 && 'Keep up the good word'}</span>
                </p>
            </header>
            <div className="profile-prompt-container">
                {userProfile.prompts.map((prompt) => (
                    <div key={prompt._id}>{prompt.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Prompts
