import logo from '@/assets/images/GIAPHADAIVIET.png';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Sidebar.propTypes = {
    sidebarOpen: PropTypes.bool.isRequired,
};

function Sidebar({ sidebarOpen }) {
    return (
        <div className='app-sidebar'>
            <Link to="/admin">
                <div className='sidebar-brand'>
                    <img src={logo} alt="brand" />
                </div>
            </Link>
            <nav className='nav-menu'>
                <ul className='sidebar-menu'>
                    <li className='nav-header'>Gia phả</li>
                    <li className='nav-item'>
                        <Link to="/admin/danh-sach-gia-pha">
                            <AccountTreeIcon sx={{ mr: 1, fontSize: 16 }} />
                            <span>Danh sách {sidebarOpen}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;