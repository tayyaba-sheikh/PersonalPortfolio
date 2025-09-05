import { FaUsers, FaProjectDiagram, FaClock, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

export const SOCIAL_LINKS = [
  { id: "facebook", href: "https://facebook.com/yourprofile", icon: FaFacebookF, label: "Facebook" },
  { id: "instagram", href: "https://instagram.com/yourprofile", icon: IoLogoInstagram, label: "Instagram" },
  { id: "whatsapp", href: "https://wa.me/your-number", icon: IoLogoWhatsapp, label: "WhatsApp" },
  { id: "linkedin", href: "https://linkedin.com/in/yourprofile", icon: FaLinkedinIn, label: "LinkedIn" },
];

export const INDICATORS = [
  { icon: FaProjectDiagram, value: 50, label: "Projects Completed" },
  { icon: FaUsers, value: 30, label: "Happy Clients" },
  { icon: FaClock, value: 5, label: "Years of Experience" },
];

export const EXPERIENCES = [
    { id: 1, year: "2019", title: "Started Freelancing", description: "Delivered first client projects and learned MERN stack." },
    { id: 2, year: "2020", title: "10+ Projects Completed", description: "Worked with local and international clients." },
    { id: 3, year: "2021", title: "Agency Collaboration", description: "Joined teams and handled large-scale applications." },
    { id: 4, year: "2023", title: "Founded codeX", description: "Started own IT agency delivering global solutions." },
];
