// src/components/Header.js
// import React from 'react';
// import { useTheme } from '../components/ThemeContext';

// const Header = () => {
//   const { darkMode, toggleDarkMode } = useTheme();

//   return (
//     <header className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white flex justify-between items-center">
//       <h1 className="text-xl font-bold">Where in the World?</h1>
//       <button 
//         onClick={toggleDarkMode} 
//         className="p-2 rounded-full border focus:outline-none"
//       >
//         {darkMode ? 'Light Mode' : 'Dark Mode'}
//       </button>
//     </header>
//   );
// };

// export default Header;



// src/components/Header.js
// import React from 'react';
// import { useTheme } from '../components/ThemeContext';

// const Header = () => {
//   const { darkMode, toggleDarkMode } = useTheme();

//   return (
//     <header className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white flex justify-between items-center">
//       <h1 className="text-xl font-bold">Where in the World?</h1>
//       <button 
//         onClick={toggleDarkMode} 
//         className="p-2 rounded-full border focus:outline-none"
//       >
//         {darkMode ? 'Light Mode' : 'Dark Mode'}
//       </button>
//     </header>
//   );
// };

// export default Header;




import React from 'react';
import { useTheme } from '../components/ThemeContext';
import { IoMoonOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="py-4 px-[5%] text-black  flex justify-between items-center shadow-gray-500">
      <h1 className="text-xl font-bold">Where in the World?</h1>
      <button 
        onClick={toggleDarkMode} 
        className=" flex flex-row justify-between items-center gap-5 p-2 rounded-full border focus:outline-none"
      >
        {darkMode ? <IoMoonOutline /> : <IoMoonSharp /> }
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
