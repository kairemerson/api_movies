import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './components/Home';
import Details from './components/Details';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details:id" element={<Details/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root') 
);
