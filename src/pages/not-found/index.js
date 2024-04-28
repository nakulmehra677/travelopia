import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Stack alignItems="center" spacing={4}>
      <Typography variant="h1">404 - This page does not exist</Typography>
      <Link to="/">Go Home</Link>
    </Stack>
  );
}
