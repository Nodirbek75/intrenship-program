import React from "react";
import styled from "styled-components";

const HeaderTxt = () => {
  return (
    <>
      <Title>AN INTERNSHIP PROGRAM</Title>
      <Subtitle>
        The # 1 way to get the
        <br />
        experience you need to work
        <br />
        in the music industry
      </Subtitle>
    </>
  );
};

export default HeaderTxt;

const Title = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  color: ${(props) => props.theme.gold};
  margin-bottom: 150px;
`;

const Subtitle = styled.text`
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 58.8px;
  color: ${(props) => props.theme.white};
  text-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;
`;
