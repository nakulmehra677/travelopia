import { Divider, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import { styled } from "@mui/material/styles";

const Label = styled(Typography)`
  color: gray;
  font-size: 18px;
  font-weight: bold;
`;

const Value = styled(Typography)`
  color: black;
  text-align: end;
  font-weight: bold;
`;

function FlightDetails({ data }) {
  if (!data) return null;

  const { flightNumber, airline, origin, destination, departureTime, status } =
    data;

  return (
    <Stack spacing={2} id="flight-details-data">
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Label>Flight Number</Label>
        <Value>{flightNumber}</Value>
      </Stack>

      <Divider />

      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Label>Airline</Label>
        <Value>{airline}</Value>
      </Stack>

      <Divider />

      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Label>Origin</Label>
        <Value>{origin}</Value>
      </Stack>

      <Divider />

      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Label>Destination</Label>
        <Value>{destination}</Value>
      </Stack>

      <Divider />

      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Label>Departure Time</Label>
        <Value>{new Date(departureTime).toLocaleString()}</Value>
      </Stack>

      <Divider />

      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Label>Status</Label>
        <Value>{status}</Value>
      </Stack>
    </Stack>
  );
}

FlightDetails.propTypes = {
  data: PropTypes.shape({
    flightNumber: PropTypes.string.isRequired,
    airline: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    departureTime: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};

export default FlightDetails;
