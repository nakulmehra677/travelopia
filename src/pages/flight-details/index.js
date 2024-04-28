import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import CardFlightDetails from "../../components/cards/flight-details";
import useFlightDetails from "../../hooks/flight-details";
import { Stack } from "@mui/material";

export default function FlightDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, error } = useFlightDetails({ id });

  return (
    <Stack alignItems="center" spacing={4}>
      <CardFlightDetails data={data} isLoading={isLoading} error={error} />
      <Link to="/">Go Home</Link>
    </Stack>
  );
}
