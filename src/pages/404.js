import React from "react";
import { Link } from "gatsby";
import "../styles/index.css";

function NotFound() {
  return (
    <main>
      <h1>Page Not Found.</h1>
      <p>You are still great.</p>
      <p>
        <Link to="/">Home.</Link>
      </p>
    </main>
  );
}

export default NotFound;

export function Head() {
  return <title>404</title>;
}
