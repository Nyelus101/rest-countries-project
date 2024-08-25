import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const CustomDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-44">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-black dark:text-white px-4 py-2 rounded-lg flex justify-between items-center"
      >
        Filter by region
        {isOpen ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-2 text-left text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;







// import React, { useState } from 'react';
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { MdKeyboardArrowUp } from "react-icons/md";


// const CustomDropdown = ({ options, onSelect }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSelect = (option) => {
//     onSelect(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative inline-block w-44">
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex flex-row justify-between items-center border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white cursor-pointer"
//       >
//         {/* Always show "Filter by region" */}
//         {'Filter by region'} {isOpen ? <MdOutlineKeyboardArrowDown color="white" className="bg-transparent" /> : <MdKeyboardArrowUp color="white" className="bg-transparent" />}
//       </div>
//       {isOpen && (
//         <ul className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
//           {options.map((option) => (
//             <li
//               key={option}
//               onClick={() => handleSelect(option)}
//               className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
//             >
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default CustomDropdown;
