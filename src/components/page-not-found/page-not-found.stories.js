import React from "react";
import PageNotFound from "./index";

export default {
  title: "Errors/PageNotFound",
  component: PageNotFound,
};

export const Default = () => <PageNotFound onClick={() => console.log()} />;
