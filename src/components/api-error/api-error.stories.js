import React from "react";
import ApiError from "./index";

export default {
  title: "Errors/ApiError",
  component: ApiError,
};

export const Default = () => (
  <ApiError message="Too many requests" reload={() => console.log()} />
);
