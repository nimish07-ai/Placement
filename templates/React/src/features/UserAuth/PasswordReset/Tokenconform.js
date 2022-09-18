import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../../CommonFunctions/Fetch/FetchCall";
import wrapper from "../../../CommonFunctions/Fetch/failureFunction";


export const TokenConfrom = createAsyncThunk(
    'Auth/TokenConfrom',

      async (body_sent) =>
     {
        //  console.log("dddddddddddddddddddddddddddddjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj./post ")

         const response= await  FetchCallSFK(
             "/api/password_reset/validate_token/",  "Post",
             body_sent,false,false,
             ["status"], ["detail"],
         )
        //  console.log(response,"ddddddddddsssacksqqqqqqqqqqqqwwwwwwwwwwwwwww")
        return response

     }

);