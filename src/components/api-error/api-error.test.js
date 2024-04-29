import { render } from "@testing-library/react";
import React from "react";
import ApiError from ".";

test("api-error", () => {
  const { container } = render(
    <ApiError isLoading="Too many requests" onReload={() => console.log()} />
  );
  const cardElement = container.querySelector("#error-message");
  expect(cardElement).toBeInTheDocument();
});
