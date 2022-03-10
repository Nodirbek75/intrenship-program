import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  resize: none;
  outline: 0;  
  font-family: 'Montserrat', sans-serif;
}

html,
body {
  background-color: #18181A;
  color: #fff;
  scroll-behavior: smooth;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}
`;
