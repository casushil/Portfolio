import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Home from './components/Home/Home';
import FinancialPlanning from './components/Services/FinancialPlanning';
import BiConsulting from './components/Services/BiConsulting';
import Footer from './components/Footer/Footer';
import ConsultationPage from './components/Consultation/consult';
import Contact from './components/Contact/Contact';
import JourneySection from './components/Journey/journey';
import TaxationPage from './components/Services/tax';
import EducationPage from './components/Journey/education';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// Create a MainLayout component to hold the homepage content
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};
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
      <div id ="tax">
        <TaxationPage/>
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
      <ScrollToTop />

        <Navbar />
        <Routes>

          <Route path="/" element={<MainLayout />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/journey" element={<JourneySection/>}/>
          <Route path="/taxation" element={<TaxationPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/cont" element={<Contact />} />





        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;