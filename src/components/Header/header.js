import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="row hero m-0 p-0">
      <div className="col-12 p-0 d-flex flex-column align-items-center justify-content-center">
        <h4>
          Click on an image to earn points, but don't click on any more than
          once!
        </h4>
      </div>
    </div>
  );
}

export default Header;
