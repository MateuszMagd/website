import { useEffect, useState } from "react";

import "../../styles/TimePanel.css"

export default function TimePanel() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="time-panel-container">
            <span className="time">
                {currentDate.toLocaleTimeString()}
            </span>
            <div className="wave-separator"/>
            <span className="date">
                {currentDate.toLocaleDateString()}
            </span>
        </div>
    )
}