import React, {Component, useState} from "react";
import {Change_password} from "../../features/UserAuth/ChangePassword";
import {useDispatch,useSelector} from "react-redux";
import {
    // selectLogin,
    selectStatus,
    selectError,
    SuccessSelector
} from "../../features/UserAuth/AuthSlicer";
import Formcss  from "./../CommonCss/form.module.css";
import UForm from "../../CommonFunctions/UniversalForm/Uform"
import InputCreator from "../../CommonFunctions/UniversalForm/custominput"
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import UpperHoc from "../../CommonFunctions/UpperCLouser/CustomHoc";

export default function Password_Rest(props)
{
    const [state,setState]=useState({
        new_password:"",
        Renew_password:"",
        old_password:""
        })
    const [pstate,setSptate]=useState({
        1:"password",
        2:"password",
        3:"password"
        })
    const onClick=(number,setState,state) =>{
        let z={...pstate}

        if (pstate[number] === "password"){
            z[number]="text"
    }
    else{
        z[number]="password"
    }
    setSptate(z)

    }
    function checkPandRep(state)
    {

        if (state.new_password === Renew_password )
        {
            return true
        }
        else
        {
            return false
        }
    }
    
    const dispatch = useDispatch();
        return (
            <>
            {/* <UpperHoc redirect="/auth/profile/" hard={true} Re={true} Status={selectStatus} Error={selectError} Success={SuccessSelector}>*/}
            {/*    <section className={Formcss["form-section"]} style={{"margin-top": "50px"}}>*/}
            {/*            <UForm Dispatch={Change_password} state={state}  CondtionCheckBeforDispatch={checkPandRep}*/}
            {/*             heading="Password Reset"*/}
            {/*             p={<></>}*/}
            {/*             >*/}
            {/*             */}
            {/*            <InputCreator input={{type: pstate[1], */}
            {/*                                name:"old_password",*/}
            {/*                                state: state,*/}
            {/*                                setState: setState,*/}
            {/*                                labelText:"Current Password",*/}
            {/*                                withdiv:true,*/}
            {/*                                iconElement:*/}
            {/*                                <IconButton  aria-label="upload picture" component="span" onClick={()=> {*/}
            {/*                                    console.log("hh")*/}
            {/*                                    onClick(1,setSptate,pstate)}}>*/}
            {/*                                        {pstate[1] ==="password" && <VisibilityOffOutlinedIcon />}*/}
            {/*                                        {pstate[1] ==="text" && <RemoveRedEyeOutlinedIcon />}*/}
            {/*                                </IconButton>*/}
            {/*                                 }*/}
            {/*                                } />*/}
            {/*            <InputCreator input={{type: pstate[2],*/}
            {/*                                name:"new_password",*/}
            {/*                                state: state,*/}
            {/*                                setState: setState,*/}
            {/*                                labelText:"New Password"*/}
            {/*                                ,withdiv:true,*/}
            {/*                                iconElement:*/}
            {/*                                <IconButton  aria-label="upload picture" component="span" onClick={()=> {onClick(2,setSptate,pstate)}}>*/}
            {/*                                         {pstate[2] ==="password" && <VisibilityOffOutlinedIcon />}*/}
            {/*                                        {pstate[2] ==="text" && <RemoveRedEyeOutlinedIcon />}*/}
            {/*                                </IconButton>*/}
            {/*                            }*/}
            {/*                                */}
            {/*                                }/>*/}
            {/*            <InputCreator input={{type: pstate[3],*/}
            {/*                                name:"Renew_password",*/}
            {/*                                state: state,*/}
            {/*                                setState: setState,*/}
            {/*                                labelText:"Retype New Password",*/}
            {/*                                withdiv:true,*/}
            {/*                                iconElement:*/}
            {/*                                <IconButton  aria-label="upload picture" component="span" onClick={()=> {onClick(3,setSptate,pstate)}}>*/}
            {/*                                         {pstate[3] ==="password" && <VisibilityOffOutlinedIcon />}*/}
            {/*                                        {pstate[3] ==="text" && <RemoveRedEyeOutlinedIcon />}*/}
            {/*                                </IconButton>*/}
            {/*                                }*/}
            {/*                                }/>*/}

            {/*            </UForm>                */}
            {/*        </section>*/}
            {/*</UpperHoc>                  */}
            </>
        );

}

