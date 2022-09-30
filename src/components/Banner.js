import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="./homeBanner.png"
        alt="Paysage de côte"
        className="banner__img"
      />
      <h2 className="banner__text">Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;
