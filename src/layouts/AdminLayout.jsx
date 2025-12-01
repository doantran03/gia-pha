import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/layout/admin/Nav';
import Sidebar from '../components/layout/admin/Sidebar';

function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className='app'>
            <Sidebar sidebarOpen={sidebarOpen} />
            <div className='app-wrapper'>
                <Nav toggleSidebar={toggleSidebar} />
                <div className='app-main'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;