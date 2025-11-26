import userReducer from "../features/Auth/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default store;
