import PropTypes from "prop-types";
import React from "react";
import ApiError from "../components/api-error";

function ApiErrorProvider({ children, error, onReload }) {
  if (!error) return children;

  return <ApiError message={error.message} onReload={onReload} />;
}

ApiErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.node.isRequired,
  onReload: PropTypes.func.isRequired,
};

export default ApiErrorProvider;
