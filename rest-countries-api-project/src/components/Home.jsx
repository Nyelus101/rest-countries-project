import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomDropdown from '../components/CustomDropdown'; // Import the custom dropdown component
import { MdSearch } from "react-icons/md";






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
    <div className='px-[5%] h-screen'>
      <main className="pt-[2%] flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center sm:space-x-8 space-y-8 sm:space-y-0">
        <form onSubmit={handleSearch} className="relative w-full sm:w-96">
  <input 
    type="text" 
    placeholder="Search for a country..." 
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border p-2 pl-10 rounded-lg w-full sm:w-96 dark:bg-gray-700 dark:text-white placeholder-white"
  />
  <button 
    type="submit" 
    className="absolute inset-y-0 left-0 flex items-center pl-3 text-white rounded-lg"
  >
    <MdSearch color="white" className="bg-transparent"/>
  </button>
</form>


          <CustomDropdown
            options={[
              'All Countries',
              'Africa',
              'Americas',
              'Asia',
              'Europe',
              'Oceania',
            ]}
            onSelect={(selectedRegion) => setRegion(selectedRegion)}
          />
        </div>

        <div className="flex w-full gap-16 my-[24px] mx-0 flex-wrap justify-center sm:justify-between">
          {filteredCountries.map((country) => (
            <div 
              key={country.cca3} 
              className="bg-[hsl(0,0%,98%)] shadow-[0_0_5px_1px_rgba(0,0,0,0.2)] rounded-md basis-[250px]"
              onClick={() => navigate(`/country/${country.cca3}`)}
            >
              <div className='h-[150px]'>
                <img src={country.flags.svg} alt={country.name.common} className="w-full h-[100%] rounded-sm object-cover" />
              </div> 
              <div className='p-5'>
                <h2 className="text-xl font-bold mt-4">{country.name.common}</h2>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Region: {country.region}</p>
                <p>Capital: {country.capital}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;










// // src/components/Home.js
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import Header from './Header';
// import Layout from '../components/Layout';

// const Home = () => {
//   const [search, setSearch] = useState('');
//   const [region, setRegion] = useState('All Countries');
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAllCountries = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         if (!response.ok) {
//           throw new Error('Error fetching all countries');
//         }
//         const data = await response.json();
//         setCountries(data);
//         setFilteredCountries(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchAllCountries();
//   }, []);

//   useEffect(() => {
//     const filterByRegion = () => {
//       if (region === 'All Countries') {
//         setFilteredCountries(countries);
//       } else {
//         const filtered = countries.filter(
//           (country) => country.region === region
//         );
//         setFilteredCountries(filtered);
//       }
//     };
//     filterByRegion();
//   }, [region, countries]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (search) {
//       try {
//         const response = await fetch(`https://restcountries.com/v3.1/name/${search}`);
//         if (!response.ok) {
//           throw new Error("Country not found");
//         }
//         const data = await response.json();
//         setFilteredCountries(data);
//       } catch (error) {
//         console.error("Error fetching the country data", error);
//         setFilteredCountries([]);
//       }
//     }
//   };

//   return (
//     <div className='px-[5%] h-screen'>
//       {/* <Header /> */}
//       <main className="pt-[2%] flex flex-col  gap-8">
//         <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center space-y-8">
//           <form onSubmit={handleSearch} className="flex gap-2">
//             <input 
//               type="text" 
//               placeholder="Search for a country..." 
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="border p-2 rounded-lg w-60 dark:bg-gray-700 dark:text-white"
//             />
//             <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">Search</button>
//           </form>
//           <select
//             value="Filter by region"
//             onChange={(e) => setRegion(e.target.value)}
//             className="border p-2 rounded-lg dark:bg-gray-700 dark:text-white"
//           >
//             <option disabled hidden>Filter by region</option>
//             <option value="All Countries">All Countries</option>
//             <option value="Africa">Africa</option>
//             <option value="Americas">Americas</option>
//             <option value="Asia">Asia</option>
//             <option value="Europe">Europe</option>
//             <option value="Oceania">Oceania</option>
//           </select>
//         </div>
//         <div className=" flex w-full gap-16 my-[24px] mx-0 flex-wrap justify-center sm:justify-between ">
//           {filteredCountries.map((country) => (
//             <div 
//               key={country.cca3} 
//               className=" bg-[hsl(0,0%,98%)] shadow-[0_0_5px_1px_rgba(0,0,0,0.2)] rounded-md basis-[250px]"
//               onClick={() => navigate(`/country/${country.cca3}`)}
//             >
//                 <div className='h-[150px] ' >
//                     <img src={country.flags.svg} alt={country.name.common} className=" w-full h-[100%] rounded-sm object-cover" />
//                 </div> 
//                 <div className='p-5' >
//                     <h2 className="text-xl font-bold mt-4">{country.name.common}</h2>
//                     <p>Population: {country.population.toLocaleString()}</p>
//                     <p>Region: {country.region}</p>
//                     <p>Capital: {country.capital}</p>
//                 </div>
              
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Home;
