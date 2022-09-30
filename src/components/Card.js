import React from "react";
import { Link } from "react-router-dom";
import accomodation from "../data/accomodation.json";

const Card = () => {
  return (
    <section className="accomodations">
      {accomodation.data.map((accomodation) => (
        <Link
          to={`accomodation/${accomodation.id}`}
          key={accomodation.id}
          className="card"
        >
          <figure className="card__item">
            <img src={`${accomodation.cover}`} alt={accomodation.title} />
            <figcaption>{accomodation.title}</figcaption>
          </figure>
        </Link>
      ))}
      <div className="card__item--empty"></div>
    </section>
  );
};
export default Card;
