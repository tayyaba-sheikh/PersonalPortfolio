import {
  FaHome,
  FaBriefcase,
  FaServicestack,
  FaStar,
  FaDollarSign,
  FaQuestionCircle,
  FaEnvelope,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const sections = [
  { id: "hero", icon: <FaHome />, label: "Home" },
  { id: "works", icon: <FaBriefcase />, label: "Works" },
  { id: "services", icon: <FaServicestack />, label: "Services" },
  { id: "testimonials", icon: <FaStar />, label: "Testimonials" },
  { id: "pricing", icon: <FaDollarSign />, label: "Pricing" },
  { id: "faq", icon: <FaQuestionCircle />, label: "FAQs" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const SideNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      // Already on Home → scroll
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // On another page → navigate back Home, then scroll (handled in index.jsx)
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <div className="sidenav-wrapper">
      <nav className="sidenav">
        {sections.map((sec) => (
          <button
            key={sec.id}
            className="tooltip-wrapper"
            onClick={() => handleNavClick(sec.id)}
          >
            <span className="tooltip">{sec.label}</span>
            <div className="icon-btn">{sec.icon}</div>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
