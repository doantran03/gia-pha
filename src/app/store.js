import userReducer from "../features/Auth/userSlice";
import memberReducer from "../features/member/memberSlice";
import genealogyReducer from "../features/Genealogy/genealogySlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        user: userReducer,
        member: memberReducer,
        genealogy: genealogyReducer,
    },
});

export default store;
