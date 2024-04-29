import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Typography>Something went wrondd.</Typography>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
