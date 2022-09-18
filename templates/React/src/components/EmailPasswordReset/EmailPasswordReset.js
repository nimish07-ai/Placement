import React, { useState} from "react";
import {PasswordConfrom} from "../../features/UserAuth/PasswordReset/passwordConform";
import {TokenConfrom}from "../../features/UserAuth/PasswordReset/Tokenconform";
import {useDispatch,useSelector} from "react-redux";
import {
    selectStatus,
    selectError,
    SuccessSelector,
    IsTokenValid,
    tokenVerified
} from "../../features/UserAuth/AuthSlicer";
import Formcss  from "./../CommonCss/form.module.css";

import UForm from "../../CommonFunctions/UniversalForm/Uform"
import InputCreator from "../../CommonFunctions/UniversalForm/custominput"
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { CircularProgress, Snackbar} from "@material-ui/core";
import Backdrop from '@mui/material/Backdrop';
import {Link} from "react-router-dom";

export default function EmailPasswordResent(props)
{
    const [state,setState]=useState({
        password:"",
        token:window.location.search.substring(window.location.search.indexOf('=')+1,window.location.search.length)    
    })
    const tokenValid = useSelector(IsTokenValid);

    const tokenVerifiedselector = useSelector(tokenVerified);
    const status = useSelector(selectStatus);
    const Error = useSelector(selectError); 
    const SuccessSelectora = useSelector(SuccessSelector);

    const [tokenVerifiedSent,setTokenVerifiedsent]=useState(false)

        const [pstate,setSptate]=useState({
            1:"password",
            })

    const dispatch = useDispatch();

    if(tokenVerifiedSent === false )
    {
        setTokenVerifiedsent(true);
        dispatch(TokenConfrom({token:state.token}))
    }
    
    // console.log(SuccessSelectora,status,Error,tokenValid)
    console.log(state)
    // console.log(tokenVerifiedselector,tokenValid)

    if(tokenVerifiedselector === false)//token has been verified or not if not  verified  render bottom
    {
        console.log("ddddd")
     return <>
          <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                    >
                    <CircularProgress color="success" />
                    </Backdrop>
        </>
    }

    return (
            <>
            {/* <UpperHoc redirect="/auth/profile/" Re={true} Status={selectStatus} Error={selectError} Success={SuccessSelector}>*/}
            {/*    <section className={Formcss["form-section"]} style={{"margin-top": "50px"}}>*/}
            {/*         {tokenValid? */}
            {/*            <UForm Dispatch={PasswordConfrom} state={state}  */}
            {/*            heading="Forgot Password"*/}
            {/*            p={<><p className={Formcss["form-caption"]}>*/}
            {/*            Enter your email id to reset password</p></>}*/}
            {/*            > */}
            {/*           <InputCreator input={{type: pstate[2],*/}
            {/*                               name:"password",*/}
            {/*                               state: state,*/}
            {/*                               setState: setState,*/}
            {/*                               labelText:"New Password"*/}
            {/*                               ,withdiv:true,*/}
            {/*                               iconElement:*/}
            {/*                               <IconButton  aria-label="upload picture" component="span" onClick={()=> {onClick(2,setSptate,pstate)}}>*/}
            {/*                                        {pstate[1] ==="password" && <VisibilityOffOutlinedIcon />}*/}
            {/*                                       {pstate[1] ==="text" && <RemoveRedEyeOutlinedIcon />}*/}
            {/*                               </IconButton>*/}
            {/*                           }*/}
            {/*                               }/>*/}

            {/*           </UForm>                */}
            {/*         :   <UForm Dispatch={PasswordConfrom}   DontLoadContinue={true}  state={state}  */}
            {/*         heading="Forgot Password"*/}
            {/*         p={<>*/}
            {/*         <p className={Formcss["form-caption"]} style={{color: "red"}}>*/}
            {/*         email Token invalid : </p>*/}
            {/*         <p className={Formcss["form-caption"]}>*/}
            {/*         resend Email for  <a href="/auth/ForgotPassword/"  ><Link to="/auth/ForgotPassword/" >Forgot password</Link></a> </p>*/}
            {/*         <p className={Formcss["form-caption"]}>*/}
            {/*         click for  <a href="/auth/signup/"  ><Link to="/auth/signup/" >signup /</Link></a> <a href="/auth/login/"  ><Link to="/auth/login/" >login</Link></a>  </p>*/}
            {/*         </>*/}
            {/*         }*/}
            {/*        > */}

            {/*        </UForm>                */}
            {/*        */}
            {/*        }*/}
            {/*         */}
            {/*         */}
            {/*         */}
            {/*        </section>*/}
            {/*</UpperHoc>                  */}
            </>
        );

}
