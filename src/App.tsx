import './App.css'
import SidePanel from './components/SidePanel'
import TerminalWindow from './components/TerminalWindow'

function App() {
  return (
    <div className="app">
      <div className='left-panel'>
        <div className='left-panel-group-row'>
          <SidePanel />
        </div>
        
      </div>
      <div className='right-panel'>
        
        <TerminalWindow />
      </div>
      
    </div>
    
  )
}

export default App
