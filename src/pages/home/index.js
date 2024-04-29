import { Card, CardContent, Divider, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import TableFlightList from "../../components/table/flight-list";
import useFlightList from "../../hooks/flight-list";
import ApiErrorProvider from "../../providers/api-error-provider";

export default function Home() {
  const { data, isLoading, error, mutate } = useFlightList();
  const navigate = useNavigate();

  const handleClick = useCallback((id) => {
    navigate(`/flight-details/${id}`);
  }, []);

  const handleReload = () => {
    mutate();
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Flight List</Typography>
      </CardContent>
      <Divider />
      <ApiErrorProvider error={error} onReload={handleReload}>
        <TableFlightList
          data={data}
          isLoading={isLoading}
          onClick={handleClick}
        />
      </ApiErrorProvider>
    </Card>
  );
}
