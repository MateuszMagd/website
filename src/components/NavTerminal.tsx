import "../styles/NavTerminal.css"

interface NavTerminalProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function NavTerminal({ activePage, onNavigate }: NavTerminalProps) {
    return (
        <div className="nav-terminal">
            <div className={`nav-terminal-button${activePage === "about" ? " active" : ""}`} onClick={() => onNavigate("about")}>
                About Me
            </div>
            <div className={`nav-terminal-button${activePage === "projects" ? " active" : ""}`} onClick={() => onNavigate("projects")}>
                My Projects
            </div>
            <div className={`nav-terminal-button${activePage === "contact" ? " active" : ""}`} onClick={() => onNavigate("contact")}>
                Contact Me
            </div>
            <div className={`nav-terminal-button${activePage === "help" ? " active" : ""}`} onClick={() => onNavigate("help")}>
                Help
            </div>
        </div>
    )
}