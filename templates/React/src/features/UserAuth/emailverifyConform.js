import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../CommonFunctions/Fetch/FetchCall";


export const emailverifyConform = createAsyncThunk(
    'Auth/emailverifyConform',

      async (body_sent) =>
     {
     

         const response= await  FetchCallSFK(
             "/api/User/CUser/email_verify_conform/",  "Get",
             body_sent,false,false,
             ["success","isAuthenticated"], ["detail","error"],
         )
         
        return response

     }

);