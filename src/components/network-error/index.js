import SignalCellularConnectedNoInternet2BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet2Bar";
import { Stack, Typography } from "@mui/material";
import React from "react";

function NetworkError() {
  return (
    <Stack
      height="100vh"
      width="100%"
      justifyContent="center"
      spacing={4}
      alignItems="center"
    >
      <SignalCellularConnectedNoInternet2BarIcon fontSize="large" />
      <Typography variant="h6">No Internet Connection</Typography>
    </Stack>
  );
}
export default NetworkError;
