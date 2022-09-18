import {createAsyncThunk} from "@reduxjs/toolkit";
import FetchCall, {FetchCallSFK} from "../../CommonFunctions/Fetch/FetchCall";


export const Change_password = createAsyncThunk(
    'Auth/change_password',

      async (body_sent) =>
     {

        const a =(res)=>{
            
            if (Reflect.has(res,"error"))
            {
                return {response:res,type:false}
            }
            // console.log(res)
            let output=""
            Object.entries(res).forEach(ev=>{output += `${ev[0]} - ${ev[1].join("")}  \n`})
            // console.log(output)

            return {response:{error:output},type:false}
        
        }

         const response= await  FetchCallSFK(
             "/api/User/CUser/change_password/",  "Post",
             body_sent,false,a,
             ["success","isAuthenticated"], ["error","detail","new_password","old_password"],
         )
         console.log(response)
        return response

     }

);