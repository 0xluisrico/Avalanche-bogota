import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './views/home/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
