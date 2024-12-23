import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <header>
        <div className="profile-header">
          <h1>
            <span className="highlight">My Profile</span>
          </h1>
          <a href="#" className="edit-profile">
            Edit Profile
          </a>
        </div>
      </header>
      <main className="grid-container">
        <div className="left-container">
          <div className="card full-name">
            <div className="circle" />
            <div className="card-content">
              <h2>FULL NAME</h2>
              <p>@email</p>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-address-card icon" />
            <h2>Personal Information</h2>
          </div>
          {/* Links Card */}
          <div className="card links">
            <i className="fa-solid fa-link icon" />
            <h2>Links</h2>
            <ul>
              <li>
                <a href="https://github.com/" target="_blank">
                  <i className="fa-brands fa-github" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank">
                  <i className="fa-brands fa-linkedin" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-container">
          {/* Achievement Card */}
          <div className="card">
            <i className="fa-solid fa-trophy icon" />
            <h2>Achievement/Contribution</h2>
          </div>
          {/* My Skills Card */}
          <div className="card">
            <i className="fa-solid fa-laptop-code icon" />
            <h2>My Skills</h2>
          </div>
          {/* Chat With Me Card */}
          <div className="card">
            <i className="fa-solid fa-comments icon" />
            <h2>Chat With Me</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
