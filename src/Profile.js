import React from "react";
import "./Profile.css";
import { useStateValue } from "./stateProvider";

function Profile() {
    const [{ user, email, country, city }] = useStateValue();
    let text = user;
    const myArray = text.split(" ");

  return (
    <div className="container-fluid">
      <div className="row1">
        <div className="col-md-8">
          <div className="card2">
            <div className="card-header">
              <h4 class="card-title">Edit Profile</h4>
            </div>
            <div className="card-body">
              <form className="form_profile">
                <div className="row1">
                  <div className="px-1 col-md-3">
                    <div className="form-group">
                      <label className="profile_label">Username</label>
                      <input
                        disabled
                        placeholder="Username"
                        type="text"
                        class="form-control"
                        value= {user}
                      ></input>
                    </div>
                  </div>
                  <div className="p1-1 col-md-4">
                    <div className="form-group">
                      <label className="profile_label" for="exampleInputEmail">
                        Email
                      </label>
                      <input
                        disabled
                        placeholder="Email"
                        type="email"
                        class="form-control"
                        value= {email}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row1">
                  <div className="pr-1 col-md-6">
                    <div className="form-group">
                      <label className="profile_label">First Name</label>
                      <input
                        disabled
                        placeholder="Company"
                        type="text"
                        class="form-control"
                        value= {myArray[0]}
                      ></input>
                    </div>
                  </div>
                  <div className="px-1 col-md-6">
                    <div className="form-group">
                      <label className="profile_label">Last Name</label>
                      <input
                        disabled
                        placeholder="Last Name"
                        type="text"
                        class="form-control"
                        value={myArray[1]}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row1">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="profile_label">Address</label>
                      <input
                        disabled
                        placeholder="Home Address"
                        type="text"
                        class="form-control"
                        value="joshitha pg house 0 107"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row1">
                  <div className="pr-1 col-md-4">
                    <div className="form-group">
                      <label className="profile_label">City</label>
                      <input
                        disabled
                        placeholder="Company"
                        type="text"
                        class="form-control"
                        value= {city}
                      ></input>
                    </div>
                  </div>
                  <div className="px-1 col-md-4">
                    <div className="form-group">
                      <label className="profile_label">Country</label>
                      <input
                        disabled
                        placeholder="Country"
                        type="text"
                        class="form-control"
                        value= {country}
                      ></input>
                    </div>
                  </div>
                  <div className="p1-1 col-md-4">
                    <div className="form-group">
                      <label className="profile_label">Pin Code</label>
                      <input
                        placeholder="Pin code"
                        type="number"
                        class="form-control"
                        value="98764"
                      ></input>
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn-fill pull-right btn btn-info">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
