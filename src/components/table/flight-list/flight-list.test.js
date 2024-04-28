import { render } from "@testing-library/react";
import TableFlightList from ".";

test("flight-list-null", () => {
  const { container } = render(<TableFlightList />);
  const cardElement = container.querySelector(".MuiTableBody-root");
  expect(cardElement.firstChild).toBeNull();
});

test("flight-list-data", () => {
  const { container } = render(
    <TableFlightList
      data={[
        {
          flightNumber: "A1B46",
          airline: "Airline 1",
          origin: "Origin 1",
          destination: "Destination 1",
          departureTime: "28/4/2024, 3:00:57 PM",
          status: "One Time",
        },
      ]}
    />
  );
  const cardElement = container.querySelector(".MuiTableBody-root");
  expect(cardElement.firstChild).toBeInTheDocument();
});

test("flight-list-loading", () => {
  const { container } = render(<TableFlightList isLoading={true} />);
  const cardElement = container.querySelector(".MuiTableBody-root");
  expect(cardElement.firstChild).toBeInTheDocument();
});

test("flight-list-error", () => {
  const { container } = render(<TableFlightList error={true} />);
  const cardElement = container.querySelector("#flight-list-error");
  expect(cardElement).toBeInTheDocument();
});
