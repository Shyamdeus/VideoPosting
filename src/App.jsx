import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DubbedDrama from './pages/DubbedDrama';
import DubbedMovies from './pages/DubbedMovies';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dubbed-drama" element={<DubbedDrama />} />
          <Route path="dubbed-movies" element={<DubbedMovies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
