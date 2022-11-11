import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    showCountry && (
      <>
        <h1>Country</h1>
        <h4>Name : {country.name.common}</h4>
        <img src={country.flags.png} alt="flag" />
        <hr/>
        
      </>
    )
  );
};

export default Country;
