import React from "react";

import { Input as Inp } from "./Buttons";
import styled, { ThemeProvider } from "styled-components";

const StyledInput = styled(Inp)`
  background-color: ${(props) => props.theme.main};
`;

const StyledInput2 = styled(Inp).attrs((props) => ({
  placeholder: props.theme.name,
}))`
  background-color: ${(props) => props.theme.main};
`;

const theme = {
  main: "blue",
};

const innerTheme = ({ main, name }: { main: string; name: string }) => ({
  main: "red",
  name: main,
});

const Theme = () => {
  return (
    <div>
      <StyledInput placeholder={"empty"}></StyledInput>
      <ThemeProvider theme={theme}>
        <StyledInput placeholder={"empty"}></StyledInput>
        <ThemeProvider theme={innerTheme}>
          <StyledInput2 placeholder={"empty"}></StyledInput2>
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
};

export default Theme;
