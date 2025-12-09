import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import AdminLayout from './layouts/AdminLayout'
import ViewLayout from './layouts/ViewLayout'
import RequireAuth from './routes/RequireAuth'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/admin/Dashboard'
import Genealogy from './pages/admin/Genealogy'
import AuthLayout from './layouts/AuthLayout'
import Member from './pages/admin/Member'

function App() {
  return (
    <>
      {/* ToastContainer */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} 
        newestOnTop={false} closeOnClick pauseOnHover draggable theme="light" />

      <Routes>
        {/* View template */}
        <Route path="/" element={<ViewLayout />} />
        
        {/* Auth template */}
        <Route element={<AuthLayout />}>
            <Route path="/dang-nhap" element={<Login />} />
            <Route path="/dang-ky" element={<Register />} />
        </Route>

        {/* Admin template */}
        <Route element={<RequireAuth />}>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="danh-sach-gia-pha" element={<Genealogy />} />
                <Route path="danh-sach-thanh-vien/:id" element={<Member />} />
            </Route>
        </Route>
      </Routes>
    </>
  )
} 

export default App
