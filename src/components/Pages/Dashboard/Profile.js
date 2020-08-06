import React from 'react';

const Profile = ({ profile }) => {
  console.log(profile);
  return (
    <div>
      <h2>
        <i className='fa fa-user'></i> Welcome{' '}
        {profile.user && profile.penName ? profile.penName : profile.user.name}
      </h2>
      <p>{profile.bio}</p>
    </div>
  );
};

export default Profile;
