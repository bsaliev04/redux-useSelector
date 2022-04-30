import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/User'
import themeReducer from '../features/Theme'

export const store = configureStore({
    reducer: {
        user: userReducer, 
        theme: themeReducer, 
    },
})

