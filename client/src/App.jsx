import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MensPage from './pages/MensPage';
import WomensPage from './pages/WomensPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import EachProductPage from './pages/EachProductPage';



function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Layout/>} > 
            <Route path="" element={<Home/>} />
            <Route path="/account/login" element={<Login/>} /> 
            <Route path="/account/register" element={<SignUp/>} /> 
            <Route path="/about-us" element={<AboutUs/>} /> 
            <Route path="/products/men" element={<MensPage/>} /> 
            <Route path="/products/women" element={<WomensPage/>} /> 
            <Route path="/products/new-Arrivals" element={<NewArrivalsPage/>} /> 
            <Route path="/products/:productId" element={<EachProductPage/>} /> 
        </Route >
      </Routes> 
  )
}

export default App;