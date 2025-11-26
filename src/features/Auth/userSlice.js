import userApi from "@/api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk("user/login", async (payload) => {
    const response = await userApi.login(payload);

    if (response.token) {
        localStorage.setItem("access_token", response.token);
    }

    return {
        email: response.user_email,
        nicename: response.user_nicename,
        display_name: response.user_display_name,
    };
});

export const register = createAsyncThunk("user/register", async (payload) => {
    const response = await userApi.register(payload);

    if (response.token) {
        localStorage.setItem("access_token", response.token);
    }

    return {
        id: response.data.id,
        email: response.data.email,
        nicename: response.data.nicename,
        display_name: response.data.display_name,
    };
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        current: null,
        isLoggedIn: false,
    },
    reducers: {
        logout: (state) => {
            state.current = null;
            state.isLoggedIn = false;
            localStorage.removeItem("access_token");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.current = action.payload;
            state.isLoggedIn = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.current = action.payload;
            state.isLoggedIn = true; // auto login sau khi register
        });
    },
});

// Export actions
export const { logout, updateUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
