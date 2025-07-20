import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from './Pages/Home';
import NextPage from './Pages/NextPage';
import LoginPage from './Pages/LoginPage';
import SelectPage from './Pages/SelectPage';
import Gold from './Gold/Gold';
import Carat from './Carat/Carat';
import GoldIncentive from './Gold/GoldIncentive';
import CaratIncentive from './Carat/CaratIncentive';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='next' element={<NextPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='select' element={<SelectPage />} />
          <Route path='gold' element={<Gold />} />
          <Route path='carat' element={<Carat />} />
          <Route path='goldincentive' element={<GoldIncentive />} />
          <Route path='caratincentive' element={<CaratIncentive />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
