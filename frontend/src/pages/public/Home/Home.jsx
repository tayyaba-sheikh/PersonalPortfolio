import Heading from "../../../components/ui/Heading"
import Paragraph from "../../../components/ui/Paragraph"
import Avatar from "../../../components/ui/Avatar"
import Badge from "../../../components/ui/Badge"
import Accordion from "../../../components/ui/Accordion"
// import Modal from "../../../components/ui/Modal"
// import { useState } from "react"
import Button from "../../../components/ui/Button"
import { useModal } from "../../../context/ModalContext"
import SectionWrapper from "../../../components/shared/SectionWrapper"
import Card from "../../../components/ui/Card"
const faqItems = [
  { title: "What services do you provide?", content: "We provide legal case management, task handling, and client collaboration tools." },
  { title: "Can I use it on mobile?", content: "Yes, the system is fully responsive and works across all devices." },
  { title: "Is support available?", content: "Yes, we provide 24/7 support through chat and email." },
];
// Dummy project data (later replace with API data)
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio built with MERN stack and theme switching.",
    image: "/assets/projects/portfolio.jpg",
    link: "https://your-portfolio.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Full-stack app for managing tasks with role-based access.",
    image: "/assets/projects/task-app.jpg",
    link: "https://task-app.com",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description: "A complete MERN e-commerce store with cart & payments.",
    image: "/assets/projects/ecommerce.jpg",
    link: "https://ecommerce.com",
  },
  {
    id: 4,
    title: "Chat Application",
    description: "Real-time chat app using Socket.io and MongoDB.",
    image: "/assets/projects/chat-app.jpg",
    link: "https://chat-app.com",
  },
];
const Home = () => {
  const { openModal } = useModal();
  // Show only top 3 projects
  const topProjects = projects.slice(0, 3);
  return (
    <>
      <section
        style={{
          padding: "100px 20px",
          background: "#f5f5f5",
          // textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          Hi, I’m Tayyaba Sheikh 👋
        </h1>
        <Heading
          level="3"
          size="md"
          weight="medium"
          color="dark"
          align="center"
        >
          I am <span className="heading-secondary">Tayyaba</span>
        </Heading>
        <Paragraph size={'base'} weight={'primary'} color={'dark'} align={'center'}>
          A passionate Web Developer building modern web apps.
        </Paragraph>


        <p className="signature text-accent mb-2">Tayyaba</p>
        <Avatar src="/MyImage.jpg" size="xlarge" shape="circle" className="avatar-shadow" />
        <Avatar src="/MyImage.jpg" size="xlarge" shape="square" className="avatar-border" />

        <Badge variant="primary">New</Badge>
        <Badge variant="info-outline" size="medium" rounded>
          Active
        </Badge>
        <Badge variant="warning" size="small">
          Pending
        </Badge>

        <div>
          <h2>Frequently Asked Questions</h2>
          <Accordion items={faqItems} variant="primary" />
        </div>

        <div className="btns-wrapper flex gap-3">
          <Button size="small" onClick={() => openModal({ type: "confirmation", title: "Delete Item", children: "Are you sure?" })}>
            Open Confirm Modal
          </Button>
          <Button size="small" onClick={() => openModal({ type: "success", title: "Success", children: "Your changes have been saved." })}>
            Open Success Modal
          </Button>
          <Button size="small" onClick={() => openModal({ type: "error", title: "Error", children: "Something went wrong!" })}>
            Open Error Modal
          </Button>
          <Button size="small" onClick={() => openModal({ type: "form", title: "Login", children: <form><input placeholder="Email" /><input type="password" placeholder="Password" /></form> })}>
            Open Form Modal
          </Button>
          <Button size="small" onClick={() => openModal({ type: "image", title: "Profile Pic", children: "/MyImage.jpg" })}>
            Open Image Modal
          </Button>
          <Button size="small" onClick={() => openModal({ type: "video", title: "Intro Video", children: "/intro.mp4" })}>
            Open Video Modal
          </Button>
          <Button size="small" onClick={() => openModal({ type: "wizard", title: "Step 1", children: "This is a wizard step.", onConfirm: () => alert("Next Step") })}>
            Open Wizard Modal
          </Button>
        </div>
      </section>
      <SectionWrapper
        id="projects"
        title="My Work"
        subtitle="A selection of my recent projects"
        className="bg-light"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            >
              <Button
                variant="primary"
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </Button>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex-center mt-10">
          <Button
            text="See More Projects"
            variant="secondary"
            onClick={() => (window.location.href = "/all-projects")}
          />
        </div>
      </SectionWrapper>
    </>
  )
}

export default Home