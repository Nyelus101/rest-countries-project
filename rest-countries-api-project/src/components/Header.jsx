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
import React from 'react';
import { useTheme } from '../components/ThemeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="p-4 bg-white dark:bg-gray-800 text-black dark:text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Where in the World?</h1>
      <button 
        onClick={toggleDarkMode} 
        className="p-2 rounded-full border focus:outline-none"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
