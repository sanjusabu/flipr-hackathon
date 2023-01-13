import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <MDBContainer fluid className="p-3 h-custom">
      <MDBRow className="imageeeee">
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6" className="rightsideeee">
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
            // label="Last Name"
            placeholder="First Name"
            id="formControlLg"
            type="text"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            // label="Last Name"
            placeholder="Last Name"
            id="formControlLg"
            type="text"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            // label="Email address"
            placeholder="Email"
            id="formControlLg"
            type="email"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            // label="Password"
            placeholder="Password"
            id="formControlLg"
            type="password"
            size="lg"
          />

          {/* <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div> */}

          <div className="text-center text-md-start mt-4 pt-2 loginbuttt">
            <button className="mb-0 px-5 btn btn-outline-info" size="lg">
              Register
            </button>
          </div>
        </MDBCol>
      </MDBRow>

      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 bg-primary footer">
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
      </div>
    </MDBContainer>
  );
};

export default SignUp;