import Terminal from "./Terminal"
import text from "../texts.json";

interface ProjectsProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function Projects({ activePage, onNavigate }: ProjectsProps) {
    return (
        <>
            <Terminal 
                text_in_terminal={text.terminal.Projects}
                folder="projects"
                command="ls projects/"
                activePage={activePage}
                onNavigate={onNavigate}
            />
        </>
    )
}