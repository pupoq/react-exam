import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk('flags/fetchCountries', async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return await response.json()
})

const initialState = {
    isLoading: false,
    flags: [],
    error: ''
}

const flagsSlice = createSlice({
    name: 'flags',
    initialState,
    extraReducers: (builder) => {
        builder 
        .addCase(fetchCountries.pending, (state, action) => {
            state.isLoading = true 
        })  
        .addCase(fetchCountries.fulfilled, (state, action) => {
            state.isLoading = false;
            state.flags = action.payload
        })  
        .addCase(fetchCountries.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

export default flagsSlice.reducer

