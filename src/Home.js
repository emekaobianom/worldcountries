import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; //redux 1a
import { updateCountries } from "./countriesSlice"; //redux 1b
import { Link } from "react-router-dom";

const Home = () => {
  //keep countries ;
  const countries = useSelector((state) => state.countries); //redux 2
  const dispatch = useDispatch();
  // const [countries, setCountries] = useState([]);

  // //get countries on load
  // fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
  //   .then((response) => response.json())
  //   .then((response) => {
  //     // let sortedCountries = response.sort((a) => a.name);
  //     setCountries(response);
  //     console.log(response);
  //   })
  //   .catch((err) => console.error(err));
  useEffect(() => {
    dispatch(updateCountries());
  }, []);

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
