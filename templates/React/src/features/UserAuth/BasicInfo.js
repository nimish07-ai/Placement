import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../CommonFunctions/Fetch/FetchCall";


export const Basic_info = createAsyncThunk(
    'Auth/Basic_info',

      async (body_sent) =>
     {
     

         const response= await  FetchCallSFK(
             "/api/User/User/BasicInfoOfAuthenticatedUser/",  "Get",
             body_sent,false,false,
             ["success","isAuthenticated"], ["detail","error"],
         )
        return response

     }

);