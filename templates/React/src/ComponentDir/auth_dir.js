import React from "react";
import {
    Route, useRouteMatch,

} from "react-router-dom";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

import {useSelector} from "react-redux";
import {
    selectLogin
} from "../features/UserAuth/AuthSlicer";
import Profile from "../components/profile/Profile"
import Password_Rest from "../components/passwordReset/PasswordReset"
import PasswordResentInit from "../components/EmailPasswordReset/EmailpasswordResetinit"
import EmailPasswordResent from "../components/EmailPasswordReset/EmailPasswordReset"
import Settings from "../components/Settings/Settings";
import Protected from "../CommonFunctions/Authentication/protected";


export default function  Auth_dir(props)
{
    const Login_state = useSelector(selectLogin);
    let match = useRouteMatch();
 
    return (
        <>
        <h1>Logindddddddddddddddddd</h1>
                <Route path={`${match.url}/login/`}>
                    <Login />
                </Route>
                <Route path={`${match.url}/signup/`}>
                    <SignUp />
                </Route>

                {/*<Route path={`${match.url}/profile/`}>*/}
                {/*    <Protected isLoggedIn={Login_state}>*/}
                {/*        <Profile />*/}
                {/*    </Protected>*/}
                {/*</Route>*/}

                <Route path={`${match.url}/emailverifysent/`}>
                    {/*<Protected isLoggedIn={Login_state}>*/}
                        <h1>emailverifysent</h1>
                    {/*</Protected>*/}
                </Route>
                <Route path={`${match.url}/emailverifyconform/`}>
                    {/*<Protected isLoggedIn={Login_state}>*/}
                    <h1>emailverifyconform</h1>
                    {/*</Protected>*/}
                </Route>


                <Route path={`${match.url}/ForgotPassword/`}>
                    <PasswordResentInit />
                </Route>
                <Route path={`${match.url}/ForgotPassword/`}>
                    <EmailPasswordResent />
                </Route>



                {/* settings*/}

                <Route  path={`${match.url}/settings/`}>
                    <Protected isLoggedIn={Login_state}>
                            <Settings />
                    </Protected>
                </Route>
                <Route path={`${match.url}/settings/password_reset/`}>
                    <Protected isLoggedIn={Login_state}>
                        <Password_Rest />
                    </Protected>
                </Route>
                <Route path={`${match.url}/settings/profileUpdate/`}>
                    <Protected isLoggedIn={Login_state}>
                        <h1>profileUpdate</h1>
                    </Protected>
                </Route>
                <Route path={`${match.url}/settings/profileImage_update/`}>
                    <Protected isLoggedIn={Login_state}>
                        <h1>profileImage_update</h1>
                    </Protected>
                </Route>
        </>
    );

}