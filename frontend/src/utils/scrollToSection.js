// Reusable scrollToSection utility
export const scrollToSection = (navigate, location, sectionId) => {
    if (location.pathname === "/") {
        // Already on Home → just scroll
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
        // On another page → navigate to Home, then scroll (handled in Index.jsx)
        navigate("/", { state: { scrollTo: sectionId } });
    }
};
