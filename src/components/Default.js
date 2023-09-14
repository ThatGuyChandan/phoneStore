import React from "react";
import { useLocation } from "react-router-dom";

export default function Default() {
  const location = useLocation();
  return (
    <div>
      <div className="defaultBox">
        <h1>404</h1>
        <h1>Error</h1>
        <h2>Page not found</h2>
        <h3>
          The requested url<span className="path">"{location.pathname}"</span>{" "}
          was not found
        </h3>
      </div>
    </div>
  );
}
