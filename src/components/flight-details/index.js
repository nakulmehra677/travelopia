import DepartureBoardIcon from "@mui/icons-material/DepartureBoard";
import AirlinesIcon from "@mui/icons-material/Airlines";
import NumbersIcon from "@mui/icons-material/Numbers";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RadarIcon from "@mui/icons-material/Radar";
import TripOriginIcon from "@mui/icons-material/TripOrigin";

import { Box, Chip, Divider, Skeleton, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import { styled } from "@mui/material/styles";
import { statusColorCodes } from "utils/constants";

const Label = styled(Typography)`
  color: gray;
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
          <Stack alignItems="center" direction="row" spacing={1}>
            <NumbersIcon color="primary" />
            <Label>Flight Number</Label>
          </Stack>
          <Value>
            <Chip label={flightNumber} color="primary" sx={{ width: 80 }} />
          </Value>
        </Stack>

        <Divider />

        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <Stack alignItems="center" direction="row" spacing={1}>
            <AirlinesIcon color="primary" />
            <Label>Airline</Label>
          </Stack>
          <Value>{airline}</Value>
        </Stack>

        <Divider />

        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <Stack alignItems="center" direction="row" spacing={1}>
            <TripOriginIcon color="primary" />
            <Label>Origin</Label>
          </Stack>
          <Value>{origin}</Value>
        </Stack>

        <Divider />

        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <Stack alignItems="center" direction="row" spacing={1}>
            <PinDropIcon color="primary" />
            <Label>Destination</Label>
          </Stack>
          <Value>{destination}</Value>
        </Stack>

        <Divider />

        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <Stack alignItems="center" direction="row" spacing={1}>
            <DepartureBoardIcon color="primary" />
            <Label>Departure Time</Label>
          </Stack>
          <Value>{new Date(departureTime).toLocaleString()}</Value>
        </Stack>

        <Divider />

        <Stack direction="row" justifyContent="space-between" spacing={4}>
          <Stack alignItems="center" direction="row" spacing={1}>
            <RadarIcon color="primary" />
            <Label>Status</Label>
          </Stack>
          <Value>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box
                borderRadius={20}
                width={10}
                height={10}
                bgcolor={statusColorCodes[status]}
              />
              <Typography fontWeight="bold">{status}</Typography>
            </Stack>
          </Value>
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
