import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Country = () => {
  const { code } = useParams();
  const [country, setCountry] = useState({});
  const [showCountry, setShowCountry] = useState(false);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((response) => response.json())
      .then((response) => {
        setCountry(response[0]);
        setShowCountry(true);
      });
  }, []);

  return (
    <>
      {showCountry && (
        <>
          <h1>Country</h1>
          <h4>Name : {country.name.common}</h4>
          <img src={country.flags.png} alt="flag" />
          <hr />
          <p>
            Offical Name : <b>{country.name.official}</b>
            <br />
            Capital : <b>{country.capital[0]}</b>
            <br />
            Continent : <b>{country.continents[0]}</b>
            <br />
            Map :{" "}
            <a href={country.maps.googleMaps} target="_blank">
              Open (new tab)
            </a>
          </p>
        </>
      )}
      {!showCountry && (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Country;
