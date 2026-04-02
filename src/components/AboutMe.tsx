import Terminal from "./Terminal"
import text from "../texts.json";

interface AboutMeProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function AboutMe({ activePage, onNavigate }: AboutMeProps) {
    return (
        <>
            <Terminal 
                text_in_terminal={text.terminal.AboutMe}
                folder="aboutme"
                command="cat aboutme.txt"
                activePage={activePage}
                onNavigate={onNavigate}
            />
        </>
    )
    
}