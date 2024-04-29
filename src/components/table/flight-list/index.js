import {
  Card,
  CardContent,
  Divider,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";

import { styled } from "@mui/material/styles";

const TableBodyRow = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
  ":hover": {
    background: theme.palette.background.gray,
  },
}));

function TableFlightList({ data, isLoading, error, onClick }) {
  const [sortDirection, setSortDirection] = React.useState();
  const [sortedBy, setSortedBy] = React.useState();
  const [list, setList] = React.useState();

  React.useEffect(() => {
    if (!data) return;

    const obj = data.map((obj) => ({ ...obj }));
    if (!sortedBy || !sortDirection) {
      setList(obj);
      return;
    }

    if (sortedBy === "departureTime") {
      if (sortDirection === "asc") {
        obj.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
      } else {
        obj.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateA - dateB;
        });
      }
    }

    if (sortDirection === "asc") {
      obj.sort((a, b) => {
        const nameA = a[sortedBy].toLowerCase();
        const nameB = b[sortedBy].toLowerCase();

        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
    } else {
      obj.sort((a, b) => {
        const nameA = a[sortedBy].toLowerCase();
        const nameB = b[sortedBy].toLowerCase();

        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        }
        return 0;
      });
    }

    setList(obj);
  }, [sortedBy, sortDirection, data]);

  const handleSort = (columnId) => {
    const newSortDirection =
      sortedBy === columnId && sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);
    setSortedBy(columnId);
  };

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
        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
            <TableRow onClick={() => onClick(row.id)} key={row}>
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
        </TableBody>
      );
    }

    if (list) {
      return (
        <TableBody>
          {list.map((row, index) => (
            <TableBodyRow
              onClick={() => {
                if (onClick) {
                  onClick(row.id);
                }
              }}
              key={index}
            >
              <TableCell>{row.flightNumber}</TableCell>
              <TableCell>{row.airline}</TableCell>
              <TableCell>{row.origin}</TableCell>
              <TableCell>{row.destination}</TableCell>
              <TableCell>
                {new Date(row.departureTime).toLocaleString()}
              </TableCell>
              <TableCell>{row.status}</TableCell>
            </TableBodyRow>
          ))}
        </TableBody>
      );
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Flight List</Typography>
      </CardContent>
      <Divider />
      <TableContainer sx={{ maxHeight: "75vh" }}>
        <Table sx={{ minWidth: 700 }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortedBy === "flightNumber"}
                  direction={sortDirection}
                  onClick={() => handleSort("flightNumber")}
                >
                  Flight Number
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedBy === "airline"}
                  direction={sortDirection}
                  onClick={() => handleSort("airline")}
                >
                  Airline
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedBy === "origin"}
                  direction={sortDirection}
                  onClick={() => handleSort("origin")}
                >
                  Origin
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedBy === "destination"}
                  direction={sortDirection}
                  onClick={() => handleSort("destination")}
                >
                  Destination
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedBy === "departureTime"}
                  direction={sortDirection}
                  onClick={() => handleSort("departureTime")}
                >
                  Departure Time
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedBy === "status"}
                  direction={sortDirection}
                  onClick={() => handleSort("status")}
                >
                  Status
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          {ui()}
        </Table>
      </TableContainer>
    </Card>
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
  onClick: PropTypes.func,
};

export default TableFlightList;
