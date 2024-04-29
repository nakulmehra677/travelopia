import React from "react";
import { useNavigate } from "react-router-dom";
import PageNotFound from "../../components/page-not-found";

export default function NotFound() {
  const navigate = useNavigate();

  return <PageNotFound onClick={() => navigate("/")} />;
}
