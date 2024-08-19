// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import CountryDetails from './components/CountryDetails';
// import { ThemeProvider, useTheme } from './components/ThemeContext';

// const App = () => {
//   const { darkMode } = useTheme();

//   return (
//     <ThemeProvider>
//       <div className={darkMode ? 'dark' : ''}>
//         <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/country/:countryCode" element={<CountryDetails />} />
//           </Routes>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;



// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import CountryDetails from './components/CountryDetails';
// import { ThemeProvider, useTheme } from './components/ThemeContext';

// const App = () => {
//   // You should not use useTheme here since it's outside of ThemeProvider
//   return (
//     <ThemeProvider>
//       <div>
//         <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/country/:countryCode" element={<CountryDetails />} />
//           </Routes>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';
import { ThemeProvider } from './components/ThemeContext';
import Layout from './components/Layout';

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryCode" element={<CountryDetails />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
