import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
} from "mdb-react-ui-kit";


const Register = () => {
  const navigate = useNavigate();
  // function gotologin() {
  //   navigate("/login");
  // }
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setContry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const registerUser = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        dob: dob,
        email: email,
        password: password,
        country: country,
        state: state,
        city: city,
      }),
    });
    const data = await response.json();
    console.log(data);
    setTimeout(() => {
      navigate("/");
    }, 1000);

    if (data.status === "ok") {
      navigate("/");
    }
  };
  return (
    <MDBContainer
      flex
      style={{
        paddingLeft: "70px",
        maxWidth: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MDBCard
        className="text-black m-5 flex"
        style={{
          maxWidth: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MDBCardBody
          style={{
            maxWidth: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MDBRow
            style={{
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
              style={{
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "100%",
              }}
            >
              <p
                classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"
                style={{
                  color: "grey",
                }}
              >
                Sign up
              </p>

              <div
                className="flex align-items-center mb-4"
                style={{
                  width: "100%",
                }}
              >
                <MDBInput
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ width: "100%" }}
                  placeholder="Name"
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>

              <div
                className="flex align-items-center mb-4"
                style={{
                  width: "100%",
                }}
              >
                <MDBInput
                  id="form2"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div
                className="flex align-items-center mb-4"
                style={{
                  width: "100%",
                }}
              >
                <MDBInput
                  type="date"
                  name="Date of birth"
                  value={dob}
                  placeholder="Select a date"
                  onChange={(e) => setDob(e.target.value)}
                ></MDBInput>
              </div>
              <div
                className="flex align-items-center mb-4"
                style={{
                  width: "100%",
                }}
              >
                <MDBInput
                  type="text"
                  name="Country"
                  value={country}
                  placeholder="Country"
                  onChange={(e) => setContry(e.target.value)}
                ></MDBInput>
              </div>
              <div
                className="flex align-items-center mb-4"
                style={{
                  width: "100%",
                }}
              >
                <MDBInput
                  type="text"
                  name="State"
                  value={state}
                  placeholder="State"
                  onChange={(e) => setState(e.target.value)}
                ></MDBInput>
              </div>
              <div
                className="flex align-items-center mb-4"
                style={{
                  width: "100%",
                }}
              >
                <MDBInput
                  type="text"
                  name="City"
                  value={city}
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                ></MDBInput>
              </div>
              <div
                className="flex align-items-center mb-4"
                style={{
                  width: "100%",
                }}
              >
                <MDBInput
                  id="form3"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div
                className="flex align-items-center mb-4"
                style={{
                  width: "100%",
                }}
              >
                <MDBInput
                  placeholder="Repeat password"
                  id="form4"
                  type="password"
                />
              </div>

              <p
                className="mb-5 pb-lg-2 fw-light justify-content-inline"
                style={{
                  color: "grey",
                  fontSize: "15px",
                  fontWeight: "bolder",
                }}
              >
                Already have an account?{" "}
                <a
                  href="/Login"
                  style={{ color: "grey", fontWeight: "bolder" }}
                >
                  Log in
                </a>
              </p>

              <MDBBtn
                className="mb-4"
                onClick={registerUser}
                size="lg=20"
                style={{
                  background:
                    "linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))",
                  borderStyle: "none",
                }}
              >
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://www.cmsjunkie.com/media/revslider/excellencenew.png"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};
export default Register;

