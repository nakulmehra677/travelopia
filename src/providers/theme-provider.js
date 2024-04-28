import { Container, CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React from "react";

import theme from "../styles/theme";

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="md"
        style={{
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        {children}
      </Container>
    </MuiThemeProvider>
  );
}
