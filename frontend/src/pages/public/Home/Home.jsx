// import Heading from "../../../components/ui/Heading"
// import Paragraph from "../../../components/ui/Paragraph"
// import Avatar from "../../../components/ui/Avatar"
// import Badge from "../../../components/ui/Badge"
// import Accordion from "../../../components/ui/Accordion"
// import Button from "../../../components/ui/Button"
// import { useModal } from "../../../context/ModalContext"
// import SectionWrapper from "../../../components/shared/SectionWrapper"
// import Card from "../../../components/ui/Card"
// import Loader from '../../../components/ui/Loader'
// const faqItems = [
//   { title: "What services do you provide?", content: "We provide legal case management, task handling, and client collaboration tools." },
//   { title: "Can I use it on mobile?", content: "Yes, the system is fully responsive and works across all devices." },
//   { title: "Is support available?", content: "Yes, we provide 24/7 support through chat and email." },
// ];
// const Home = () => {
//   const { openModal } = useModal();
//   return (
//     <>
//       <section
//         style={{
//           padding: "100px 20px",
//           background: "#f5f5f5",
//           // textAlign: "center",
//         }}
//       >
//         <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
//           Hi, I’m Tayyaba Sheikh 👋
//         </h1>
//         <Heading
//           level="3"
//           size="md"
//           weight="medium"
//           color="dark"
//           align="center"
//         >
//           I am <span className="heading-secondary">Tayyaba</span>
//         </Heading>
//         <Paragraph size={'base'} weight={'primary'} color={'dark'} align={'center'}>
//           A passionate Web Developer building modern web apps.
//         </Paragraph>


//         <p className="signature text-accent mb-2">Tayyaba</p>
//         <Avatar src="/MyImage.jpg" size="xlarge" shape="circle" className="avatar-shadow" />
//         <Avatar src="/MyImage.jpg" size="xlarge" shape="square" className="avatar-border" />

//         <Badge variant="primary">New</Badge>
//         <Badge variant="info-outline" size="medium" rounded>
//           Active
//         </Badge>
//         <Badge variant="warning" size="small">
//           Pending
//         </Badge>

//         <div>
//           <h2>Frequently Asked Questions</h2>
//           <Accordion items={faqItems} variant="primary" />
//         </div>

//         <div className="btns-wrapper flex gap-3">
//           <Button size="small" onClick={() => openModal({ type: "confirmation", title: "Delete Item", children: "Are you sure?" })}>
//             Open Confirm Modal
//           </Button>
//           <Button size="small" onClick={() => openModal({ type: "success", title: "Success", children: "Your changes have been saved." })}>
//             Open Success Modal
//           </Button>
//           <Button size="small" onClick={() => openModal({ type: "error", title: "Error", children: "Something went wrong!" })}>
//             Open Error Modal
//           </Button>
//           <Button size="small" onClick={() => openModal({ type: "form", title: "Login", children: <form><input placeholder="Email" /><input type="password" placeholder="Password" /></form> })}>
//             Open Form Modal
//           </Button>
//           <Button size="small" onClick={() => openModal({ type: "image", title: "Profile Pic", children: "/MyImage.jpg" })}>
//             Open Image Modal
//           </Button>
//           <Button size="small" onClick={() => openModal({ type: "video", title: "Intro Video", children: "/intro.mp4" })}>
//             Open Video Modal
//           </Button>
//           <Button size="small" onClick={() => openModal({ type: "wizard", title: "Step 1", children: "This is a wizard step.", onConfirm: () => alert("Next Step") })}>
//             Open Wizard Modal
//           </Button>
//         </div>
//       </section>
//       <SectionWrapper
//         id="projects"
//         title="My Work"
//         subtitle="A selection of my recent projects"
//         className="bg-light"
//       >

//         {/* // Loader 1 (default) */}
//         <Loader />

//         {/* // Loader 2 */}
//         <Loader type="loader2" />

//         {/* // Loader 2 small version */}
//         <Loader type="loader2" size="small" />


//       </SectionWrapper>
//     </>
//   )
// }

// export default Home
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUsers, FaProjectDiagram, FaClock } from "react-icons/fa";
import Avatar from "../../../components/ui/Avatar.jsx";
import Heading from "../../../components/ui/Heading.jsx";
import Paragraph from "../../../components/ui/Paragraph.jsx";
import StatsCard from "../../../components/shared/StatsCard.jsx";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { scrollToSection } from "../../../utils/ScrollToSection.js";
import TimelineItem from "../../../components/shared/TimeLineItem.jsx";
import SectionHeader from "../../../components/shared/SectionHeader.jsx";

const SOCIAL_LINKS = [
  { id: "facebook", href: "https://facebook.com/yourprofile", icon: <FaFacebookF />, label: "Facebook" },
  { id: "instagram", href: "https://instagram.com/yourprofile", icon: <IoLogoInstagram />, label: "Instagram" },
  { id: "whatsapp", href: "https://wa.me/your-number", icon: <IoLogoWhatsapp />, label: "WhatsApp" },
  { id: "linkedin", href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

const indicators = [
  { icon: <FaProjectDiagram className="stats-icon" />, value: 50, label: "Projects Completed" },
  { icon: <FaUsers className="stats-icon" />, value: 30, label: "Happy Clients" },
  { icon: <FaClock className="stats-icon" />, value: 5, label: "Years of Experience" },
];

const experiences = [
  { id: 1, year: "2019", title: "Started Freelancing", description: "Delivered first client projects and learned MERN stack." },
  { id: 2, year: "2020", title: "10+ Projects Completed", description: "Worked with local and international clients." },
  { id: 3, year: "2021", title: "Agency Collaboration", description: "Joined teams and handled large-scale applications." },
  { id: 4, year: "2023", title: "Founded codeX", description: "Started own IT agency delivering global solutions." },
];

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* HERO SECTION */}
      <section id="hero" className="container flex flex-col items-center text-center pb-5">
        <Avatar
          src="/MyImage.jpg"
          size="xlarge"
          shape="rounded"
          className="mt-5"
          aos="zoom-in-up"
          aosDelay="100"
        />

        <p
          className="signature text-accent text-shadow mt-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Tayyaba Sheikh
        </p>

        <Paragraph size="md" className="mt-2" aos="fade-up" aosDelay="300">
          Crafting Modern Web Experiences with MERN
        </Paragraph>

        <Heading level="2" color="light" size="xl" aos="flip-up" aosDelay="400">
          MERN STACK <span className="text-accent">DEVELOPER</span>
        </Heading>

        <Paragraph size="sm" className="mt-2" aos="fade-up" aosDelay="500">
          I design and develop scalable, secure, and seamless digital solutions,
          <br /> turning ideas into interactive realities.
        </Paragraph>

        {/* Social Links */}
        <div
          className="icon-btns-wrapper flex items-center justify-center gap-3 py-4"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          {SOCIAL_LINKS.map(({ id, href, icon, label }) => (
            <a key={id} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn">
              {icon}
            </a>
          ))}
        </div>

        {/* Hero Buttons */}
        <div
          className="w-full flex flex-wrap items-center justify-center gap-3"
          data-aos="zoom-in-up"
          data-aos-delay="700"
        >
          <button className="btn-outline md:text-xs" onClick={() => scrollToSection(navigate, location, "contact")}>
            Start a Project
          </button>
          <button className="btn-outline md:text-xs" onClick={() => scrollToSection(navigate, location, "works")}>
            View my Works
          </button>
        </div>

        {/* Indicators */}
        <div className="w-full grid grid-auto gap-3 pt-5">
          {indicators.map((item, idx) => (
            <StatsCard
              key={idx}
              icon={item.icon}
              value={item.value}
              label={item.label}
              aos="flip-left"
              aosDelay={idx * 200}
            />
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION (Full Width) */}
      <section className="experience-section w-full">
        <SectionHeader title={'Experiences'} headingAos="zoom-out-up" aosDelay="100">
          My <span className="text-accent">Journey</span>
        </SectionHeader>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <TimelineItem
              key={exp.id}
              year={exp.year}
              title={exp.title}
              description={exp.description}
              align={idx % 2 === 0 ? "left" : "right"}
              aosDelay={idx * 200} // 👈 stagger delay
            />
          ))}
        </div>
      </section>

    </>
  );
};

export default Home;
