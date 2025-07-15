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
import AdminDashboard from './components/Admin/adminmanagement';
import AdminLogin from './components/Admin/Adminlogin';
import AdminSetup from './components/Admin/AdminSetup';
import ProtectedRoute from './components/Admin/ProtectedRoute';
import BlogPage from './components/Admin/blogpage';
import BlogPost from './components/blog/blog';
import CardiologyPSGenerator from './components/Home/main';
// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Main layout for home page
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
      <div id="tax">
        <TaxationPage/>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

// Wrapper for blog post layout
const BlogPostLayout = () => {
  return (
    <div className="min-h-screen">
      <BlogPost />
    </div>
  );
};

// App layout component
const AppLayout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';

  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}
      <main className={`${isBlogPost ? 'pt-20' : ''}`}>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<MainLayout />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostLayout />} />
          <Route path="/journey" element={<JourneySection />} />
          <Route path="/taxation" element={<TaxationPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/cont" element={<Contact />} />
          <Route path="/ps" element={<CardiologyPSGenerator />} />


          {/* Admin routes */}
          <Route path="/admin/setup" element={<AdminSetup />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      {(!isAdminRoute) && <Footer />}
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;