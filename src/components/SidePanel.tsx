import "../styles/SidePanel.css"

import TechCarousel from "./side-panel-components/TechCarousel"
import Separator from "./stylish/Separator"
import TimePanel from "./side-panel-components/TimePanel"
import StatusPanel from "./side-panel-components/StatusPanel"
import WorldView from "./side-panel-components/WorldView"

export default function SidePanel() {
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
                    {serviceName: "API Gateway", status: "Operational"},
                    {serviceName: "Authentication Service", status: "Operational"},
                    {serviceName: "User Service", status: "Operational"},
                    {serviceName: "Payment Service", status: "Operational"},
                    {serviceName: "Notification Service", status: "Operational"},
                ]}
                 />
            </div>
            <Separator rightText="LAT/LON" leftText="World View"/>
            <WorldView />
        </div>
    )
}