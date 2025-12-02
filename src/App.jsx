import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AdminLayout from './layouts/AdminLayout'
import ViewLayout from './layouts/ViewLayout'
import RequireAuth from './routes/RequireAuth'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/admin/Dashboard'
import Genealogy from './pages/admin/Genealogy'

function App() {
  return (
    <>
      {/* ToastContainer chỉ cần khai báo 1 lần */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} 
        newestOnTop={false} closeOnClick pauseOnHover draggable theme="light" />

      <Routes>
        {/* View template */}
        <Route path="/" element={<ViewLayout />} />
        
        {/* Auth template */}
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/dang-ky" element={<Register />} />

        {/* Admin template */}
        <Route element={<RequireAuth />}>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="danh-sach-gia-pha" element={<Genealogy />} />
            </Route>
        </Route>
      </Routes>
    </>
  )
} 

export default App
