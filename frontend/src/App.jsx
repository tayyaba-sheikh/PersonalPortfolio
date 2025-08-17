import './App.css';
import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// Layout imports
import PublicLayout from './layout/PublicLayout.jsx';
import AdminLayout from './layout/AdminLayout.jsx';


// Public pages
import Home from './pages/public/Home.jsx';
import Works from './pages/public/Works.jsx';
import Services from './pages/public/Services.jsx';
import Testimonials from './pages/public/Testimonials.jsx';
import Pricing from './pages/public/Pricing.jsx';
import FAQ from './pages/public/FAQ.jsx';
import Contact from './pages/public/Contact.jsx';


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

function App() {

  return (
    <>
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <Routes>
        {/* Public Portfolio */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="services" element={<Services />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
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
