import React from "react";
import styled from "styled-components";

import SignupForm from "./SignupForm";

import loginBackgroundImage from "../../assets/images/loginBackgroundImage.jpg";

const Signup = () => {
  return (
    <Container>
      <LeftDiv />
      <RightDiv>
        <SignupForm />
      </RightDiv>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: url(${loginBackgroundImage}) no-repeat center;
  background-size: cover;
`;

const LeftDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const RightDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
