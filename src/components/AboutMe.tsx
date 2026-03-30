import Terminal from "./Terminal"

interface AboutMeProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function AboutMe({ activePage, onNavigate }: AboutMeProps) {
    return (
        <>
            <Terminal 
                text_in_terminal="I'm a software developer with a passion for creating innovative solutions to complex problems. I have experience in a variety of programming languages and frameworks, and I'm always eager to learn new technologies. In my free time, I enjoy contributing to open source projects and exploring the latest trends in software development."  
                folder="aboutme"
                command="cat aboutme.txt"
                activePage={activePage}
                onNavigate={onNavigate}
            />
        </>
    )
    
}