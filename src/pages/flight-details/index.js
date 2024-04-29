import React from "react";
import { Link, useParams } from "react-router-dom";

import { Stack } from "@mui/material";
import CardFlightDetails from "../../components/cards/flight-details";
import useFlightDetails from "../../hooks/flight-details";

export default function FlightDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useFlightDetails({ id });

  return (
    <Stack alignItems="center" spacing={4}>
      <CardFlightDetails data={data} isLoading={isLoading} error={error} />
      <Link to="/">Go Home</Link>
    </Stack>
  );
}
