import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../../CommonFunctions/Fetch/FetchCall";
import wrapper from "../../../CommonFunctions/Fetch/failureFunction";

export const PasswordResetPost = createAsyncThunk(
    'Auth/PasswordResetPost',

      async (body_sent) =>
     {
         console.log("dddddddddddddddddddddddddddddjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj./post ")

         const response= await  FetchCallSFK(
             "/api/password_reset/",  "Post",
             body_sent,false,wrapper(["error"]),
             ["status"], ["email","error"],
         )
         console.log(response,"ddddddddddsssacksqqqqqqqqqqqqwwwwwwwwwwwwwww")
        return response

     }

);