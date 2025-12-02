import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import ViewLayout from './layouts/ViewLayout'
import RequireAuth from './routes/RequireAuth'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/admin/Dashboard'
import Genealogy from './pages/admin/Genealogy'

function App() {
  return (
      <Routes>
        {/* View template */}
        <Route path="/" element={<ViewLayout />} />
        
        {/* Auth template */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin template */}
        <Route element={<RequireAuth />}>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="danh-sach-gia-pha" element={<Genealogy />} />
            </Route>
        </Route>
      </Routes>
  )
} 

export default App
