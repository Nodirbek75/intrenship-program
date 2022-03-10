import React from "react";
import styled from "styled-components";

// components
import { Button } from "../Common";
import HeaderTxt from "./HeaderTxt";
import Members from "./Members";
import StepsCard from "./StepsCard";

export const LandingPage: React.FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <HeaderTxt />
        <Button title={"Apply Now"} onClick={() => {}} />
        <StepsCard />
        <Members />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("assets/landingImg.svg");
  background-repeat: no-repeat;
  background-position: right top;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 20;
  padding-top: 212px;
`;
