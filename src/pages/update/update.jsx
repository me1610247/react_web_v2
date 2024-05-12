import React from "react";
import Nav from "../../components/Nav/Nav";
import './update.css'
const Update = () => {
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
                  <input type="text" placeholder="Mohamed Emad"  name="" id="" />
                  <label htmlFor="Username">Password</label>
                  <input type="password" placeholder="******"  name="" id="" />
                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Mohamed Emad"  name="" id="" />
                  <label htmlFor="address">Address</label>
                  <input type="text" placeholder="Cairo , Egypt"  name="" id="" />
                  <label htmlFor="Username">Phone</label>
                  <input type="text" placeholder="+02 123456789"  name="" id="" />
                  <button className="text-center btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
