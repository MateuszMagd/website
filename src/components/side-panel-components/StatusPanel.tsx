import type { StatusPanelTableProps } from "../../interfaces";
import '../../styles/StatusPanel.css';

export default function StatusPanel({ data }: StatusPanelTableProps) {
    return (
        <div className="status-container">
            <div className="status-header">
                <span>Service</span>
                <span>Status</span>
            </div>
            {data.map((item, index) => (
                <>
                    <div key={index} className="status-item">
                        <span className="status-service-name">{item.serviceName}</span>
                        <span className="status-service-status">{item.status}</span>
                    </div> 
                </>  
            ))}
        </div>
    )
}