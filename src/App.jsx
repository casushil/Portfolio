import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import FinancialPlanning from './components/Services/FinancialPlanning';
import BiConsulting from './components/Services/BiConsulting';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ConsultationPage from './components/Consultation/consult';

// Create a MainLayout component to hold the homepage content
const MainLayout = () => {
  return (
    <>
      <Hero />
      <Home />
      <div id="financial-planning">
        <FinancialPlanning />
      </div>
      <div id="bi-consulting">
        <BiConsulting />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/consultation" element={<ConsultationPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;