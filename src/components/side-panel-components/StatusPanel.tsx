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
                        <span className="status-service-name">
                            {item.serviceName}
                        </span>
                        
                        <span className="status-service-status">
                            <span className={`status-service-status-text ${item.status === 'Online' ? 'status-service-status-text--online' : item.status === 'Offline' ? 'status-service-status-text--offline' : 'status-service-status-text--minor-problems'}`}>{item.status}</span>
                            <span className={`status-dot ${item.status === 'Online' ? 'status-dot--online' : item.status === 'Offline' ? 'status-dot--offline' : 'status-dot--minor-problems'}`} />
                        </span>
                    </div> 
                </>  
            ))}
        </div>
    )
}