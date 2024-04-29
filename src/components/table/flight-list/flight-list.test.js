import { render } from "@testing-library/react";
import React from "react";
import TableFlightList from ".";

describe("flight-list", () => {
  test("data", () => {
    const data = [
      {
        flightNumber: "A1B46",
        airline: "Airline 1",
        origin: "Origin 1",
        destination: "Destination 1",
        departureTime: "28/4/2024, 3:00:57 PM",
        status: "One Time",
      },
    ];

    const { container } = render(<TableFlightList data={data} />);
    const cardElement = container.querySelector(".MuiTableBody-root");
    expect(cardElement.childElementCount).toBe(data.length);
  });

  test("loading", () => {
    const { container } = render(<TableFlightList isLoading={true} />);
    const cardElement = container.querySelector(".MuiTableBody-root");
    expect(cardElement.firstChild).toBeInTheDocument();
  });

  test("error", () => {
    const { container } = render(<TableFlightList error={true} />);
    const cardElement = container.querySelector("#flight-list-error");
    expect(cardElement).toBeInTheDocument();
  });
});
