// mostly code from the docs

import React from "react";

import { Link, Redirect } from "@reach/router";

class ErrorBoundry extends React.Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundry caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 3000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There is an error with this link, <Link to="/">Click Here</Link>
          to go back to homepage or wait 5 seconds
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
