import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";

function TableFlightList({ data, isLoading, error, onClick }) {
  if (error) {
    return (
      <Typography textAlign="center" id="flight-list-error">
        Something went wrong
      </Typography>
    );
  }

  const ui = () => {
    if (isLoading) {
      return (
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
            <TableRow onClick={(e) => onClick(row.id)} key={row}>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
              <TableCell>
                <Skeleton />
              </TableCell>
            </TableRow>
          ))}
        </>
      );
    }

    if (data) {
      return (
        <>
          {data.map((row, index) => (
            <TableRow onClick={(e) => onClick(row.id)} key={row.id + index}>
              <TableCell>{row.flightNumber}</TableCell>
              <TableCell>{row.airline}</TableCell>
              <TableCell>{row.origin}</TableCell>
              <TableCell>{row.destination}</TableCell>
              <TableCell>
                {new Date(row.departureTime).toLocaleString()}
              </TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </>
      );
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            <TableCell>Flight Number</TableCell>
            <TableCell>Airline</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Departure Time</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{ui()}</TableBody>
      </Table>
    </TableContainer>
  );
}

TableFlightList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      flightNumber: PropTypes.string.isRequired,
      airline: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      departureTime: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default TableFlightList;
