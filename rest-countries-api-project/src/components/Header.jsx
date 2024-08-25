import React from 'react';
import { useTheme } from '../components/ThemeContext';
import { IoMoonOutline } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="py-4 px-[5%] bg-white dark:bg-gray-800 text-black dark:text-white flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Where in the World?</h1>
      <button 
        onClick={toggleDarkMode} 
        className="flex items-center gap-2 p-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none"
      >
        {darkMode ? <IoMoonSharp /> : <IoMoonOutline /> }
        <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </header>
  );
};

export default Header;







// import React from 'react';
// import { useTheme } from '../components/ThemeContext';
// import { IoMoonOutline } from "react-icons/io5";
// import { IoMoonSharp } from "react-icons/io5";

// const Header = () => {
//   const { darkMode, toggleDarkMode } = useTheme();

//   return (
//     <header className="py-4 px-[5%] text-black  flex justify-between items-center shadow-gray-500">
//       <h1 className="text-xl font-bold">Where in the World?</h1>
//       <button 
//         onClick={toggleDarkMode} 
//         className=" flex flex-row justify-between items-center gap-5 p-2 rounded-full border focus:outline-none"
//       >
//         {darkMode ? <IoMoonOutline /> : <IoMoonSharp /> }
//         {darkMode ? 'Light Mode' : 'Dark Mode'}
//       </button>
//     </header>
//   );
// };

// export default Header;
