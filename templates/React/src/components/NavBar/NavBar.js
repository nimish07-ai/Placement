import React,{ useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import {Check_Auth} from "./../../features/UserAuth/AuthCheck";

export default function NavBar()  {
    // const [check, setCheck] = useState(false);
    // if (check === false) {
        //     setCheck(true);
            
            
        // }        
    // const dispatch = useDispatch();
    // dispatch(Check_Auth(false))
   
        return (
            <>
               <Header />
                <Nav />
            </>

        );
    
}

