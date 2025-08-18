import { FaHome, FaBriefcase, FaServicestack, FaStar, FaDollarSign, FaQuestionCircle, FaEnvelope } from "react-icons/fa";

const SideNav = () => {
  const sections = [
    { id: "home", icon: <FaHome />, label: "Home" },
    { id: "works", icon: <FaBriefcase />, label: "Works" },
    { id: "services", icon: <FaServicestack />, label: "Services" },
    { id: "testimonials", icon: <FaStar />, label: "Testimonials" },
    { id: "pricing", icon: <FaDollarSign />, label: "Pricing" },
    { id: "faq", icon: <FaQuestionCircle />, label: "FAQs" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  return (
    <div className="sidenav-wrapper" >
      <nav className="sidenav">
        {sections.map((sec) => (
          <div key={sec.id} className="tooltip-wrapper">
            <span className="tooltip">{sec.label}</span>
            <a href={`#${sec.id}`} className="icon-btn">
              {sec.icon}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default SideNav;
