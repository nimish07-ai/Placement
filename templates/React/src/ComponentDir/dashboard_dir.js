import React from "react";
import {
    Route,
    useRouteMatch
} from "react-router-dom";


export default function  Dashboard_dir(props)
{
    let match = useRouteMatch();

    return (
        <>

            <Route path={`${match.url}/college/`}>
                <h1>student_search</h1>
            </Route>

            <Route path={`${match.url}/department/`}>
                <h1>student_search</h1>
            </Route>

            <Route path={`${match.url}/student_search/`}>
                <h1>student_search</h1>                 
            </Route>             
            <Route path={`${match.url}/student_profile/:pkId`}>
                <h1>student_profile</h1>                 
            </Route>             
            <Route path={`${match.url}/company_search/`}>
                <h1>/company_search/</h1>                 
            </Route>             
            <Route path={`${match.url}/company_profile/:pkId/visitng_record/:vr`}>
                <h1>/company_profile/:pkId/visitng_record/:vr</h1>                 
            </Route>             
            <Route path={`${match.url}/student_search/`}>
                <h1>timeline</h1>                 
            </Route>             

            <Route path={`${match.url}/post_list/`}>
                <h1>post_list</h1>                 
            </Route>

            <Route path={`${match.url}/post_detail/:pkId/`}>
                <h1>post_detail:pkId/</h1>                 
            </Route>


        </>
    );

}