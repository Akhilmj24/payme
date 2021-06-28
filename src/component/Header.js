import React from "react";

export const Header = () => {
  return (
    <div className="header-conatiner">
      <div className="header-logo">
        <h1>payMe100</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
