import React, { useEffect, useRef } from "react";
import Button from "./Button";

const Modal = ({
    children,
    isOpen,
    onClose,
    type = "default",
    title,
    footer,
    animation = "fade",
    onConfirm,
}) => {
    const modalRef = useRef(null);

    // 🔹 Prevent body scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isOpen]);

    // 🔹 ESC key close
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // 🔹 Click outside close
    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    const renderContent = () => {
        switch (type) {
            case "confirmation":
                return (
                    <>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <Button variant="error" onClick={onClose}>
                                Cancel
                            </Button>
                            <Button variant="info" onClick={onConfirm || onClose}>
                                Confirm
                            </Button>
                        </div>
                    </>
                );
            case "success":
            case "error":
                return (
                    <>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <Button variant={type} onClick={onClose}>
                                OK
                            </Button>
                        </div>
                    </>
                );
            case "form":
                return (
                    <>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <Button variant="secondary" onClick={onClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </>
                );
            case "image":
                return (
                    <div className="modal-body flex justify-center items-center">
                        <img
                            src={children}
                            alt={title || "Preview"}
                            className="max-h-[80vh] max-w-full rounded-lg shadow-lg"
                        />
                    </div>
                );
            case "video":
                return (
                    <div className="modal-body flex justify-center items-center">
                        <video src={children} controls className="w-full rounded-lg" />
                    </div>
                );
            case "wizard":
                return (
                    <>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <Button variant="secondary" onClick={onClose}>
                                Back
                            </Button>
                            <Button variant="primary" onClick={onConfirm}>
                                Next
                            </Button>
                        </div>
                    </>
                );
            default:
                return <div className="modal-body">{children}</div>;
        }
    };

    return (
        <div
            className="modal-overlay"
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className={`modal-container modal-${type} animate-${animation}`}
            >
                {title && (
                    <div className="modal-header">
                        <h2 className="modal-title">{title}</h2>
                        <Button size="small" variant="brand" onClick={onClose}>
                            ✕
                        </Button>
                    </div>
                )}
                {renderContent()}
            </div>
        </div>
    );
};

export default Modal;
