import './App.css'
import { useState } from 'react'
import AboutMe from './components/AboutMe.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'
import Help from './components/Help.tsx'

function App() {
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

export default App
