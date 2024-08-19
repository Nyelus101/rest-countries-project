// src/components/CountryDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

const CountryDetails = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        if (!response.ok) {
          throw new Error('Error fetching country details');
        }
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountryDetails();
  }, [countryCode]);

  return (
    <div className={`p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button onClick={() => navigate('/')} className="p-2 bg-gray-300 dark:bg-gray-700 rounded-lg mb-8">
        Back
      </button>
      {country && (
        <div className="flex flex-col gap-8">
          <img src={country.flags.svg} alt={country.name.common} className="w-40 h-24 object-cover" />
          <h1 className="text-3xl font-bold">{country.name.common}</h1>
          <p><strong>Native Name:</strong> {Object.values(country.name.nativeName)[0].common}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Sub Region:</strong> {country.subregion}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Top Level Domain:</strong> {country.tld.join(', ')}</p>
          <p><strong>Currencies:</strong> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
          <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
          <p><strong>Border Countries:</strong> {country.borders ? country.borders.join(', ') : 'None'}</p>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
