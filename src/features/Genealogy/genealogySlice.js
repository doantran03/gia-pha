import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import genealogyApi from "../../api/genealogyApi";

// Async thunk get all
export const getAllGenealogy = createAsyncThunk("genealogy/getAll", async () => {
    const response = await genealogyApi.getAll();

    console.log(response);
    
    return response.data;
});

// Async thunk create
export const createGenealogy = createAsyncThunk("genealogy/create", async (data, { rejectWithValue }) => {
  try {
    const response = await genealogyApi.create(data);

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message);
  }
});

// Async thunk update
export const updateGenealogy = createAsyncThunk("genealogy/update", async ({ id, data }, { rejectWithValue }) => {
  try {
    const response = await genealogyApi.update(id, data);

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message);
  }
});

// Async thunk delete 
export const deleteGenealogy = createAsyncThunk("genealogy/delete", async (id, { rejectWithValue }) => {
  try {
    const response = await genealogyApi.delete(id);

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message);
  }
});

const genealogySlice = createSlice({
  name: "genealogy",
  initialState: {
    items: [],
    loading: false, 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // get all
    builder
      .addCase(getAllGenealogy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllGenealogy.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getAllGenealogy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // create
    builder
      .addCase(createGenealogy.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });

    // update
    builder
      .addCase(updateGenealogy.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) state.items[index] = action.payload;
      });

    // delete
    builder
      .addCase(deleteGenealogy.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default genealogySlice.reducer;