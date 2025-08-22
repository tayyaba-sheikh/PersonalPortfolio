// // src/components/shared/Modal.jsx
// import React, { useEffect } from "react";
// import Button from "./Button";

// const Modal = ({
//     children,
//     isOpen,
//     onClose,
//     type = "default", // "default" | "confirmation" | "form" | "alert" | "fullscreen"
//     title,
//     footer,
//     animation = "fade", // "fade" | "zoom" | "slide"
// }) => {
//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = "hidden"; // prevent scrolling when modal open
//         } else {
//             document.body.style.overflow = "auto";
//         }
//     }, [isOpen]);

//     if (!isOpen) return null;

//     return (
//         <div className="modal-overlay">
//             <div
//                 className={`modal-container modal-${type} animate-${animation}`}
//             >
//                 {/* Header */}
//                 {title && (
//                     <div className="modal-header">
//                         <h2 className="modal-title">{title}</h2>
//                         <Button
//                             size="small"
//                             variant="brand"
//                             onClick={onClose}
//                         >
//                             ✕
//                         </Button>
//                     </div>
//                 )}

//                 {/* Body */}
//                 <div className="modal-body">{children}</div>

//                 {/* Footer */}
//                 <div className="modal-footer">
//                     {footer ? (
//                         footer
//                     ) : type === "confirmation" ? (
//                         <>
//                             <Button variant="error" onClick={onClose}>
//                                 Cancel
//                             </Button>
//                             <Button variant="info" onClick={() => alert("Confirmed!")}>
//                                 Confirm
//                             </Button>
//                         </>
//                     ) : type === "success" ? (
//                         <Button variant="success" onClick={onClose}>
//                             OK
//                         </Button>
//                     ) : type === "error" ? (
//                         <Button variant="error" onClick={onClose}>
//                             OK
//                         </Button>
//                     ) : (
//                         <Button variant="secondary" onClick={onClose}>
//                             Close
//                         </Button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;
// src/components/shared/Modal.jsx
import React, { useEffect } from "react";
import Button from "./Button";
import Avatar from "./Avatar";

const Modal = ({
    children,
    isOpen,
    onClose,
    type = "default", // "default" | "confirmation" | "form" | "success" | "error" | "fullscreen" | "image" | "video" | "wizard"
    title,
    footer,
    animation = "fade", // "fade" | "zoom" | "slide"
    onConfirm,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const renderContent = () => {
        switch (type) {
            case "confirmation":
                return (
                    <>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <Button variant="error" onClick={onClose}>Cancel</Button>
                            <Button variant="info" onClick={onConfirm || onClose}>Confirm</Button>
                        </div>
                    </>
                );
            case "success":
            case "error":
                return (
                    <>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <Button variant={type} onClick={onClose}>OK</Button>
                        </div>
                    </>
                );
            case "form":
                return (
                    <>
                        <div className="modal-body">{children}</div>
                        <div className="modal-footer">
                            <Button variant="secondary" onClick={onClose}>Close</Button>
                            <Button variant="primary" type="press" type1="submit">Submit</Button>
                        </div>
                    </>
                );
            case "image":
                return (
                    <div className="modal-body flex justify-center items-center">
                        <Avatar src={children} size="xlarge" shape="circle" className="avatar-shadow" />
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
                            <Button variant="secondary" onClick={onClose}>Back</Button>
                            <Button variant="primary" onClick={onConfirm}>Next</Button>
                        </div>
                    </>
                );
            default:
                return <div className="modal-body">{children}</div>;
        }
    };

    return (
        <div className="modal-overlay">
            <div className={`modal-container modal-${type} animate-${animation}`}>
                {title && (
                    <div className="modal-header">
                        <h2 className="modal-title">{title}</h2>
                        <Button size="small" variant="brand" onClick={onClose}>✕</Button>
                    </div>
                )}
                {renderContent()}
            </div>
        </div>
    );
};

export default Modal;
