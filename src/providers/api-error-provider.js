import { Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function ApiErrorProvider({ children, error, onReload }) {
  if (!error) return children;

  return (
    <Stack
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography>{error.message}</Typography>
      <Button onClick={onReload} variant="outlined">
        Reload
      </Button>
    </Stack>
  );
}

ApiErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.node.isRequired,
  onReload: PropTypes.func.isRequired,
};

export default ApiErrorProvider;
