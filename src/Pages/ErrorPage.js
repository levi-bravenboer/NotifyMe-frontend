import React, { Component } from "react";

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    console.log("errorpage");
  }

  render() {
    return <h1>404 page not found</h1>;
  }
}

export default ErrorPage;
