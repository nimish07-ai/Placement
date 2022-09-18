import {createAsyncThunk} from "@reduxjs/toolkit";
import {FetchCallSFK} from "../../CommonFunctions/Fetch/FetchCall";




export const Logout = createAsyncThunk(
    'Auth/Logout',
    async (body_sent) => {

        const response= await  FetchCallSFK(
            "/api/User/User/Logout/",  "Post",
            body_sent,false,false,
            ["success"], ["error"],
        )



        return response;
    }
);