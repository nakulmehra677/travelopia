import { Typography } from "@mui/material";
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <Typography>Something went wrondd.</Typography>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
