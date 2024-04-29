import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import FlightDetails from "../../components/flight-details";
import useFlightDetails from "../../hooks/flight-details";
import ApiErrorProvider from "../../providers/api-error-provider";

export default function PageFlightDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error, mutate } = useFlightDetails({ id });

  const handleReload = () => {
    mutate();
  };

  return (
    <Stack alignItems="center">
      <Stack maxWidth={480} spacing={4} width="100%">
        <Card>
          <CardContent>
            <Typography variant="h5">Flight Details</Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <ApiErrorProvider error={error} onReload={handleReload}>
              <FlightDetails data={data} isLoading={isLoading} />
            </ApiErrorProvider>
          </CardContent>
        </Card>

        <Button onClick={() => navigate("/")}>Go Home</Button>
      </Stack>
    </Stack>
  );
}
