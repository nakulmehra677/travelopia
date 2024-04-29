import SearchOffIcon from "@mui/icons-material/SearchOff";
import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function PageNotFound({ onClick }) {
  return (
    <Stack
      height="100vh"
      width="100%"
      justifyContent="center"
      spacing={4}
      alignItems="center"
    >
      <SearchOffIcon fontSize="large" />
      <Typography variant="h6">Page Not Found</Typography>
      <Button onClick={onClick}>Go home</Button>
    </Stack>
  );
}

PageNotFound.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PageNotFound;
