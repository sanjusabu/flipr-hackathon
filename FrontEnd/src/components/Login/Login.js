import React, { useState } from "react";
import "./Login.css";
import login from "../../Database/login";
import bcrypt from "bcryptjs";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  // const [fetching, setFetching] = useState(false);
  const [password, setPassword] = useState("");
  //is error
  const [isError, setisError] = useState(false);
  const [error, setError] = useState("");

  const handleClick = (e) => {
    // setFetching(true);
    e.preventDefault();
    if (email && password) {
      if (validateEmail(email)) {
        const hashedPassword = bcrypt.hashSync(
          password,
          "$2a$10$CwTycUXWue0Thq9StjUM0u"
        );
        console.log(hashedPassword);
        const user = login.find(
          (user) => user.email === email && user.password === hashedPassword
        );
        if (user) {
          setError("");
          setisError(false);
          window.location.replace("/");
          //set user to local storage
          localStorage.setItem("user", user.userid);
        } else {
          setError("Invalid email or password");
          setisError(true);
        }
      } else {
        setError("Invalid email");
        setisError(true);
      }
    } else if (email === "" || password === "") {
      setError("Please fill in all fields");
      setisError(true);
    }

    // setFetching(false);
  };
  //function to check email fromat and return true or false
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  return (
    <MDBContainer fluid className="p-3 h-customm">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6" className="rightsideee">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <button
              floating
              size="md"
              tag="a"
              className="me-2 btn btn-outline-info"
            >
              <MDBIcon fab icon="facebook-f" />
            </button>

            <button
              floating
              size="md"
              tag="a"
              className="me-2 btn btn-outline-info"
            >
              <MDBIcon fab icon="twitter" />
            </button>

            <button
              floating
              size="md"
              tag="a"
              className="me-2 btn btn-outline-info"
            >
              <MDBIcon fab icon="linkedin-in" />
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            // label="Email address"
            placeholder="Email"
            id="formControlLg"
            type="email"
            size="lg"
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />
          <MDBInput
            wrapperClass="mb-4"
            // label="Password"
            placeholder="Password"
            id="formControlLg"
            type="password"
            size="lg"
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />
          {isError && <span className="loginError">{error}</span>}
          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <div className="text-center text-md-start mt-4 pt-2 loginbuttt">
            <button
              className="mb-0 px-5 btn btn-outline-info loginheeerrreee"
              size="lg"
              onClick={handleClick}
            >
              Login
            </button>
            <p className="fw-bold regheree">
              Don't have an account?{" "}
              <Link to="/register" className="link-info">
                Register
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>

      {/* <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 bg-primary footer">
        <div className="text-white mt-2">
          Copyright © 2020. All rights reserved.
        </div>

        <div>
          <button
            tag="a"
            color="none"
            className="mx-3 btn btn-primary"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="facebook-f" size="md" />
          </button>

          <button
            tag="a"
            color="none"
            className="mx-3 btn btn-primary"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="twitter" size="md" />
          </button>

          <button
            tag="a"
            color="none"
            className="mx-3 btn btn-primary"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="google" size="md" />
          </button>

          <button
            tag="a"
            color="none"
            className="mx-3 btn btn-primary"
            style={{ color: "white" }}
          >
            <MDBIcon fab icon="linkedin-in" size="md" />
          </button>
        </div>
      </div> */}
    </MDBContainer>
  );
};

export default Login;