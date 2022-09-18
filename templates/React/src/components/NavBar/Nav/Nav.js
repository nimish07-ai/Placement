import React, { Component } from "react";
import Navcss from "./NAv.module.css";
import home from "./../../../assets/images/home.svg"
import recent from "./../../../assets/images/recent.svg"
import report from "./../../../assets/images/report.svg"
import profile from "./../../../assets/images/profile.svg"
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={};
        // console.log("hellos")
        this.list=['/auth/login/',
        "/record/new/",
        '/auth/signup/',
       "/auth/ForgotPassword/",
        "/auth/ForgotPasswordReset/"]
    }


    render() {
        if(this.list.includes(window.location.pathname))
        {
            // console.log("hellosssss")
            return <>

            </>
        }

        return (
            <>
                <nav>
                    <ul>
                        <li><span><a href="/"><Link to="/" ><img src={home} alt="home" /></Link></a>
                        </span></li>
                        <li><a href="/record/list/"><Link to="/record/list/" ><img src={recent} alt="recent" /></Link></a></li>
                        <li><a href="/record/new/"><Link to="/record/new/" ><img src={report} alt="report" /></Link></a></li>
                        <li><a href="/auth/profile/"><Link to="/auth/profile/" ><img src={profile} alt="profile"/></Link></a></li>
                    </ul>
                </nav>


            </>

        );
    }
}

