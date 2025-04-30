import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
 const [id,setId] = useState(0)
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <div>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;