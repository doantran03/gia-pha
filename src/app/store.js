import userReducer from "../features/Auth/userSlice";
import genealogyReducer from "../features/Genealogy/genealogySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        user: userReducer,
        genealogy: genealogyReducer,
    },
});

export default store;
