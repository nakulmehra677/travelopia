import React from "react";
import FlightDetails from "./index";

export default {
  title: "FlightDetails",
  component: FlightDetails,
};

export const Loading = () => <FlightDetails isLoading={true} />;

export const Data = () => (
  <FlightDetails
    data={{
      flightNumber: "A1B46",
      airline: "Airline 1",
      origin: "Origin 1",
      destination: "Destination 1",
      departureTime: "2024-03-19T12:45:56.340Z",
      status: "One Time",
    }}
  />
);
