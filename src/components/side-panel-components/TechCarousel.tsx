import { useState } from 'react';
import Technologies from './Technologies';
import '../../styles/TechCarousel.css';

import text from '../../texts.json';

const panels = [
    {
        headers: ["Technology", "Experience"],
        rows: [
            { name: "Python", experience: "Advance" },
            { name: "FastApi", experience: "Regular" },
            { name: "Streamlit", experience: "Regular" },
            { name: "Pytorch", experience: "Regular" },
            { name: "Django", experience: "Basic" },
            { name: "Flask", experience: "Basic" },
            
        ],
        text: [text.sidePanel.technologies.Python]
    },
    {
        headers: ["Technology", "Experience"],
        rows: [
            { name: "HTML/CSS", experience: "Regular" },
            { name: "JavaScript", experience: "Regular" },
            { name: "React", experience: "Regular" },
            { name: "Node.js", experience: "Basic" },
        ],
        text: [text.sidePanel.technologies["Web Development"]]
    },
    {
        headers: ["Technology", "Experience"],
        rows: [
            { name: "Git", experience: "Advanced" },
            { name: "Docker", experience: "Regular" },
            { name: "Kubernetes", experience: "Basic" },
            { name: "Terraform", experience: "Basic" },
            { name: "Github Actions", experience: "Basic" },
            { name: "AWS", experience: "Basic" },
            { name: "PostgreSQL", experience: "Regular" },
            { name: "MySQL", experience: "Regular" },
            { name: "Redis", experience: "Basic" },
        ],
        text: [text.sidePanel.technologies.DevOps]
    },
    {
        headers: ["Technology", "Experience"],
        rows: [
            { name: "Java", experience: "Regular" },
            { name: "Spring Boot", experience: "Basic" },
            { name: "C/C++", experience: "Basic" },
            { name: "C#", experience: "Regular" },
            { name: ".NET", experience: "Basic" },
        ],
        text: [text.sidePanel.technologies["Other Technologies"]]
    },
];

export default function TechCarousel() {
    const [active, setActive] = useState(0);

    return (
        <div className="tech-carousel">
            <div className="carousel-viewport">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${active * 100}%)` }}
                >
                    {panels.map((panel, i) => (
                        <div key={i} className="carousel-slide">
                            <Technologies headers={panel.headers} rows={panel.rows} text={panel.text} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel-dots">
                {panels.map((_, i) => (
                    <button
                        key={i}
                        className={`carousel-dot${i === active ? ' active' : ''}`}
                        onClick={() => setActive(i)}
                        aria-label={`Panel ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
