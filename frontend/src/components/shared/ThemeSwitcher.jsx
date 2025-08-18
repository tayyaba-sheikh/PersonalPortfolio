import { useState, useEffect, useRef } from "react";
import { FiSettings, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import "./../../styles/theme.css";

const themes = [
    { id: "default", label: "Default", color: "var(--clr-accent-500)" },
    { id: "theme-2", label: "Lavender", color: "#7371fc" },
    { id: "theme-3", label: "Coral Peach", color: "#e99184" },
];

export const ThemeSwitcher = () => {
    const { setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef(null);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div>
            {/* Floating Settings Button (hidden when sidebar open) */}
            {!open && (
                <motion.button
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    onClick={() => setOpen(true)}
                    className="theme-btn flex-center shadow-lg mt-5 ml-5"
                >
                    <FiSettings size={18} />
                </motion.button>
            )}

            {/* Sidebar */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="theme-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setOpen(false)} // clicking overlay closes sidebar
                        />

                        {/* Sidebar */}
                        <motion.div
                            ref={sidebarRef}
                            initial={{ x: "-100%", rotateY: -90, opacity: 0 }}
                            animate={{ x: 0, rotateY: 0, opacity: 1 }}
                            exit={{ x: "-100%", rotateY: -90, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 120, damping: 18 }}
                            className="theme-sidebar"
                        >
                            <div className="flex-between mb-2">
                                <h2 className="text-lg text-bold-500 heading-color">Choose Theme</h2>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="btn-close flex-center no-bg heading-color"
                                >
                                    <FiX size={18} />
                                </button>
                            </div>

                            <div className="theme-options flex flex-col gap-2">
                                {themes.map((t) => (
                                    <motion.button
                                        key={t.id}
                                        whileHover={{ scale: 1.08, rotate: 2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setTheme(t.id)}
                                        className="theme-option flex-between"
                                        style={{ backgroundColor: t.color }}
                                    >
                                        <span>{t.label}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </div>
    );
};
