import React from "react";
import {useDispatch} from "react-redux";
import Formcss  from "./../../components/CommonCss/form.module.css";

export default function UForm(props)
{
    
    const dispatch = useDispatch();
    // console.log(props)
    const propsDispatchthink=(props)=>{
        dispatch(props.Dispatch(props.state))
        console.log("dispatch")
    }

    if (props.Dispatch === undefined && props.onSuccess === undefined)
    {
        return <div>
            set atleast Dispatch or onSuccess
        </div>
    }
    if (props.Dispatch !== undefined && props.onSuccess !== undefined)
    {
        return <div>
            only one of both  Dispatch or onSuccess should be defined
        </div>
    }

    return (
            <>
            
                        <h1 className={Formcss["form-heading"]}>{props.heading}</h1>
                        {props.p}
                        <form onSubmit={ev=>ev.preventDefault()} >
                            {props.children}


                            {props.DontLoadContinue === undefined &&                        
                            <input type="submit" className={Formcss["submit-btn"]} value="Continue"
                                onClick={ev=>{
                                    if(props.Dispatch !== undefined)
                                    {
                                        console.log("ddddddddd")
                                        propsDispatchthink(props)  
                                    }else
                                    {
                                        props.Success(props) 
                                    }
                                }} />
                                }
                        </form> 
            </>
        );

}