import React from "react";
import { ThemeProvider } from "styled-components";

// components
import { Layout } from "./components/Layout";

// styles
import { GlobalStyles, theme } from "./styles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
