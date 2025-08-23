import Heading from "../../../components/ui/Heading"
import Paragraph from "../../../components/ui/Paragraph"
import Avatar from "../../../components/ui/Avatar"
import Badge from "../../../components/ui/Badge"
import Accordion from "../../../components/ui/Accordion"
// import Modal from "../../../components/ui/Modal"
// import { useState } from "react"
import Button from "../../../components/ui/Button"
import {Card, CardContent, CardFooter, CardHeader, CardMedia } from "../../../components/ui/Card"
import { useModal } from "../../../context/ModalContext"
const faqItems = [
  { title: "What services do you provide?", content: "We provide legal case management, task handling, and client collaboration tools." },
  { title: "Can I use it on mobile?", content: "Yes, the system is fully responsive and works across all devices." },
  { title: "Is support available?", content: "Yes, we provide 24/7 support through chat and email." },
];
const Home = () => {
  // const [openConfirm, setOpenConfirm] = useState(false);
  // const [openSuccess, setOpenSuccess] = useState(false);
  // const [openError, setOpenError] = useState(false);
  // const [openForm, setOpenForm] = useState(false);
  const { openModal } = useModal();
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
        {/* <div>
          <div className="btns-wrapper flex justify-between">
            <Button size="small" onClick={() => setOpenConfirm(true)}>Open Confirm Modal</Button>
            <Button size="small" onClick={() => setOpenSuccess(true)}>Open Success Modal</Button>
            <Button size="small" onClick={() => setOpenError(true)}>Open Error Modal</Button>
            <Button size="small" onClick={() => setOpenForm(true)}>Open Form Modal</Button>
          </div>

          <Modal
            isOpen={openConfirm}
            onClose={() => setOpenConfirm(false)}
            type="confirmation"
            title="Delete Item"
            onConfirm={() => {
              alert("Item deleted!");
              setOpenConfirm(false);
            }}
          >
            Are you sure you want to delete this?
          </Modal>

          <Modal
            isOpen={openSuccess}
            onClose={() => setOpenSuccess(false)}
            type="success"
            title="Success"
            animation="zoom"
          >
            Your changes have been saved.
          </Modal>
          <Modal
            isOpen={openError}
            onClose={() => setOpenError(false)}
            type="error"
            title="error"
            animation="slide"
          >
            You got an error
          </Modal>

          <Modal
            isOpen={openForm}
            onClose={() => setOpenForm(false)}
            type="form"
            title="Login"
            animation="fade"
          >
            <form>
              <input type="email" placeholder="Email" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />
              <button type="submit" className="btn-primary">Login</button>
            </form>
          </Modal>
        </div> */}
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

        <div className="cards-example">
          {/* profile card */}
          <Card className="w-100 max-w-300">
            {/* <CardMedia src="/MyImage.jpg" alt="Profile" /> */}
            <CardHeader title="Tayyaba Sheikh" subtitle="Web Developer" />
            <CardContent>
              <p className="text-base text-muted">
                Passionate about building reusable UI and scalable web apps.
              </p>
            </CardContent>
            <CardFooter>
              <button className="press-btn btn-primary btn-small">Follow</button>
            </CardFooter>
          </Card>

          {/* Statistic / Info Card */}
          <Card className="card-gradient text-center p-3">
            <CardHeader title="Total Projects" />
            <CardContent>
              <h2 className="heading-xl heading-bold">124</h2>
            </CardContent>
          </Card>

          {/* Testimonial Card */}
          \<Card className="card-glass shadow-lg">
            <CardContent>
              <p className="text-base text-muted italic">
                "Tayyaba’s work exceeded expectations. Highly recommend!"
              </p>
            </CardContent>
            <CardFooter>
              <span className="text-sm text-dark">— Client Ayesha</span>
            </CardFooter>
          </Card>



        </div>

      </section>
    </>
  )
}

export default Home