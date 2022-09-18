import React from "react";
import {
    Route,

} from "react-router-dom";
import Auth_dir from "./auth_dir";
// import Landing from "../components/Landing/Landing";


export default function  Component_dir(props)
{   
    console.log("hekkkkkkkk")
    const Login_state = useSelector(selectLogin);

        return (
            <>                
          
                <Route path="/auth/">
                  <Auth_dir />
                </Route>  
                <Route path="/conform/">
                        <h1>done</h1>                 
                </Route>
                <Route path="/dashboard/">
                    <Protected isLoggedIn={Login_state}>
                        <Dashboard_dir />                     
                    </Protected>
                </Route>
                <Route path="/timeline/">
                    <Protected isLoggedIn={Login_state}>
                        <h1>timeline</h1>                 
                    </Protected>
                </Route>
            </>
        );

}

