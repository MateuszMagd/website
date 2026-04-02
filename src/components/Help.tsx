import Terminal from "./Terminal"
import text from "../texts.json";

interface HelpProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function Help({ activePage, onNavigate }: HelpProps) {
    return (
        <>
            <Terminal 
                text_in_terminal={text.terminal.Help}
                folder="help"
                command="cat help.txt"
                activePage={activePage}
                onNavigate={onNavigate}
            />
        </>
    )
}