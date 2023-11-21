import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from './Loginslice'
const Store = configureStore({
    reducer: {
        reducer: LoginReducer

    }
})

export default Store
