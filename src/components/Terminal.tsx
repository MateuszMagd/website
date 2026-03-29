import NavTerminal  from "./NavTerminal"

import "../styles/Terminal.css"

export default function Terminal() {
    return ( 
        <div className="terminal">
            <NavTerminal />
            <div className="terminal-content">
                <h1>About Me</h1>
                <p>
                    I'm a software developer with a passion for creating innovative solutions to complex problems. I have experience in a variety of programming languages and frameworks, and I'm always eager to learn new technologies. In my free time, I enjoy contributing to open source projects and exploring the latest trends in software development.
                </p>
            </div>
        </div>
    )
}