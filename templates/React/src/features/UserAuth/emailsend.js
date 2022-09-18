import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../CommonFunctions/Fetch/FetchCall";


export const Emailsend = createAsyncThunk(
    'Auth/emailsend',

      async (body_sent) =>
     {
     

         const response= await  FetchCallSFK(
             "/api/User/CUser/email_verify/",  "Get",
             body_sent,false,false,
             ["success","isAuthenticated"], ["detail","error"],
         )

        return response

     }

);