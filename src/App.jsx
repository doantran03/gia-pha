import './App.css'
import Admin from './components/Admin'
import Login from './features/Auth/components/Login'
import Register from './features/Auth/components/Register'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  )
} 

export default App
