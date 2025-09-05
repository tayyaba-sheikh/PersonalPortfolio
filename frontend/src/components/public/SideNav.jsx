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
import { useState, useEffect } from "react";
import { scrollToSection } from "../../utils/ScrollToSection";

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
  const [active, setActive] = useState("hero");

  useEffect(() => {
    // highlight active section on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition) {
          setActive(sec.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    // <div className="sidenav-wrapper">
    //   <nav className="sidenav">
    //     {sections.map((sec) => (
    //       <button
    //         key={sec.id}
    //         className="tooltip-wrapper"
    //         onClick={() => handleNavClick(sec.id)}
    //       >
    //         <span className="tooltip">{sec.label}</span>
    //         <div className="icon-btn">{sec.icon}</div>
    //       </button>
    //     ))}
    //   </nav>
    // </div>
    <>
      {/* Desktop Sidebar */}
      <div className="sidenav-base sidenav-desktop fixed right-0 top-1/2 -translate-y-1/2 rounded-md">
        <nav className="flex flex-col gap-3">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(navigate, location, sec.id)}
              className={`tooltip-wrapper`}
            >
              <span className="tooltip">{sec.label}</span>
              <div className={`icon-btn ${active === sec.id ? "active" : ""}`}>
                {sec.icon}
              </div>
            </button>
          ))}
        </nav>
      </div>
      {/* Mobile Bottom Nav */}
      <div className="sidenav-mobile fixed bottom-0 left-0 w-full shadow-md border-top">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => scrollToSection(navigate, location, sec.id)}
            className={`icon-btn ${active === sec.id ? "active" : ""}`}
          >
            {sec.icon}
          </button>
        ))}
      </div>
    </>
  );
};

export default SideNav;
