import React from "react";
import styled from "styled-components";
import { LandingPage } from "../LandingPage";
import { Navbar } from "../Navbar";

export const Layout: React.FC = () => {
  return (
    <Wrapper>
      <LandingPage />
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
