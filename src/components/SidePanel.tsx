import "../styles/SidePanel.css"

import { useEffect, useState } from "react"
import TechCarousel from "./side-panel-components/TechCarousel"
import Separator from "./stylish/Separator"
import TimePanel from "./side-panel-components/TimePanel"
import StatusPanel from "./side-panel-components/StatusPanel"
import WorldView from "./side-panel-components/WorldView"

function fetchClaudflareStatus() {
    return new Promise<"Online" | "Offline" | "Minor Problems">((resolve) => {
        fetch("https://www.cloudflarestatus.com/api/v2/status.json")
            .then(response => response.json())
            .then(data => {
                const status = data?.status?.indicator === "none" ? "Online" : data?.status?.indicator === "minor" ? "Minor Problems" : "Offline";
                console.log("Cloudflare status:", status);
                resolve(status);
            })
            .catch(() => resolve("Offline"));
    });
}

function fetchGithubStatus() {
    return new Promise<"Online" | "Offline" | "Minor Problems">((resolve) => {
        fetch("https://www.githubstatus.com/api/v2/status.json")
            .then(response => response.json()).then(data => {
                const status = data?.status?.indicator === "none" ? "Online" : data?.status?.indicator === "minor" ? "Minor Problems" : "Offline";
                resolve(status);
            })
            .catch(() => resolve("Offline"));
    });
}



export default function SidePanel() {
    const [claudflareStatus, setClaudflareStatus] = useState<"Online" | "Offline" | "Minor Problems">("Offline");
    const [githubStatus, setGithubStatus] = useState<"Online" | "Offline" | "Minor Problems">("Offline");


    useEffect(() => {
        fetchClaudflareStatus().then(status => setClaudflareStatus(status));
        fetchGithubStatus().then(status => setGithubStatus(status));
    }, []);

    return (
        <div className="side-panel">
            <Separator rightText="Date" leftText="Time"/>
            <div className="time-panel">
                <TimePanel />
            </div>
            <Separator rightText="Experience" leftText="Technology"/>
            <TechCarousel />
            <Separator rightText="Experience" leftText="Technology"/>
            <div className="status-panel-container">
                <StatusPanel data={[
                    {serviceName: "My Service", status: "Online"},
                    {serviceName: "My Employed Status", status: "Offline"},
                    {serviceName: "Github", status: githubStatus},
                    {serviceName: "Cloudflare", status: claudflareStatus}
                ]}
                 />
            </div>
            <Separator rightText="GLOBAL NETWORK MAP" leftText="World View"/>
            <WorldView />
        </div>
    )
}