const TimelineItem = ({ year, title, description, align = "left", aosDelay = 0 }) => {
    return (
        <div className={`timeline-item ${align}`}>
            <div className="timeline-dot"></div>
            <div
                className="timeline-content"
                data-aos={align === "left" ? "fade-right" : "fade-left"}
                data-aos-delay={aosDelay}
            >
                <span className="timeline-year">{year}</span>
                <h3 className="timeline-title">{title}</h3>
                <p className="timeline-description">{description}</p>
            </div>
        </div>
    );
};

export default TimelineItem;
