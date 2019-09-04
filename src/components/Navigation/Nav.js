import React from "react";
import "./Nav.css";

function Nav(props) {
  return (
    <div className="row fixed-top d-flex navbar p-0 m-0">
      <div className="col-4">
        <h2 className="text-center m-0 mainheader">
          <strong>CLICKY GAME</strong>
        </h2>
      </div>
      <div className="col-4 d-flex justify-content-center">
        <h2 className={`${props.guessClass} heading m-0`}>
          {props.guessMessage}
        </h2>
      </div>
      <div className="col-4 d-flex justify-content-center">
        <h4 className="score m-0">
          Score: {props.score} | Top Score: {props.topScore}
        </h4>
      </div>
    </div>
  );
}

export default Nav;
