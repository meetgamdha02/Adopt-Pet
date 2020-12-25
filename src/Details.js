import React, { useEffect, useState } from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Coursel from "./Coursel";
import ErrorBoundry from "./ErrorBoundry";
import Model from "./Model";
const DetailsError = (props) => {
  const { id } = props;
  const [animal, setAnimal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const toogleModel = () => {
    setOpen(!open);
  };
  useEffect(() => {
    pet.animal(id).then(({ animal }) => {
      setAnimal(animal);
      setLoading(false);
    });
  }, []);
  const {
    name,
    breeds: { primary } = {},
    photos,
    description,
    contact,
    url,
  } = animal;
  return loading ? (
    <h1>Loading ...</h1>
  ) : (
    <div className="details">
      <Coursel media={photos} />
      <div>
        <h1>{name}</h1>
        <h2>{`${name} — ${primary} — ${contact.address.city}`}</h2>
        <button onClick={toogleModel}>Adopt {name}</button>
        <p>{description}</p>
      </div>
      {open ? (
        <Model>
          <h1>Would You like to Adopt ?</h1>
          <button onClick={() => navigate(url)}>Yes</button>
          <button onClick={toogleModel}>No , Sorry</button>
        </Model>
      ) : null}
    </div>
  );
};

const Details = (props) => {
  return (
    <ErrorBoundry>
      <DetailsError {...props} />
    </ErrorBoundry>
  );
};
export default Details;
