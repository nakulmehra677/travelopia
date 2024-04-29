import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function ApiError({ message, onReload }) {
  return (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography id="error-message">{message}</Typography>
      <Button id="error-button" onClick={onReload}>
        Reload
      </Button>
    </Stack>
  );
}

ApiError.propTypes = {
  message: PropTypes.string.isRequired,
  onReload: PropTypes.func.isRequired,
};

export default ApiError;
