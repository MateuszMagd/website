import NavTerminal  from "./NavTerminal"
import Separator from "./stylish/Separator";

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
        <div>
            <Separator leftText="Terminal" rightText={folder} />
            <div className="terminal">
                <NavTerminal activePage={activePage} onNavigate={onNavigate} />
                <div className="terminal-content">
                    <p><span style={{ color: "var(--accent)" }}>matmag@portfolio</span>:<span style={{ color: "var(--text-dim)" }}>/{folder}$</span> {command}</p>
                    <p className="terminal-text">
                        {text_in_terminal}
                    </p>
                </div>
            </div>
        </div>
    )
}