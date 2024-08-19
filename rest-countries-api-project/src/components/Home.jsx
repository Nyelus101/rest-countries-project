// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Header from './Header';
import Layout from '../components/Layout';

const Home = () => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All Countries');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
          throw new Error('Error fetching all countries');
        }
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllCountries();
  }, []);

  useEffect(() => {
    const filterByRegion = () => {
      if (region === 'All Countries') {
        setFilteredCountries(countries);
      } else {
        const filtered = countries.filter(
          (country) => country.region === region
        );
        setFilteredCountries(filtered);
      }
    };
    filterByRegion();
  }, [region, countries]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${search}`);
        if (!response.ok) {
          throw new Error("Country not found");
        }
        const data = await response.json();
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching the country data", error);
        setFilteredCountries([]);
      }
    }
  };

  return (
    <div>
      {/* <Header /> */}
      <main className="p-8 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search for a country..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded-lg w-60 dark:bg-gray-700 dark:text-white"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">Search</button>
          </form>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="border p-2 rounded-lg dark:bg-gray-700 dark:text-white"
          >
            <option value="All Countries">All Countries</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredCountries.map((country) => (
            <div 
              key={country.cca3} 
              className="border p-4 rounded-lg cursor-pointer dark:bg-gray-800 dark:border-gray-700"
              onClick={() => navigate(`/country/${country.cca3}`)}
            >
              <img src={country.flags.svg} alt={country.name.common} className="w-40 h-24 object-cover" />
              <h2 className="text-xl font-bold mt-4">{country.name.common}</h2>
              <p>Population: {country.population.toLocaleString()}</p>
              <p>Region: {country.region}</p>
              <p>Capital: {country.capital}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
