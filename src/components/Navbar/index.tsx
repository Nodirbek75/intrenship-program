import React from "react";
import styled from "styled-components";

export const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <LeftComponent>
        <Icon src="assets/logo.svg" />
        <NavbarText>Fanbase Marketing Machine</NavbarText>
      </LeftComponent>
      <Icon src="assets/menu.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 55px 150px 0 150px;
  background-color: ${(props) => props.theme.backgroundColor};
  z-index: 100;
`;

const LeftComponent = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarText = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.gold};
  text-align: center;
  margin-left: 42px;
`;

const Icon = styled.img``;
