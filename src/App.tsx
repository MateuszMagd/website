import './App.css'
import MiniFakeTerminal from './components/side-panel-components/MiniFakeTermianl'
import type { Line } from './components/side-panel-components/MiniFakeTermianl'
import SidePanel from './components/SidePanel'
import TerminalWindow from './components/TerminalWindow'

const BOOT_LOGS: Line[] = [
  { type: 'log', text: '[20:20:31] System boot sequence initialized' },
  { type: 'log', text: '[20:20:32] Loading core modules...' },
  { type: 'log', text: '[20:20:33] UI engine ready' },
  { type: 'log', text: '[20:20:34] Establishing secure connection...' },
  { type: 'log', text: '[20:20:35] Connection established' },
  { type: 'log', text: '[20:20:36] Fetching user profile...' },
  { type: 'log', text: '[20:20:37] Profile loaded: Mateusz' },
  { type: 'log', text: '[20:20:38] Initializing AI components...' },
  { type: 'log', text: '[20:20:39] AI module ready' },
  { type: 'log', text: '[20:20:40] Loading projects database...' },
  { type: 'log', text: '[20:20:41] Projects loaded successfully' },
  { type: 'log', text: '[20:20:42] Monitoring services...' },
  { type: 'log', text: '[20:20:43] GitHub status: ONLINE' },
  { type: 'log', text: '[20:20:44] Cloudflare status: DEGRADED' },
  { type: 'log', text: '[20:20:45] System status: OPERATIONAL' },
  { type: 'log', text: '[20:20:46] Portfolio ready' },
];

const SYS_LOGS: Line[] = [
  { type: 'log', text: '[INIT] Booting interface...' },
  { type: 'log', text: '[SYS] Loading modules...' },
  { type: 'log', text: '[NET] Establishing connection...' },
  { type: 'log', text: '[OK] Connection secured' },
  { type: 'log', text: '[AUTH] User authenticated' },
  { type: 'log', text: '[DATA] Fetching assets...' },
  { type: 'log', text: '[OK] Assets loaded' },
  { type: 'log', text: '[AI] Initializing neural core...' },
  { type: 'log', text: '[OK] AI ready' },
  { type: 'log', text: '[MON] Checking services...' },
  { type: 'log', text: '[OK] GitHub ONLINE' },
  { type: 'log', text: '[WARN] Cloudflare DEGRADED' },
  { type: 'log', text: '[SYS] All systems operational' },
];

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
        <div className='right-panel-group-row'>
          <MiniFakeTerminal title="shell" />
          <MiniFakeTerminal title="boot.log" lines={BOOT_LOGS} />
          <MiniFakeTerminal title="sys.log" lines={SYS_LOGS} />
        </div>
      </div>
      
    </div>
    
  )
}

export default App
