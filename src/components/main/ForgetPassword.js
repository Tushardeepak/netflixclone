import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import "./style.css";
import { generateMedia } from "styled-media-query";
import { useAuth } from "../../context/AuthContext";

function ForgetPassword({ setAuthToggle }) {
  const [email, setEmail] = useState("");

  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const { resetPassword } = useAuth();

  const handleChange = (set, value) => {
    set(value);
    setError(false);
  };

  const handleSignIn = async () => {
    if (email === "") {
      setError(true);
    } else {
      try {
        setLoader(true);
        await resetPassword(email);
        setEmail("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignInContainer>
        <SignInBox>
          <h1 style={{ color: "#fff", padding: "1.5rem 0" }}>
            Reset Password{" "}
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
                type="email"
                required
                onChange={(e) => handleChange(setEmail, e.target.value)}
              />
              <label>Email*</label>
            </InputContainer>

            <Button
              disabled={loader}
              style={{
                background: "red",
                color: "#fff",
                width: "105%",
                marginTop: "2rem",
              }}
              onClick={handleSignIn}
            >
              {loader ? "Check Mail" : "Reset"}
            </Button>
          </SignInForm>
        </SignInBox>
      </SignInContainer>
    </div>
  );
}

export default ForgetPassword;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px",
});

const SignInContainer = styled.div`
  margin-top: 3rem;
  background: rgba(0, 0, 0, 0.638);
  width: 20rem;
  height: 30rem;
  padding: 0 3rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
