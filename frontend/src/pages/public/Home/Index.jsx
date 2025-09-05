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
            <section className="container border-left border-right">
                <Home />
                <Works />

            </section>


            <section id="services">
                <Services />
            </section>

            <section id="testimonials">
                <Testimonials />
            </section>

            <section id="pricing">
                <Pricing />
            </section>

            <section id="faq">
                <FAQ />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </>
    )
}

export default Index