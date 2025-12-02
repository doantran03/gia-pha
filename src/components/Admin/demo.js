import userApi from "@/api/userApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Lấy dữ liệu user từ localStorage nếu có
const storedUser = localStorage.getItem("current_user");

const initialState = storedUser
  ? { current: JSON.parse(storedUser), isLoggedIn: true }
  : { current: null, isLoggedIn: false };

// Async thunk login
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

// Async thunk register
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
  initialState,
  reducers: {
    logout: (state) => {
      state.current = null;
      state.isLoggedIn = false;
      localStorage.removeItem("access_token");
      localStorage.removeItem("current_user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("current_user", JSON.stringify(action.payload));
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload;
      // state.isLoggedIn = true; // auto login sau khi register
      // localStorage.setItem("current_user", JSON.stringify(action.payload));
    });
  },
});

// Export actions
export const { logout } = userSlice.actions;

// Export reducer
export default userSlice.reducer;