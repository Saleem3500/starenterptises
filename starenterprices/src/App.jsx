import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import ShoesPolish from './pages/ShoesPolish';
import Chemical from './pages/Chemical';
import Cosmetics from './pages/Cosmetics';

function App() {
  return (
    <Router>
      <PageLoader />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/shoes-polish" element={<ShoesPolish />} />
            <Route path="/chemical" element={<Chemical />} />
            <Route path="/cosmetics" element={<Cosmetics />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
