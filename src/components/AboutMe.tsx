import Terminal from "./Terminal"

interface AboutMeProps {
    activePage: string;
    onNavigate: (page: string) => void;
}

export default function AboutMe({ activePage, onNavigate }: AboutMeProps) {
    return (
        <>
            <Terminal 
                text_in_terminal="Hello! I'm Mateusz, a passionate software developer with a love for creating innovative solutions. With experience in various programming languages and frameworks, I enjoy tackling complex problems and building applications that make a difference. When I'm not coding, you can find me exploring new technologies and gaming! Always open to new opportunities and collaborations, feel free to reach out!"  
                folder="aboutme"
                command="cat aboutme.txt"
                activePage={activePage}
                onNavigate={onNavigate}
            />
        </>
    )
    
}