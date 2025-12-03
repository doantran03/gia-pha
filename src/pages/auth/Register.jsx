import RegisterForm from '../../features/Auth/components/RegisterForm';
import { toast } from 'react-toastify'
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "@/features/Auth/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log("User: ", user);

            navigate("/dang-nhap");
            toast.success("Đăng ký thành công!")
        } catch (error) {
            toast.error(error)
            console.log("Failed to register: ", error);
        }
    };

    return (
        <RegisterForm onSubmit={handleSubmit} />
    );
}

export default Register;