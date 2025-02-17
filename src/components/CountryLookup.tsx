'use client';
import { useState } from 'react';

const CountryLookup = () => {
  const [country, setCountry] = useState('India');
  return <div>{country}</div>;
};

export default CountryLookup;
