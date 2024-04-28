import {
  Card,
  CardContent,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

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

function CardFlightDetails({ data, isLoading, error }) {
  const ui = () => {
    if (isLoading) {
      return (
        <Stack spacing={2} id="flight-details-loading">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Skeleton variant="rectangular" height={32} key={item} />
          ))}
        </Stack>
      );
    }

    if (error) {
      return (
        <Stack
          justifyContent="center"
          alignItems="center"
          id="flight-details-error"
        >
          <Typography>Something went wrong</Typography>
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
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Stack spacing={4}>
          <Typography variant="h1" textAlign="center">
            Flight Details
          </Typography>
          {ui()}
        </Stack>
      </CardContent>
    </Card>
  );
}

CardFlightDetails.propTypes = {
  data: PropTypes.shape({
    flightNumber: PropTypes.string.isRequired,
    airline: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    departureTime: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
  error: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default CardFlightDetails;
