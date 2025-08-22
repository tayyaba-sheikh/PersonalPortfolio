import { useRef, useEffect } from "react";

const MagneticButton = ({children, onClick, size = 'medium'}) => {
    const btnRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });   // target position
    const anim = useRef(null);            // animation frame

    useEffect(() => {
        const btn = btnRef.current;

        const handleMouseMove = (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            pos.current = { x: x * 0.3, y: y * 0.3 }; // slightly stronger pull
        };

        const resetTransform = () => {
            pos.current = { x: 0, y: 0 }; // go back to center
        };

        const animate = () => {
            const { x, y } = pos.current;

            // lerp (spring-like easing)
            const current = btn.style.transform.match(/-?\d+\.?\d*/g);
            const cx = current ? parseFloat(current[0]) : 0;
            const cy = current ? parseFloat(current[1]) : 0;

            const nx = cx + (x - cx) * 0.15; // damping factor
            const ny = cy + (y - cy) * 0.15;

            btn.style.transform = `translate(${nx}px, ${ny}px) scale(1.05)`;

            anim.current = requestAnimationFrame(animate);
        };

        anim.current = requestAnimationFrame(animate);

        btn.addEventListener("mousemove", handleMouseMove);
        btn.addEventListener("mouseleave", resetTransform);

        return () => {
            cancelAnimationFrame(anim.current);
            btn.removeEventListener("mousemove", handleMouseMove);
            btn.removeEventListener("mouseleave", resetTransform);
        };
    }, []);

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            target="_blank"
            rel="noopener noreferrer"
            className={`magnetic-btn btn-primary btn-${size}`}
        >
            {children}
        </button>
    );
};

export default MagneticButton;
