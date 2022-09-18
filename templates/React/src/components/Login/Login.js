import React, {Component, useState} from "react";
import {LoginThunk} from "../../features/UserAuth/Login";
import {useDispatch,useSelector} from "react-redux";
import {
    // selectLogin,
    selectStatus,
    selectError,
    SuccessSelector
} from "../../features/UserAuth/AuthSlicer";
import Formcss  from "./../CommonCss/form.module.css";


import UForm from "../../CommonFunctions/UniversalForm/Uform";
import InputCreator from "../../CommonFunctions/UniversalForm/custominput";
import {Link} from "react-router-dom";
import UpperHoc from "../../CommonFunctions/UpperCLouser/CustomHoc";


export default function Login(props)
{
    const [state,setState]=useState({
        email:"",
        password:""

    })
    const dispatch = useDispatch();
    // const Login_state = useSelector(selectLogin);
    // const status = useSelector(selectStatus);
    // const Error = useSelector(selectError);
    // Login_state,status,Error,
    // console.log(state)
        return (
            <>
            <h1>Helooow world</h1>
             {/*<UpperHoc redirect="/auth/profile/" Re={true} Status={selectStatus} Error={selectError} Success={SuccessSelector}>*/}
             {/*   <section className={Formcss["form-section"]} style={{"margin-top": "50px"}}>*/}
             {/*           <UForm Dispatch={LoginThunk} state={state}*/}
             {/*            heading="Sign in with your email"*/}
             {/*            p={<p className={Formcss["form-caption"]}>*/}
             {/*            Don't have an account? <a href="/auth/signup/"  ><Link to="/auth/signup/" >Sign up</Link></a>*/}
             {/*           </p>}*/}
             {/*            >*/}
             {/*            */}
             {/*           <InputCreator input={{ type:"email",*/}
             {/*                               state: state,*/}
             {/*                               setState: setState,*/}
             {/*                               labelText:"Email address",*/}
             {/*                           name:"email" }*/}
             {/*                               } />*/}
             {/*           <InputCreator input={{ type:"password",*/}
             {/*                               state: state,*/}
             {/*                               setState: setState,*/}
             {/*                               labelText:"Password",*/}
             {/*                               name:"password" }*/}
             {/*                               }/>*/}


             {/*           </UForm>                */}
             {/*       </section>*/}
            {/*</UpperHoc>                  */}
            </>
        );

}

{/* <UpperHoc redirect="/auth/profile/" Re={true} Status={selectStatus} Error={selectError} Success={SuccessSelector}>

<section className={Formcss["form-section"]} style={{"margin-top": "50px"}}>
        <h1 className={Formcss["form-heading"]}>Sign in with your email</h1>
        <p className={Formcss["form-caption"]}>
            Don't have an account? <a href="/auth/signup/"  ><Link to="/auth/signup/" >Sign up</Link></a>
        </p>
        <form onSubmit={ev=>ev.preventDefault()} >
            <div className={Formcss["input-div"]}>
                <label htmlFor="email">Email address</label>
                <input type="email" className="email" id="email" value={state.email}
                    onChange={ev=>{
                        setState({...state,email: ev.target.value})
                    }}
                />
            </div>
            <div className={Formcss["input-div"]}>
                <label htmlFor="password">Password</label>
                <input type="password" className="password" value={state.password}
                    onChange={ev=>{
                        setState({...state,password: ev.target.value})
                    }}
                    id="password"/>
            </div>
            <input type="submit" className={Formcss["submit-btn"]} value="Continue"
                onClick={ev=>{dispatch(LoginThunk(state)) }} />
            
        </form>
    </section>
</UpperHoc>  */}