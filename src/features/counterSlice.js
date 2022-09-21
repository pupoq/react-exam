import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += 10;
        },
        decrement: (state, action) => {
            state.value -= 10;
        },
        addBy: (state, action) => {
            state.value += action.payload
        }
    }
})


export const {increment, decrement, addBy} = counterSlice.actions

export default counterSlice.reducer