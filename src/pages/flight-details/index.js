import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import CardFlightDetails from "../../components/cards/flight-details";
import useFlightDetails from "../../hooks/flight-details";

export default function FlightDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, error } = useFlightDetails({ id });

  return <CardFlightDetails data={data} isLoading={isLoading} error={error} />;
}
