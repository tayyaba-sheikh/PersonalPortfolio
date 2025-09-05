import CountUp from "react-countup";

const StatsCard = ({ icon, value, label, duration = 2, aos, aosDelay, aosDuration }) => {
    return (
        <div
            className="stats-card"
            data-aos={aos}
            data-aos-delay={aosDelay}
            data-aos-duration={aosDuration}
        >
            <div className="stats-left">
                <h2 className="stats-value">
                    <CountUp end={value} duration={duration} />+
                </h2>
                <p className="stats-label">{label}</p>
            </div>
            <div className="stats-right">
                <div className="stats-icon__wrapper">{icon}</div>
            </div>
        </div>
    );
};

export default StatsCard;
