import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages';

function App() {

  return (
    // <AudioManagerProvider>        
      <div className="flex flex-col
        bg-blue-800/20 h-screen
        ">
            <Router>
                <Routes>
                    {/* Lobby Page */}
                    <Route path="/" element={<Home/>} />
                </Routes>
            </Router>
            
        </div>
      // </AudioManagerProvider>
  )
}

export default App
