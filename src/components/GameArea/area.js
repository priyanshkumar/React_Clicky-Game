import React from "react";
import Card from "./areacard";
import "./area.css";

function Area({ images, handleClick, guessClass }) {
  return (
    <div className="container ">
      <div className={guessClass}>
        <div className="row mb-4 mt-5">
          {images.map(({ id, url }) => {
            return (
              <Card url={url} key={id} id={id} handleClick={handleClick} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Area;
