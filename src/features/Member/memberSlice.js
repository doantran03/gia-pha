import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import memberApi from "../../api/memberApi";

export const getAllMemberByGenealogyId = createAsyncThunk("member/getAll", async (id) => {
    const response = await memberApi.getAllByGenealogyId(id);
    
    return response.data;
});

const genealogySlice = createSlice({
  name: "member",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMemberByGenealogyId.fulfilled, (state, action) => {
        state.items = action.payload;
    });
  },
});

export default genealogySlice.reducer;
