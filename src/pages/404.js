import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import "../styles/index.css";

function NotFound() {
  return (
    <main>
      <Helmet>
        <title>404</title>
      </Helmet>
      <h1>Page Not Found.</h1>
      <p>You are still great.</p>
      <p>
        <Link to="/">Home.</Link>
      </p>
    </main>
  );
}

export default NotFound;
