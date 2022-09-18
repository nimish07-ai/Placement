import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {LoginThunk} from "./Login";
import {Signup} from "./Signup";
import {Logout} from "./Logout";
import {Check_Auth} from "./AuthCheck";
import {Basic_info} from "./BasicInfo";
import {Change_password} from "./ChangePassword";
import {Emailsend} from "./emailsend";
import {emailverifyConform} from "./EmailVerifyConform";
import {TokenConfrom} from "./PasswordReset/Tokenconform";
import {PasswordConfrom} from "./PasswordReset/passwordConform";
import {PasswordResetPost } from "./PasswordReset/PasswordResetPost"
// import { fetchCount } from './counterAPI';

const initialState = {
    Login:false,
    Signup:false,
    error_msg:"",
    error:false,
    status:"idle",
    First_name:"",
    Last_name:"",
    email:"",
    phone:"",
    is_suspended:"",
    Success:false,
    SuccessMsg:"Succesfully Done",
    LoginStateChecked:false,
    isTokenValid:false,
    tokenVerified:false
    // auth_check:false
};



export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    extraReducers: (builder) => {
        builder
        //login
            .addCase(LoginThunk.pending, (state) => {
                {
                    state.status = 'loading';
                    state.error=false
                    state.Success=false
                }
            })
            .addCase(LoginThunk.fulfilled, (state, action) => {
                // console.log(action,action.payload.type)
                if (action.payload.type === true)
                {
                    // console.log("true")
                    state.Login= true
                    state.error=false
                    state.status="idle"
                    state.Success=true
                    state.SuccessMsg="User LoggedIn succesfully"
                }else
                    {
                        // console.log("not true")
                        state.status="idle"
                        state.Login= false
                        state.error=true
                        state.error_msg=action.payload.response["error"]
                }

            })
             .addCase(Check_Auth.pending, (state) => {
            {
                state.status = 'loading';
                state.LoginStateChecked=false;
                state.error=false
                state.Success=false
            }
        })
        .addCase(Check_Auth.fulfilled, (state, action) => {
            // console.log(action,action.payload.type)
            // state.auth_check=true
            state.LoginStateChecked=true;
            if (action.payload.type === true)
            {
                // console.log("true")
                state.Login= true
                state.error=false
                state.status="idle"
                
            }else
                {
                    // console.log("not true")
                    state.Login= false
                    state.status="idle"
                    // state.error=true
                    // state.error_msg=action.payload.response["error"]
            }

        })  
        .addCase(Basic_info.pending, (state) => {
            {
                state.status = 'loading';
                state.error=false
                state.Success=false
            }
        })
        .addCase(Basic_info.fulfilled, (state, action) => {
            console.log(action,action.payload.type,action.payload)
            // state.auth_check=true
            if (action.payload.type === true)
            {
                // console.log("true")
                state.Login= true
                state.error=false
                state.status="idle"
                state.First_name=action.payload.response.data.First_name
                state.Last_name=action.payload.response.data.Last_name
                state.is_suspended=action.payload.response.data.is_suspended
                state.phone_number=action.payload.response.data.phone_number
                state.image=action.payload.response.data.image
                state.email=action.payload.response.data.email
                state.id=action.payload.response.data.id
                
            }else
                {
                    // console.log("not true")
                    // state.Login= false
                    state.error=true
                    state.status="idle"
                    state.error_msg=action.payload.response["error"]
            }

        })  

            //signup
            .addCase(Signup.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(Signup.fulfilled, (state, action) => {
                // console.log(action,"dddddddxxdddd")
                if (action.payload.type === true)
                {
                    state.Login= true
                    state.error=false
                    state.Signup=true
                    state.status="idle"
                    state.Success=true
                    state.SuccessMsg="User Signup succesfully"
                }else
                {
                    // console.log("not true")
                    state.Login= false
                    state.status="idle"
                    state.error=true
                    state.Signup=false
                    state.error_msg=action.payload.response["error"]
                }

            })
            //logout
            .addCase(Logout.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(Logout.fulfilled, (state, action) => {
                if (action.payload.type === true)
                {
                    state.Login= false
                    state.error=false
                    state.status="idle"
                    state.Success=true
                    state.SuccessMsg="User Loggedout succesfully"
                }else
                {
                    // console.log("not true")
                    state.Login= true
                    state.error=true
                    state.status="idle"
                    state.error_msg=action.payload.response["error"]
                }

            })
            //logout
            .addCase(Change_password.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(Change_password.fulfilled, (state, action) => {
                if (action.payload.type === true)
                {

                    state.error=false
                    state.status="idle"
                    state.Success=true
                    state.SuccessMsg="User Password Updated succesfully"
                }else
                {

                    state.Login= true
                    state.error=true
                    state.status="idle"
                    state.error_msg=action.payload.response["error"]
                }

            })
            .addCase(Emailsend.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(Emailsend.fulfilled, (state, action) => {
                if (action.payload.type === true)
                {
                    state.error=false
                    state.status="idle"
                    state.Success=true
                    state.SuccessMsg=`Verfication mail successfully sent on email  ${state.email}`
                }else
                {

                    state.Login= true
                    state.error=true
                    state.status="idle"
                    state.error_msg=action.payload.response["error"]
                }
            })
            
            .addCase(emailverifyConform.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(emailverifyConform.fulfilled, (state, action) => {
                if (action.payload.type === true)
                {
                    state.error=false
                    state.status="idle"
                    state.Success=true
                    state.SuccessMsg=`Email ${state.email} Successfully verified `
                }else
                {
                    state.Login= true
                    state.error=true
                    state.status="idle"
                    state.error_msg=action.payload.response["error"]
                }
            })
            .addCase(TokenConfrom.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(TokenConfrom.fulfilled, (state, action) => {
                state.tokenVerified=true;
                if (action.payload.type === true)
                {
                     state.isTokenValid=true
                     state.status="idle"
                }else
                {
                    state.status="idle"
                    state.isTokenValid=false
                    state.error=true
                    state.error_msg="email token expired"
                }
            })
            .addCase(PasswordResetPost.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(PasswordResetPost.fulfilled, (state, action) => {
                if (action.payload.type === true)
                {
                    state.status="idle"
                    state.Success=true
                    state.SuccessMsg=`Password Reset mail has been sent on ur email`
                }else
                {
                    state.error=true
                    state.status="idle"
                    state.error_msg=action.payload.response["error"]
                }
            })
            
            .addCase(PasswordConfrom.pending, (state) => {
                state.status = 'loading';
                state.error=false
                state.Success=false
            })
            .addCase(PasswordConfrom.fulfilled, (state, action) => {
                if (action.payload.type === true)
                {
                    state.status="idle"
                    state.Success=true
                    state.SuccessMsg=`Password Reset Successfully`
                }else
                {
                    state.error=true
                    state.status="idle"
                    state.error_msg=action.payload.response["error"]
                }
            })
        ;

    },
});

export const selectLogin = (state) =>{
    return{Login:state.Auth.Login, LoginStateChecked:state.Auth.LoginStateChecked}
};
export const selectStatus = (state) => state.Auth.status;
export const selectError = (state) => {
    return {error: state.Auth.error, error_msg: state.Auth.error_msg}
};
export const SuccessSelector = (state) => {

    return {Success: state.Auth.Success, Success_msg: state.Auth.SuccessMsg}
};

export const IsTokenValid=(state) => state.Auth.isTokenValid;
export const tokenVerified=(state) => state.Auth.tokenVerified;
export const BasicDetailsU = (state) => {

    return{
        id:state.Auth.id,
        email: state.Auth.email,
        First_name:state.Auth.First_name,
        Last_name:state.Auth.Last_name,
        country:state.Auth.country,
        gender:state.Auth.gender,
        image:state.Auth.image,
        phone_number:state.Auth.phone_number

    }

};

export default AuthSlice.reducer;
