import React from 'react';
import logo from './logo.svg';
import 'antd/dist/reset.css';
import './component/fungsional/CSS/style.css';
import Header from './component/fungsional/Header';
import News from './component/class/News';
import DetailNews from './component/class/DetailNews';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<News />} />
        <Route exact path="/detail/:id" element={<DetailNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
