import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  //keep countries ;
  const [countries, setCountries] = useState([]);

  //get countries on load
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2")
      .then((response) => response.json())
      .then((response) => {
        setCountries(response);
        console.log(response);
      })
      .catch((err) => console.error(err));
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
        <li key={country.name.common}> <Link to={country.cca2.toLowerCase()}>{country.name.common}</Link></li>
      ))}
      </ol>
    </>
  );
};

export default Home;
