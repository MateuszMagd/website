import Terminal from "./Terminal"

interface ProjectsProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function Projects({ activePage, onNavigate }: ProjectsProps) {
    return (
        <>
            <Terminal 
                text_in_terminal="My projects will be listed here."
                folder="projects"
                command="ls projects/"
                activePage={activePage}
                onNavigate={onNavigate}
            />
        </>
    )
}