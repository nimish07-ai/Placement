import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../../CommonFunctions/Fetch/FetchCall";
import failureDefaultFunction from "../../../CommonFunctions/Fetch/failureFunction";
import wrapper from "../../../CommonFunctions/Fetch/failureFunction";


export const PasswordConfrom = createAsyncThunk(
    'Auth/PasswordConfrom',

      async (body_sent) =>
     {
         console.log("dddddddddddddddddddddddddddddjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj./post ")

         const response= await  FetchCallSFK(
             "/api/password_reset/confirm/",  "Post",
             body_sent,false,wrapper(["error","password"]),
             ["status"], ["detail"],
         )
         console.log(response,"ddddddddddsssacksqqqqqqqqqqqqwwwwwwwwwwwwwww")
        return response

     }

);