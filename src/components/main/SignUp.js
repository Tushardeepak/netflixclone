import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import "./style.css";
import { generateMedia } from "styled-media-query";
import { Checkbox } from "@material-ui/core";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { db } from "../../firebase";

function SignUp({ setAuthToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { signUp, currentUser } = useAuth();
  const history = useHistory();

  const handleChange = (set, value) => {
    set(value);
    setError(false);
  };

  const handleSignUp = async () => {
    if (
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      password !== confirmPassword
    ) {
      setError(true);
    } else {
      try {
        setLoader(true);
        const USER = await signUp(email, password);

        db.collection("users").doc(USER?.uid).collection("profile").add({
          email: email,
        });
        setLoader(false);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <SignInContainer>
        <SignInBox>
          <h1 style={{ color: "#fff", padding: "0.5rem 0" }}>
            Sign Up{" "}
            {error ? (
              <span
                style={{
                  color: "red",
                  padding: "0 1rem",
                  fontSize: "0.7rem",
                  fontWeight: "400",
                }}
              >
                {" "}
                *Please fill form correctly{" "}
              </span>
            ) : (
              ""
            )}
          </h1>
          <SignInForm>
            <InputContainer>
              <input
                value={email}
                type="email"
                required
                onChange={(e) => handleChange(setEmail, e.target.value)}
              />
              <label>Email*</label>
            </InputContainer>
            <InputContainer>
              <input
                value={password}
                type="password"
                required
                onChange={(e) => handleChange(setPassword, e.target.value)}
              />
              <label>Password*</label>
            </InputContainer>
            <InputContainer>
              <input
                value={confirmPassword}
                type="password"
                onChange={(e) =>
                  handleChange(setConfirmPassword, e.target.value)
                }
              />
              <label>Confirm password</label>
            </InputContainer>
            <Button
              disabled={loader}
              style={{
                background: "red",
                color: "#fff",
                width: "105%",
                marginTop: "1.5rem",
              }}
              onClick={handleSignUp}
            >
              {loader ? "please wait..." : "sign up"}
            </Button>
            <div className="needHelp">
              <div style={{ width: "10rem" }}>
                <Checkbox
                  defaultChecked
                  color="default"
                  inputProps={{ "aria-label": "checkbox with default color" }}
                />
                <span style={{ transform: "translateX(-50%)" }}>
                  Remember me
                </span>
              </div>
              <p style={{ marginTop: "0rem" }}>Need help?</p>
            </div>
            <p>
              Already have a account?
              <span onClick={() => setAuthToggle(false)}> Sign In</span>{" "}
            </p>
          </SignInForm>
        </SignInBox>
      </SignInContainer>
    </div>
  );
}

export default SignUp;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const SignInContainer = styled.div`
  margin-top: 1rem;
  transform: translateY(-45%);
  background: rgba(0, 0, 0, 0.638);
  width: 20rem;
  height: 33rem;
  padding: 0 3rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${customMedia.lessThan("mdDesktop")`
   transform: translateY(0%);
    `}

  ${customMedia.lessThan("smTablet")`
   transform: translateY(-30%);
    `}
`;
const SignInBox = styled.div``;
const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 3rem;
    color: rgb(120, 120, 120);
  }
  span {
    color: #fff;
    cursor: pointer;
  }

  .needHelp {
    color: rgb(120, 120, 120);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .needHelp span {
    color: rgb(120, 120, 120);
  }
`;

const InputContainer = styled.div`
  margin: 0.7rem 0;

  input {
    width: 100%;
    background: rgb(49, 49, 49);
    color: #fff;
    outline: none;
    border: none;
    height: 2.5rem;
    padding: 0 0.5rem;
    font-size: 1.2rem;
    border-radius: 3px;
  }
  label {
    color: #fff;
  }
`;
