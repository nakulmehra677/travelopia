import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";
import TableFlightList from "../../components/table/flight-list";
import useFlightList from "../../hooks/flight-list";

export default function Home() {
  const { data, isLoading, error } = useFlightList();
  const navigate = useNavigate();

  const handleClick = useCallback((id) => {
    navigate(`/flight-details/${id}`);
  }, []);

  return (
    <TableFlightList
      data={data}
      error={error}
      isLoading={isLoading}
      onClick={handleClick}
    />
  );
}
