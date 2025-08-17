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
    <nav className="sidenav">
      {sections.map((sec) => (
        <a key={sec.id} href={`#${sec.id}`} title={sec.label}>
          {sec.icon}
        </a>
      ))}
    </nav>
  );
};

export default SideNav;
