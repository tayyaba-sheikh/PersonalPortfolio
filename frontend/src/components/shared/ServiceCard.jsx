import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const ServiceCard = ({ icon, title, description, aos = "fade-up", aosDelay = "0" }) => {
    return (
        <div
            className="service-card"
            data-aos={aos}
            data-aos-delay={aosDelay}
        >
            {/* Icon */}
            <div className="service-card__icon-field">
                <div className="icon-wrapper">
                    {typeof icon === "string" ? (
                        <img
                            src={icon}
                            alt={title}
                            className="img-icon"
                        />
                    ) : (
                        icon 
                    )}
                </div>
            </div>

            {/* Title */}
            <Heading level="2" align="left" size="md">
                {title}
            </Heading>

            {/* Description */}
            <Paragraph
                size="sm"
                weight="medium"
                color="muted"
                align="left"
                className="py-1"
            >
                {description}
            </Paragraph>
        </div>
    );
};

export default ServiceCard;
