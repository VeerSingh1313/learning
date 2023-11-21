import { createSlice } from "@reduxjs/toolkit";
import { FatchLogin } from "./LoginAction";

const Login = createSlice({
    name: 'data',
    initialState: {
        loginuser: [],
        isloading: false,
        isError: false,

    }
    ,
    extraReducers: ((builder) => {
        builder.addCase(FatchLogin.pending, (state) => {
            state.isloading = true;
            state.isError = false;
        })
        builder.addCase(FatchLogin.fulfilled, (state, action) => {
            state.isloading = false;
            state.loginuser = action.payload;
            state.isError = false;
        })
        builder.addCase(FatchLogin.rejected, (state) => {
            state.isloading = false;
            state.isError = true
        })
    })


})
export default Login.reducer