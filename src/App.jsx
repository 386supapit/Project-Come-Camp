import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // นำเข้า Navbar
import Home from './pages/Home';     
import Detail from './pages/Detail';     // นำเข้า Detail
import Footer from './components/Footer';
import Booking from './pages/Booking';
import Receipt from './pages/Receipt';




function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar จะปรากฏในทุกหน้า */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/detail/:id" element={<Detail />} /> {/* เส้นทางสำหรับหน้า Detail */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;