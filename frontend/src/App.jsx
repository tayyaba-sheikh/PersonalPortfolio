import './App.css';
import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// Layout imports
import PublicLayout from './layout/PublicLayout.jsx';
import AdminLayout from './layout/AdminLayout.jsx';


// Public pages
import Index from './pages/public/Home/Index.jsx';
import ProjectsDetailList from './pages/public/Works/ProjectsDetailList.jsx';
import ServicesDetailList from './pages/public/Services/ServicesDetailList.jsx';
import TestimonialsDetailList from './pages/public/Testimonials/TestimonialsDetailList.jsx';


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
          <Route index element={<Index />} />
          <Route path="works" element={<ProjectsDetailList />} />
          <Route path="services" element={<ServicesDetailList />} />
          <Route path="testimonials" element={<TestimonialsDetailList />} />
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
