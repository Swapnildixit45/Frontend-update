import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LoginVideo from "./Video/Login-video.mp4"

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.user) {
      alert("Logged In");
      localStorage.setItem("token", data.user);
      window.location.href = "/";
    } else {
      alert("Incorrect Credentials");
    }
  };
  return (
    <MDBContainer
      className="my-5"
      style={{
        maxWidth: "100%",
      }}
    >
      <MDBCard>
        <MDBRow
          className="gx-0"
          style={{
            display: "flex",
          }}
        >
          <MDBCol
            md="5"
            style={{
              maxWidth: "100%",
              maxHeight: "fit-content",
            }}
          >
            <video src={LoginVideo} autoPlay loop muted 
            style={{
              maxWidth:"100%",
              justifyContent:"flex",
              maxHeight:"90vh"}}/>
            <Link to="/"></Link>
          </MDBCol>

          <MDBCol md="5">
            <MDBCardBody
              className="d-flex flex-column align-items-center"
              style={{
                fontFamily: "sans-serif",
                alignItems: "center",
              }}
            >
              <div
                className="d-flex flex-row mt-2"
                style={{ justifyContent: "flex", alignItems: "center" }}
              >
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h1 fw-bold mb-0"></span>
              </div>
              <h5
                className="fw-normal my-4 pb-3"
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bolder",
                }}
              >
                Sign into your account
              </h5>
              <div style={{ width: "100%" }}>
                 Email address
                <MDBInput
                  style={{ width: "100%" }}
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  placeholder="example@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div style={{ width: "100%" }}>
                Password
                <MDBInput
                  wrapperClass="mb-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  id="formControlLg"
                  type="password"
                  size="lg"
                />
              </div>
              <div
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                <MDBBtn
                  className="mb-4 px-4"
                  onClick={loginUser}
                  color="dark"
                  size="lg"
                  type="submit"
                >
                  Login
                </MDBBtn>
              </div>
              <a
                className="small text-muted"
                href="#!"
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Forgot password?
              </a>
              <p
                className="mb-5 pb-lg-2 fw-light justify-content-inline"
                style={{
                  color: "grey",
                  fontSize: "15px",
                }}
              >
                Don't have an account?{" "}
                <a href="/signup" style={{ color: "grey" }}>
                  Register here
                </a>
              </p>

              <div
                className="d-flex flex-row justify-content-start"
                style={{
                  fontFamily: "sans-serif",
                }}
              >
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};
export default Login;
