import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import ViewLayout from './layouts/ViewLayout'
import Dashboard from './components/layout/admin/Dashboard'
import Genealogy from './components/layout/admin/Genealogy'
import RequireAuth from './routes/RequireAuth'
import Login from './components/layout/auth/Login'
import Register from './components/layout/auth/Register'

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
