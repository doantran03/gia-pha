import LoginForm from '../../features/Auth/components/LoginForm';
import longLeft from '@assets/images/longleft.png';
import logo from '@assets/images/GIAPHADAIVIET.png';
import longRight from '@assets/images/longright.png';
import { toast } from 'react-toastify'
import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "@/features/Auth/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log("User: ", user);

            navigate("/admin");
            toast.success("Đăng nhập thành công!")
        } catch (error) {
            toast.error(error)
            console.log("Failed to login: ", error);
        }
    };

    return (
        <div className='app-auth'>
            <div className='auth-banner'>
                <img className='long-left' src={longLeft} alt="long left" />
                <img className='logo' src={logo} alt="logo" />
                <img className='long-right' src={longRight} alt="long right" />
            </div>
            <div className='auth-card'>
                <LoginForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default Login;