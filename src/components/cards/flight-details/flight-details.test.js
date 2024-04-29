import { render } from "@testing-library/react";
import React from "react";
import CardFlightDetails from ".";

describe("flight-details", () => {
  test("data", () => {
    const { container } = render(
      <CardFlightDetails
        data={{
          flightNumber: "A1B46",
          airline: "Airline 1",
          origin: "Origin 1",
          destination: "Destination 1",
          departureTime: "28/4/2024, 3:00:57 PM",
          status: "One Time",
        }}
      />
    );
    const cardElement = container.querySelector("#flight-details-data");
    expect(cardElement.firstChild).toBeInTheDocument();
  });

  test("loading", () => {
    const { container } = render(<CardFlightDetails isLoading={true} />);
    const cardElement = container.querySelector("#flight-details-loading");
    expect(cardElement).toBeInTheDocument();
  });

  test("error", () => {
    const { container } = render(<CardFlightDetails error={true} />);
    const cardElement = container.querySelector("#flight-details-error");
    expect(cardElement).toBeInTheDocument();
  });
});
