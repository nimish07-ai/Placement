import React, {Component, useState} from "react";
// import LoginCss from "./Login.module.css";
import {Check_Auth} from "../../features/UserAuth/AuthCheck";
import {Basic_info} from "../../features/UserAuth/BasicInfo";
import {useDispatch,useSelector} from "react-redux";
import {
    selectLogin,
    selectStatus,
    selectError,
} from "../../features/UserAuth/AuthSlicer"


export default function Avatar(props)
{
    const state=useState({
    })
    const dispatch = useDispatch();
    // console.log(status)
        return (
            <>

            <button onClick={ev=>{dispatch(Basic_info(false))}}>
                hello from haray rasssss====
            </button>
            </>
        );

}

