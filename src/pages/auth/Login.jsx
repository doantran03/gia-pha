import LoginForm from '../../features/Auth/components/LoginForm';
import { toast } from 'react-toastify'
import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "@/features/Auth/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const savedUser = useSelector((state) => state.user.current);

    const defaultValues = {
        username: savedUser?.email || "",
        password: "",
    };

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
        <LoginForm onSubmit={handleSubmit} defaultValues={defaultValues} />
    );
}

export default Login;