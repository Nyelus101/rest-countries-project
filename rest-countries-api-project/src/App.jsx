
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
