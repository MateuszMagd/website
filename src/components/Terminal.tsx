import NavTerminal  from "./NavTerminal"

import "../styles/Terminal.css"

interface TerminalProps {
    text_in_terminal: string;
    folder: string;
    command: string;
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function Terminal({ text_in_terminal, folder, command, activePage, onNavigate }: TerminalProps) {
    return ( 
        <div className="terminal">
            <NavTerminal activePage={activePage} onNavigate={onNavigate} />
            <div className="terminal-content">
                <p><span style={{ color: "#60a5fa" }}>matmag@portfolio</span>:<span style={{ color: "#9ca3af" }}>/{folder}$</span> {command}</p>
                <p className="terminal-text">
                    {text_in_terminal}
                </p>
            </div>
        </div>
    )
}