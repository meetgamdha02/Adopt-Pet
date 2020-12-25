import React, { useContext, useEffect, useState } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropedown";
import ThemeContext from "./themeContext";
import Result from "./Result";
const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("animal", "Dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [color, setColor] = useContext(ThemeContext);

  const locationChangeHandle = (e) => {
    setLocation(e.target.value);
  };
  const handleFetch = async () => {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []);
  };
  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breeFetched = breeds.map(({ name }) => name);
      setBreeds(breeFetched);
    });
  }, [animal]);
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFetch();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={locationChangeHandle}
          ></input>
        </label>
        <AnimalDropdown />
        <BreedDropdown />

        <label htmlFor="color">
          color
          <select
            value={color}
            id={color}
            onChange={(e) => setColor(e.target.value)}
            onBlur={(e) => setColor(e.target.value)}
          >
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
          </select>
        </label>
        <button style={{ backgroundColor: color }}>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};
export default SearchBar;
