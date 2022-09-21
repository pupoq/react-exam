import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCytaty = createAsyncThunk('flags/fetchCytaty', async () => {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json()
    return data
})

const initialState = {
    isLoading: false,
    flags: [],
    error: ''
}

const cytatySlice = createSlice({
    name: 'cytaty',
    initialState,
    extraReducers: (builder) => {
        builder 
        .addCase(fetchCytaty.pending, (state, action) => {
            state.isLoading = true 
        })  
        .addCase(fetchCytaty.fulfilled, (state, action) => {
            state.isLoading = false;
            state.flags = action.payload
        })  
        .addCase(fetchCytaty.rejected, (state, action) => {
            state.error = action.error.message
        })
    }
})

export default cytatySlice.reducer