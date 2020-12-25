import React, { useState } from "react";

const Coursel = ({ media }) => {
  const [active, setActive] = useState(0);
  const handleIndex = (index) => {
    setActive(index);
  };
  return (
    <div className="carousel">
      <img src={media[active].large} alt="animal" />
      <div className="carousel-smaller">
        {media.map((photo, index) => (
          //eslint-disable-next-line
          <img
            key={photo.large}
            onClick={() => handleIndex(index)}
            src={photo.large}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Coursel;
