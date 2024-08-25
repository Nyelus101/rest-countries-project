import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const CountryDetails = () => {
  const { countryCode } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        if (!response.ok) {
          throw new Error('Error fetching country details');
        }
        const data = await response.json();
        setCountry(data[0]);

        if (data[0].borders && data[0].borders.length > 0) {
          const borderCountryCodes = data[0].borders.join(',');
          const borderResponse = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCountryCodes}`);
          if (!borderResponse.ok) {
            throw new Error('Error fetching border countries');
          }
          const borderData = await borderResponse.json();
          setBorderCountries(borderData.map(borderCountry => borderCountry.name.common));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCountryDetails();
  }, [countryCode]);

  return (
    <div className="px-[5%] py-10  bg-slate-50 dark:bg-gray-900 text-black dark:text-white">
      <button onClick={() => navigate('/')} className="flex items-center gap-2 px-4 py-2 border rounded mb-8 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-black dark:text-white">
        <FaArrowLeftLong size={20} /> Back
      </button>
      <div>
        {country && (
          <div className="flex flex-col md:flex-row gap-8 justify-between py-5">
            <div className="w-[100%] md:w-[50%] h-64 md:h-[400px]">
              <img src={country.flags.svg} alt={country.name.common} className="w-full h-full object-fill rounded-md" />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-5xl font-bold pb-8">{country.name.common}</h1>
              <div className="gap-10 md:gap-20 flex flex-col sm:flex-row">
                <div>
                  <p><strong>Native Name:</strong> {Object.values(country.name.nativeName)[0].common}</p>
                  <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                  <p><strong>Region:</strong> {country.region}</p>
                  <p><strong>Sub Region:</strong> {country.subregion}</p>
                  <p><strong>Capital:</strong> {country.capital}</p>
                </div>
                <div>
                  <p><strong>Top Level Domain:</strong> {country.tld.join(', ')}</p>
                  <p><strong>Currencies:</strong> {Object.values(country.currencies).map(c => c.name).join(', ')}</p>
                  <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
                </div>
              </div>
              <div className="py-8">
                <p><strong>Border Countries:</strong></p>
                <div className="flex flex-wrap gap-2">
                  {borderCountries.length > 0 ? (
                    borderCountries.map((borderName, index) => (
                      <button
                        key={index}
                        className="w-28 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 text-black dark:text-white"
                      >
                        {borderName}
                      </button>
                    ))
                  ) : (
                    <span>None</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;

