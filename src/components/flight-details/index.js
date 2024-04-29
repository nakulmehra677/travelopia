import { Divider, Skeleton, Stack, Typography } from "@mui/material";
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

function FlightDetails({ data, isLoading }) {
  if (isLoading) {
    return (
      <Stack spacing={2} id="flight-details-loading">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Skeleton variant="rectangular" height={32} key={item} />
        ))}
      </Stack>
    );
  }

  if (data) {
    const {
      flightNumber,
      airline,
      origin,
      destination,
      departureTime,
      status,
    } = data;

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

  return null;
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
  isLoading: PropTypes.bool,
};

export default FlightDetails;
