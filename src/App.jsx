import './App.css'
import Admin from './components/Admin'
import Login from './features/Auth/components/Login'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
} 

export default App
