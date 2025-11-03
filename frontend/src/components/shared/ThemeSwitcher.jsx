// src/components/shared/ThemeSwitcher.jsx
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { FaPaintBrush } from "react-icons/fa";
import "../../styles/theme.css";

const themes = [
    { id: "default", label: "Dark Neon", color: "#00a5a5", icon: <FaPaintBrush /> },
    { id: "theme-2", label: "Yellow Lime", color: "#a68200", icon: <FaPaintBrush /> },
    { id: "theme-3", label: "Pink Grey", color: "#eb6e9b", icon: <FaPaintBrush /> },
];

export const ThemeSwitcher = () => {
    const { setTheme, theme } = useTheme();
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Button (hidden when sidebar is open) */}
            {!open && (
                <motion.button
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    onClick={() => setOpen(true)}
                    className="theme-btn flex-center shadow-2xl mt-5 ml-5"
                >
                    <FiSettings size={20} />
                </motion.button>
            )}

            {/* Overlay + Sidebar */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="theme-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        <motion.div
                            className="theme-sidebar"
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                            exit={{ x: -300 }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            <h3 className="mt-2 mb-4 heading-sm heading-medium heading-dark flex items-center gap-2">
                                <FiSettings /> Select Theme
                            </h3>

                            <div className="flex flex-col gap-2">
                                {themes.map((t) => (
                                    <motion.button
                                        key={t.id}
                                        className={`theme-option flex items-center gap-1 ${theme === t.id ? "active" : ""}`}
                                        style={{
                                            background: t.color,
                                        }}
                                        whileHover={{
                                            scale: 1.03,
                                            rotateX: 5,
                                            rotateY: -5,
                                            y: -5,
                                            boxShadow: "0px 12px 25px rgba(0,0,0,0.3)",
                                        }}
                                        whileTap={{
                                            scale: 0.95,
                                            rotateX: 0,
                                            rotateY: 0,
                                            y: 2,
                                            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                                        }}
                                        transition={{ type: "spring", stiffness: 250, damping: 18 }}
                                        onClick={() => {
                                            setTheme(t.id);
                                            setOpen(false);
                                        }}
                                    >
                                        {t.icon} {t.label}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ThemeSwitcher;
