import longLeft from '@assets/images/longleft.png';
import logo from '@assets/images/GIAPHADAIVIET.png';
import longRight from '@assets/images/longright.png';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return (
        <div className='app-auth'>
            <div className='auth-banner'>
                <img className='long-left' src={longLeft} alt="long left" />
                <img className='logo' src={logo} alt="logo" />
                <img className='long-right' src={longRight} alt="long right" />
            </div>
            <div className='auth-card'>
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;