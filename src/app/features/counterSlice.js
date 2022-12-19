import {  createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  value: 0,
  data:null,
  error:"",
  isLoading:false
};

// First, create the thunk
export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return response.data
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers:(builder)=>{
     builder.addCase(fetchPosts.pending, (state)=>{
        state.isLoading = true
     })
     .addCase(fetchPosts.rejected, (state)=>{
      state.isLoading = false
      state.error = "something went wrong"

     })
     .addCase(fetchPosts.fulfilled, (state, action)=>{
      state.isLoading = false
      state.data = action.payload

     })
  }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions;




export default counterSlice.reducer;