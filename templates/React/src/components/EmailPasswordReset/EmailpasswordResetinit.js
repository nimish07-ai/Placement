import React, { useState} from "react";
import {PasswordResetPost} from "../../features/UserAuth/PasswordReset/PasswordResetPost";
import {useDispatch} from "react-redux";
import {
    selectStatus,
    selectError,
    SuccessSelector
} from "../../features/UserAuth/AuthSlicer";
import UForm from "../../CommonFunctions/UniversalForm/Uform"
import InputCreator from "../../CommonFunctions/UniversalForm/custominput"
import Formcss from "./../CommonCss/form.module.css"
import UpperHoc from "../../CommonFunctions/UpperCLouser/CustomHoc";


export default function PasswordResentInit(props)
{
    const [state,setState]=useState({
        email:"",
        })
    const dispatch = useDispatch();
        return (
            <>
            {/* <UpperHoc redirect="/conform/"  Re={true} Status={selectStatus} Error={selectError} Success={SuccessSelector}>*/}
            {/*    */}
            {/*    <section className={Formcss["form-section"]} style={{"margin-top": "50px"}}>*/}
            {/*            <UForm Dispatch={PasswordResetPost} state={state}  */}
            {/*             heading="Forgot Password "*/}
            {/*             p={<><p className={Formcss["form-caption"]}>*/}
            {/*             Enter your email id</p></>}*/}
            {/*            > */}
            {/*           <InputCreator input={{ type:"email",*/}
            {/*                                state: state,*/}
            {/*                                setState: setState,*/}
            {/*                                labelText:"Email address",*/}
            {/*                            name:"email" }*/}
            {/*                                } />*/}

            {/*            </UForm>                */}
            {/*        </section>*/}
            {/*</UpperHoc>                  */}
            </>
        );

}

