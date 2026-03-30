import './App.css'
import SidePanel from './components/SidePanel'
import TerminalWindow from './components/TerminalWindow'

function App() {
  return (
    <div className="app">
      <div className='left-panel'>
        <SidePanel />
      </div>
      <div className='right-panel'>
        <TerminalWindow />
      </div>
      
    </div>
    
  )
}

export default App
