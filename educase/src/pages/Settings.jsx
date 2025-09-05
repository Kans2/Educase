import React from "react";
import { useSelector } from "react-redux"; // to fetch values from redux
import { FiCamera } from "react-icons/fi";   
import profileImg from "../assets/react.svg"; // replace with your profile image

export default function Profile() {
  // Get user data from redux store
  const user = useSelector((state) => state.user);

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        {/* Header */}
        <div className="profile-header">Account Settings</div>

        {/* Profile Info */}
        <div className="profile-section">
          <div className="profile-pic-wrapper">
            <img src={profileImg} alt="Profile" className="profile-pic" />
            <div className="edit-icon">
              <FiCamera size={12} />
            </div>
          </div>

          <div className="profile-info">
            <div className="profile-name">{user.fullName|| "Guest User"}</div>
            <div className="profile-email">{user.emailAddress|| "guest@example.com"}</div>
          </div>
        </div>

        {/* Description */}
        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        {/* Dotted Divider */}
        <div className="profile-divider"></div>
      </div>
    </div>
  );
}
