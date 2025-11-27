import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "@/features/Auth/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../LoginForm";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log("User: ", user);

            navigate("/");
        } catch (error) {
            console.log("Failed to login: ", error);
        }
    };

    return <LoginForm onSubmit={handleSubmit} />;
}

export default Login;
