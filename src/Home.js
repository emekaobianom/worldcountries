import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; //redux 1a
import { addCountries, addCountriesAsync } from "./countriesSlice"; //redux 1b
import { Link } from "react-router-dom";

const Home = () => {
  //keep countries ;
  const countries = useSelector((state) => state.countries); //redux 2
  const dispatch = useDispatch();
  // const [countries, setCountries] = useState([]);

  return (
    <>
      <h1>World Countries</h1>
      <hr />
      {/* search box */}
      {/* per page */}
      <hr />
      {/* List of Countries */}
      <ol>
        {countries.map((country) => (
          <li key={country.name.common}>
            <Link to={country.cca2.toLowerCase()}>{country.name.common}</Link>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Home;
