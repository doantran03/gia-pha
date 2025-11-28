import Nav from '../components/layout/admin/Nav';
import Sidebar from '../components/layout/admin/Sidebar';
import Content from '../components/layout/admin/Content';
import { useState } from 'react';

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
                <Content />
            </div>
        </div>
    );
}

export default AdminLayout;