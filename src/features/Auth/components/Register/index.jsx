import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "@/features/Auth/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../RegisterForm";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log("User: ", user);

            navigate("/login");
        } catch (error) {
            console.log("Failed to login: ", error);
        }
    };

    return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
