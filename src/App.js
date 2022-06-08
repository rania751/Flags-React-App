import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    );
};

export default App;