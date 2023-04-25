import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "8px",
    backgroundColor: "#191970",
    color: " #fff",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
  };
  return (
    <div>
      <h1>Page Not Found</h1>
      <h1>The page you are looking for does not exist.</h1>
      <Link style={buttonStyle} to="/">
        GoTo Home
      </Link>
    </div>
  );
};

export default NotFound;
