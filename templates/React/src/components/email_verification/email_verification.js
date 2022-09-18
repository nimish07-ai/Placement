import React, {Component, useState} from "react";
import LoginCss from "./Login.module.css";
import {LoginThunk} from "../../features/UserAuth/Login";
import {useDispatch,useSelector} from "react-redux";
import {
    selectLogin,
    selectStatus,
    selectError,
} from "../../features/UserAuth/AuthSlicer"
import {FetchCallSFK} from "../../CommonFunctions/FetchCall";



export default function Email_verification(props)
{
    const state=useState({
        email:"",
        password:""

    })
    const dispatch = useDispatch();
    const Login_state = useSelector(selectLogin);
    const status = useSelector(selectStatus);
    const Error = useSelector(selectError);
    console.log(Login_state,status,Error,state[0])
        return (
            <>

            <button onClick={ev=>{dispatch(LoginThunk(state[0]))}}>
            email_verification
            </button>
            </>
        );

}

