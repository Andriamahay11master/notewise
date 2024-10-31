
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Capture from './pages/Capture'
import NoteEditor from './pages/NoteEditor'
import Settings from './pages/Settings'

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/capture' element={<Capture/>}></Route>
          <Route path='/editor' element={<NoteEditor/>}></Route>
          <Route path='/settings' element={<Settings/>}></Route>
        </Routes>
    </Router>
    
  )
}

export default App
