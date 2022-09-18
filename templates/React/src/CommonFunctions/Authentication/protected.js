import React from "react";
import {useSelector} from "react-redux";
import {
     selectLogin,
    
} from "./../../features/UserAuth/AuthSlicer";
const Protected = ({ isLoggedIn, children }) => {
const Login_state = useSelector(selectLogin);
// console.log(Login_state)
 if (!Login_state.Login && Login_state.LoginStateChecked ) {
    window.location.pathname="/auth/login/";
 }
 if(Login_state.LoginStateChecked === false) {
    return  ""
}
 else
    {
        return children;
    }
};
export default Protected;