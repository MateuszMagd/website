import { useState } from "react"
import AboutMe from "./AboutMe.tsx"
import Projects from "./Projects.tsx"
import Contact from "./Contact.tsx"
import Help from "./Help.tsx"

function TerminalWindow() {
  const [activePage, setActivePage] = useState("about")

  return (
    <>
      {activePage === "about" && <AboutMe activePage={activePage} onNavigate={setActivePage} />}
      {activePage === "projects" && <Projects activePage={activePage} onNavigate={setActivePage} />}
      {activePage === "contact" && <Contact activePage={activePage} onNavigate={setActivePage} />}
      {activePage === "help" && <Help activePage={activePage} onNavigate={setActivePage} />}
    </>
  )
}

export default TerminalWindow