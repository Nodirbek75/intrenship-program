import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ title, onClick }) => {
  return <Wrapper onClick={onClick}>{title}</Wrapper>;
};

const Wrapper = styled.button`
  width: 287px;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.gold};
  padding: 17px 0;
  cursor: pointer;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.black};
`;
