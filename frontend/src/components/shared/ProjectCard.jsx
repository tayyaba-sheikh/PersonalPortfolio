// components/common/ProjectCard.jsx
import { FaExternalLinkAlt, FaEye, FaGithub } from "react-icons/fa";
import { useModal } from "../../context/ModalContext";
import Badge from "../ui/Badge";

const ProjectCard = ({ image, title, description, tags = [], demoLink, githubLink, aos = 'fade-up', aosDelay = '0' }) => {
    const { openModal } = useModal();
    return (
        <div
            className="project-card"
            data-aos={aos}
            data-aos-delay={aosDelay}
        >
            {/* Thumbnail */}
            <div className="project-image">
                <img src={image} alt={title} />
                <div className="overlay">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn"
                            title="View Code"
                        >
                            <FaGithub />
                        </a>
                    )}
                    {/* Live Demo */}
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn"
                            title="Live Demo"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    )}
                    {/* Preview Image (Modal) */}
                    <button
                        type="button"
                        className="icon-btn"
                        onClick={() =>
                            openModal({
                                type: "image",
                                title: title,
                                children: image, // pass the image src to modal
                            })
                        }
                        title="Preview"
                    >
                        <FaEye />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="flex flex-wrap justify-center gap-1">
                    {tags.map((tag, idx) => (
                        // <span key={idx} className="tag">{tag}</span>
                        <Badge key={idx} size="small" rounded='true'>{tag}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
