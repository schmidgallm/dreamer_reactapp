import React from 'react'

const Stories = (profile) => {
    const userProfile = profile.profile
    const storyLength = userProfile.stories.length
    console.log(userProfile)
    return (
        <div className="dashboard-header">
            <header>
                <h2>Your Stories</h2>
                <p>
                    You have submitted {storyLength} stories so far!{' '}
                    <span>{storyLength > 0 && 'Keep up the good word'}</span>
                </p>
            </header>
            <div className="profile-story-container">
                {userProfile.stories.map((story) => (
                    <div key={story._id}>{story.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Stories
