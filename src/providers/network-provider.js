import SignalCellularConnectedNoInternet2BarIcon from "@mui/icons-material/SignalCellularConnectedNoInternet2Bar";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function NetworkProvider({ children }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isOnline) return children;

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

export default NetworkProvider;
