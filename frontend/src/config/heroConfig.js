// src/config/heroConfig.js

export const heroConfig = {
    profile: {
        image: "/assets/profile.jpg",      // profile picture
        signature: "/assets/signature.png" // optional signature image
    },
    identity: {
        name: "Tayyaba Sheikh",
        role: "Full Stack Web Developer",
        tagline: "I build scalable, modern, and user-focused web applications."
    },
    ctas: [
        {
            label: "Hire Me",
            link: "#contact",
            type: "primary" // can be primary | secondary | ghost
        },
        {
            label: "See My Work",
            link: "#projects",
            type: "secondary"
        }
    ],
    socials: [
        {
            platform: "GitHub",
            url: "https://github.com/yourusername",
            icon: "FaGithub"
        },
        {
            platform: "LinkedIn",
            url: "https://linkedin.com/in/yourusername",
            icon: "FaLinkedin"
        },
        {
            platform: "Twitter",
            url: "https://twitter.com/yourusername",
            icon: "FaTwitter"
        },
        {
            platform: "Email",
            url: "mailto:tayyaba@example.com",
            icon: "FaEnvelope"
        }
    ],
    indicators: [
        {
            label: "Projects Completed",
            value: "20+"
        },
        {
            label: "Years Experience",
            value: "3+"
        },
        {
            label: "Happy Clients",
            value: "10+"
        }
    ]
};
