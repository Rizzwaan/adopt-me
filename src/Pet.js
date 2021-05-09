import { Link } from "@reach/router";
import React from "react";

export default function Pet({ name, animal, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";

  if (media.length) {
    hero = media[0].small;
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
}

/**
 *
 * for reference purpose
 */
// return React.createElement("div", {}, [
//   React.createElement("h1", {}, name),
//   React.createElement("h2", {}, animal),
//   React.createElement("h2", {}, breed),
// ]);
