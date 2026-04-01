import "../styles/SidePanel.css"

import Technologies from "./side-panel-components/Technologies"
import Separator from "./stylish/Separator"
import TimePanel from "./side-panel-components/TimePanel"

export default function SidePanel() {
    return (
        <div className="side-panel">
            <Separator rightText="Date" leftText="Time"/>
            <div className="time-panel">
                <TimePanel />
            </div>
            <Separator rightText="Experience" leftText="Technology"/>
            <div className="tech-stack">
                <div className="tech-stack-content-technologies">
                    <Technologies headers={["Technology", "Experience"]} rows={[
                    { name: "Python", experience: "Advance" },
                    { name: "Java", experience: "Regular" },
                    { name: "C/C++/C#", experience: "Basic" },
                    ]} />
                    <Technologies headers={["Technology", "Experience"]} rows={[
                        { name: "JavaScript", experience: "Regular" },
                        { name: "React", experience: "Regular" },
                        { name: "Node.js", experience: "Basic" },
                        { name: "HTML/CSS", experience: "Regular" },
                    ]} />
                </div>
            </div>
            <div className="tech-stack">
                <div className="tech-stack-content-technologies">
                    <Technologies headers={["Technology", "Experience"]} rows={[
                    { name: "Kubernetes", experience: "Basic" },
                    { name: "Terraform", experience: "Basic" },
                    { name: "Github Actions", experience: "Basic" },
                    { name: "Docker", experience: "Regular" },
                    { name: "Git", experience: "Advanced" },
                    ]} />
                    
                    <Technologies headers={["Technology", "Experience"]} rows={[
                    { name: "PostgreSQL", experience: "Regular" },
                    { name: "MySQL", experience: "Regular" },
                    { name: "Redis", experience: "Basic" },
                    { name: "FastAPI/ Flask/ Django", experience: "Basic" },
                    { name: "Streamlit", experience: "Regular" },
                    { name: "Spring Boot", experience: "Basic" },
                ]} />
                </div>
            </div>
            <Separator rightText="Experience" leftText="Technology"/>
        </div>
    )
}