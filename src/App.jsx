import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import ViewLayout from './layouts/ViewLayout'

function App() {
  return (
      <Routes>
        {/* View template */}
        <Route path="/" element={<ViewLayout />} />

        {/* Admin template */}
        <Route path="/admin" element={<AdminLayout />}>
            {/* <Route index element={<AdminDashboard />} /> */}
        </Route>
      </Routes>
  )
} 

export default App
