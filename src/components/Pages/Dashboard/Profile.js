import React, { useState } from 'react'
import CreateProfile from '../../Auth/CreateProfile'
import EditProfile from '../../Auth/EditProfile'

const Profile = ({ profile, user }) => {
    const [showEditableProfile, toggleEditableProfile] = useState(false)

    return (
        <div className="dashboard-header">
            <header>
                <h2>
                    Hi {profile.penName ? profile.penName : user.name}
                </h2>
                <p className="lead">Dreaming since 9/18/2020</p>
                <button
                    onClick={() => toggleEditableProfile(!showEditableProfile)}
                    className="btn btn-secondary"
                >
                    Edit Profile
                </button>
            </header>

            {showEditableProfile && (
                <div className="edit-profile">
                    <EditProfile
                        toggleEditableProfile={toggleEditableProfile}
                    />
                </div>
            )}
        </div>
    )
}

export default Profile
