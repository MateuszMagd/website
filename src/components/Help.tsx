import Terminal from "./Terminal"

interface HelpProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function Help({ activePage, onNavigate }: HelpProps) {
    return (
        <>
            <Terminal 
                text_in_terminal="Navigate using the buttons above: About Me, My Projects, Contact Me, Help."
                folder="help"
                command="cat help.txt"
                activePage={activePage}
                onNavigate={onNavigate}
            />
        </>
    )
}