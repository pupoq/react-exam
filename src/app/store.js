import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import postsReducer from '../features/postsSlice'
import flagsReducer from '../features/flagsSlice'
import cytatyReducer from '../features/cytatySlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer, 
        posts: postsReducer,
        flags: flagsReducer,
        cytaty: cytatyReducer
    }
})