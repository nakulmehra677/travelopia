import React from "react";
import FlightList from "./index";

export default {
  title: "FlightList",
  component: FlightList,
};

export const Loading = () => <FlightList isLoading={true} />;

export const Data = () => (
  <FlightList
    data={[
      {
        flightNumber: "A1B16",
        airline: "Airline 1",
        origin: "Origin 1",
        destination: "Destination 1",
        departureTime: "2024-04-29T12:45:56.340Z",
        status: "One Time",
      },
      {
        flightNumber: "B1B46",
        airline: "Airline 2",
        origin: "Origin 2",
        destination: "Destination 1",
        departureTime: "2024-03-19T12:45:56.340Z",
        status: "One Time",
      },
      {
        flightNumber: "A2D46",
        airline: "Airline 2",
        origin: "Origin 2",
        destination: "Destination 2",
        departureTime: "2024-04-28T12:45:56.340Z",
        status: "Delayed",
      },
    ]}
  />
);
