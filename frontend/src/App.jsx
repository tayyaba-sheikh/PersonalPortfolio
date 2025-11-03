import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// Layout imports
import PublicLayout from './layout/PublicLayout.jsx';
import AdminLayout from './layout/AdminLayout.jsx';


// Public pages
import Index from './pages/public/Home/Index.jsx';
import ProjectsList from './pages/public/Works/ProjectsList.jsx';
import ProjectDetail from './pages/public/Works/ProjectDetail.jsx';
import ServicesList from './pages/public/Services/ServicesList.jsx';
import TestimonialsList from './pages/public/Testimonials/TestimonialsList.jsx';


// Admin pages
import Dashboard from './pages/admin/Dashboard.jsx';
import WorksAdmin from './pages/admin/Works.jsx';
import ServicesAdmin from './pages/admin/Services.jsx';
import TestimonialsAdmin from './pages/admin/Testimonials.jsx';
import PricingAdmin from './pages/admin/Pricing.jsx';
import FAQAdmin from './pages/admin/FAQ.jsx';
import ContactsAdmin from './pages/admin/Contacts.jsx';
import Login from './pages/admin/Login.jsx';

// Protected Route
import ProtectedRoute from './routes/ProtectedRoute.jsx';

import ScrollToTop from './utils/scrollToTop.js';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,     // animation duration
      easing: "ease-in-out",
      // once: true,       
      mirror: false,     // whether elements animate out while scrolling past
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <ScrollToTop />

      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <Routes>
        {/* Public Portfolio */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Index />} />
          <Route path="works" element={<ProjectsList />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="services" element={<ServicesList />} />
          <Route path="testimonials" element={<TestimonialsList />} />
        </Route>
        {/* Admin Panel */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="works" element={<WorksAdmin />} />
            <Route path="services" element={<ServicesAdmin />} />
            <Route path="testimonials" element={<TestimonialsAdmin />} />
            <Route path="pricing" element={<PricingAdmin />} />
            <Route path="faq" element={<FAQAdmin />} />
            <Route path="contacts" element={<ContactsAdmin />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
