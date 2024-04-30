import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import React from "react";

import { PRIMARY } from "styles/color";
import theme from "styles/theme";

function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box position="relative">
        {children}
        <Box
          position="fixed"
          top={0}
          left={0}
          zIndex={-10}
          sx={{ opacity: 0.8 }}
          borderTop={`160px solid ${PRIMARY.MAIN}`}
          borderRight="160px solid transparent"
          width={0}
          height="50vw"
        />

        <Box
          position="fixed"
          bottom={0}
          right={0}
          zIndex={-10}
          sx={{ opacity: 0.8 }}
          borderTop="160px solid transparent"
          borderRight={`70vw solid ${PRIMARY.MAIN}`}
          height={0}
          width="50vw"
        />
      </Box>
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
