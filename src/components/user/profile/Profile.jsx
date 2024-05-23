import React, { useContext } from "react";
import { UserContext } from "../../user/context/UserContext";
import "./Profile.css";


const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img className="profile-image" src={user.Image} alt="Profile" />
        <h2 className="profile-username">{user.Username}</h2>
      </div>

      <div className="profile-details">
        <p className="profile-bio">
          {user.Bio ? user.Bio : "bio "}
        </p>
        <p className="profile-email">
          {user.Email}
        </p>
        <div>
        <PhotoUploader/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
