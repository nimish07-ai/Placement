import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../CommonFunctions/Fetch/FetchCall";


export const LoginThunk = createAsyncThunk(
    'Auth/Login',

      async (body_sent) =>
     {
         // console.log("dddddddddddddddddddddddddddddjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj./post ")

         const response= await  FetchCallSFK(
             "/api/User/CUser/login/",  "Post",
             body_sent,false,false,
             ["success"], ["error"],
         )
         // console.log(response,"ddddddddddsssacksqqqqqqqqqqqqwwwwwwwwwwwwwww")
        return response

     }

);