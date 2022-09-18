import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchCallSFK} from "../../CommonFunctions/Fetch/FetchCall";




export const Signup = createAsyncThunk(
    'Auth/Signup',
    async (body_sent) => {

        const response= await  FetchCallSFK(
            "/api/User/CUser/",  "Post",
            body_sent,false,false,
            ["success"], ["error"],
        )

        return response;
    }
);