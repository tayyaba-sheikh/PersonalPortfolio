import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home.jsx";
import Works from "./Works.jsx";
import Services from "./Services.jsx";
import Testimonials from "./Testimonials.jsx";
import Pricing from "./Pricing.jsx";
import FAQ from "./FAQ.jsx";
import Contact from "./Contact.jsx";

const Index = () => {

    const location = useLocation();

    // Handles scroll when navigating with state from SideNav
    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 300); // delay ensures DOM is ready
            }
        }
    }, [location]);


    return (
        <>
            <section id="hero" style={{ width: "100%", height: "auto" }}>
                <Home />
            </section>

            <section id="works" style={{ width: "100%", height: "100vh" }}>
                <Works />
            </section>

            <section id="services" style={{ width: "100%", height: "100vh" }}>
                <Services />
            </section>

            <section id="testimonials" style={{ width: "100%", height: "100vh" }}>
                <Testimonials />
            </section>

            <section id="pricing" style={{ width: "100%", height: "100vh" }}>
                <Pricing />
            </section>

            <section id="faq" style={{ width: "100%", height: "100vh" }}>
                <FAQ />
            </section>

            <section id="contact" style={{ width: "100%", height: "100vh" }}>
                <Contact />
            </section>
        </>
    )
}

export default Index