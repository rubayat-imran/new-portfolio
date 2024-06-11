import React from "react";
import Rating from "react-rating";

function Techstack(props) {
  return (
    <>
      <div className="skill-rating-wrapper">
        <div className="skill-name">
          {props.name}
        </div>
        <div className="skill-rating">
          <Rating
            readonly
            start={0}
            stop={10}
            initialRating={props.initialRating}
            className="rating"
          />
        </div>
      </div>
    </>
  );
}

export default Techstack;
