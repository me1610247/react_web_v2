import React from "react";
import Nav from "../../components/Nav/Nav";
import { Text } from "../../components/text/text";
import "./profile.css"; // Import your CSS file
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <Nav />
      <div className="container-mox">
        {/* Checklist section */}
        <div className="section">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
              <p className="text-center">User Profile</p>
                <div className="card-body">
                  <label htmlFor="Username">Username</label>
                  <input type="text" placeholder="Mohamed Emad" readOnly name="" id="" />
                  <label htmlFor="Username">Password</label>
                  <input type="password" placeholder="******" readOnly name="" id="" />
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Mohamed Emad" readOnly name="" id="" />
                  <label htmlFor="address">Address</label>
                  <input type="text" placeholder="Cairo , Egypt" readOnly name="" id="" />
                  <label htmlFor="Username">Phone</label>
                  <input type="text" placeholder="+02 123456789" readOnly name="" id="" />
                  <Link to='/update'>
                  <button className="text-center btn btn-primary">Edit</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
