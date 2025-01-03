import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import FinancialPlanning from './components/Services/FinancialPlanning';
import BiConsulting from './components/Services/BiConsulting';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Home />
      <FinancialPlanning />
      <BiConsulting />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
