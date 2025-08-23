import React, { useEffect, useState } from "react";
import { HiOutlineClock } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const TimeDisplay = () => {
    const [time, setTime] = useState(new Date());
    const [location, setLocation] = useState({ city: "", country: "", timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone });
    const [error, setError] = useState("");

    // Fetch location from BigDataCloud
    const fetchLocation = async (lat, lon) => {
        try {
            const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
            );
            const data = await response.json();

            setLocation({
                city: data.city || data.locality || "",
                country: data.countryName || "",
                timeZone: data.timezone?.id || Intl.DateTimeFormat().resolvedOptions().timeZone,
            });
        } catch (err) {
            console.error("Error fetching location:", err);
            setError("Unable to fetch location data");
        }
    };

    useEffect(() => {
        // Ask for geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    fetchLocation(latitude, longitude);
                },
                (err) => {
                    console.warn("Geolocation denied or error:", err);
                    setLocation((prev) => ({
                        ...prev,
                        city: "",
                        country: "",
                        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    }));
                }
            );
        } else {
            setError("Geolocation not supported");
        }
    }, []);

    // Update time every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: location.timeZone,
    }).format(time);

    return (
        <div className="flex flex-col items-center ">
            <div className="flex items-center text-base gap-1">
                <HiOutlineLocationMarker className="text-accent" />
                <span>
                    {location.city ? `${location.city}, ${location.country}` : "Local Time"}
                </span>
            </div>
            <div className="flex items-center gap-1 text-base">
                <HiOutlineClock className="text-accent" />
                <span>{formattedTime}</span>
            </div>
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
};

export default TimeDisplay;
