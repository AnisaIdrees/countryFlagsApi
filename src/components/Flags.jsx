import React from 'react'
import { useState } from 'react';

function Flags() {

     const [countries, setCountries] = useState("");

  const fetchCountry = async () => {
    let res = await fetch("https://restcountries.com/v3.1/all");
    let data = await res.json();
    console.log(data);
  };
  fetchCountry();
  return (
<><h1>flags page</h1></>
  )
}

export default Flags
