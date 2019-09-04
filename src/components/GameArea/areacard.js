import React from "react";
import "./areacard.css";

function Card(props) {
  return (
    <div className="col-3 my-3">
      <div
        className="card-img d-flex justify-content-center"
        onClick={() => {
          props.handleClick(props.id);
        }}>
        <img alt="favourite" src={props.url} />
      </div>
    </div>
  );
}

export default Card;
