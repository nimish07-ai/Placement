import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../CommonFunctions/Fetch/FetchCall";


export const Check_Auth = createAsyncThunk(
    'Auth/Check_Auth',

      async (body_sent) =>
     {
        //  console.log("dddddddddddddddddddddddddddddjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")

         const response= await  FetchCallSFK(
             "/api/auth/User/User/Check_Auth/",  "Get",
             body_sent,false,false,
             ["success","isAuthenticated"], ["error","detail"],
         )
        //  console.log(response)
        return response

     }

);