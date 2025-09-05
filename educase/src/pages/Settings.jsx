import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FiCamera } from "react-icons/fi";
import defaultProfileImg from "../assets/profile.png";


export default function Profile() {
  const user = useSelector((state) => state.user);

  // local state for profile picture
  const [profilePic, setProfilePic] = useState(defaultProfileImg);

  // handle file upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfilePic(imageURL);
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">Account Settings</div>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-details">
            {/* Profile Picture */}
            <div className="profile-pic-wrapper">
              <img src={profilePic} alt="Profile" className="profile-pic" />

              {/* Camera Icon with hidden input */}
              <label htmlFor="profile-upload" className="edit-icon">
                <FiCamera size={12} />
              </label>
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>

            {/* User Info */}
            <div className="profile-info">
              <p className="profile-name">{user.fullName || "Guest User"}</p>
              <p className="profile-email">
                {user.emailAddress || "guest@example.com"}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="profile-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            possimus sit animi quaerat deleniti necessitatibus, neque nostrum
            iste quia tempora.
          </p>
        </div>
      </div>
    </div>
  );
}

