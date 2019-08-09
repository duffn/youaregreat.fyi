import React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";

function Index() {
  return (
    <main>
      <Helmet>
        <title>You Are Great</title>
      </Helmet>
      <h1>You Are Great.</h1>
      <p className="tag-line">
        Random compliments. A happy thing for sad times.
      </p>
      <p className="pre-block">
        <pre className="pre-command">curl https://youaregreat.fyi/api/</pre>
        <pre>{JSON.stringify({ message: "You are great. 🌟" })}</pre>
      </p>
      <p className="pre-block">
        <pre className="pre-command">
          curl https://youaregreat.fyi/api/?name=Julie
        </pre>
        <pre>
          {JSON.stringify({ message: "Hello Julie. You are appreciated." })}
        </pre>
      </p>
      <p className="footer">There's also a special header just for you.</p>
      <a href="https://nicholasduffy.com">Me.</a>
      <a href="https://github.com/duffn/youaregreat.fyi">GitHub.</a>
    </main>
  );
}

export default Index;
