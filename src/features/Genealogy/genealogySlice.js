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

    console.log(response);

    return id;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message);
  }
});

const genealogySlice = createSlice({
  name: "genealogy",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // get all
    builder
      .addCase(getAllGenealogy.fulfilled, (state, action) => {
        state.items = action.payload;
      })

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