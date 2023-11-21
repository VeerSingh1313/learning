import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



export const FatchLogin = createAsyncThunk('FatchLogin', async (payload) => {
    const response = await axios.post(`https://dummyjson.com/auth/login`, payload)
    return response.data
})