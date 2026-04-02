import { useEffect, useRef, useState } from 'react';
import '../../styles/MiniFakeTerminal.css';

export interface Line {
    type: 'command' | 'output' | 'log';
    text: string;
}

const DEFAULT_LINES: Line[] = [
    { type: 'command', text: 'whoami' },
    { type: 'output',  text: 'mateusz — software engineer' },
    { type: 'command', text: 'echo $FOCUS' },
    { type: 'output',  text: 'Python · Backend · AI' },
    { type: 'command', text: 'cat status.txt' },
    { type: 'output',  text: 'open to opportunities' },
    { type: 'command', text: 'uptime' },
    { type: 'output',  text: 'always learning...' },
];

interface MiniFakeTerminalProps {
    lines?: Line[];
    title?: string;
}

export default function MiniFakeTerminal({ lines = DEFAULT_LINES, title }: MiniFakeTerminalProps) {
    const [visibleCount, setVisibleCount] = useState(0);
    const bodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (visibleCount >= lines.length) return;
        const delay = 1500 + Math.random() * 3500;
        const timer = setTimeout(() => setVisibleCount(v => v + 1), delay);
        return () => clearTimeout(timer);
    }, [visibleCount, lines]);

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
    }, [visibleCount]);



    return (
        <div className="mini-terminal">
            <div className="mini-terminal-bar">
                <span className="mini-terminal-dot red" />
                <span className="mini-terminal-dot yellow" />
                <span className="mini-terminal-dot green" />
                {title && <span className="mini-terminal-title">{title}</span>}
            </div>
            <div className="mini-terminal-body">
                {lines.slice(0, visibleCount).map((line, i) => (
                    <div key={i} className={`mini-terminal-line mini-terminal-line--${line.type}`}>
                        {line.type === 'command' && (
                            <span className="mini-terminal-prompt">$&nbsp;</span>
                        )}
                        {line.text}
                        {i === visibleCount - 1 && line.type === 'command' && (
                            <span className="mini-terminal-cursor" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

