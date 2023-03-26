import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='search' element={<SearchPage/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
