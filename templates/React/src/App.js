import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from "./components/NavBar/NavBar";
// import {ThemeProvider } from '@mui/material/styles';
import Footer from "./components/Footer/Footer";
// import Login from "./components/Login/Login";
// import SignUp from "./components/SignUp/SignUp";
// import Settings from "./components/Settings/Settings";
// import Avatar from "./components/avatar/avatar";
// import Theme from "./theme";
import Component_dir from "./ComponentDir/Component_dir"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,

} from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {


    return (
        <>
        <h1>dddddddddddddddddddddddddddddddddddddddddddddddddd</h1>
            <Router>
                <Switch>
            
                     {/*<Route path="/"> */}
                         <NavBar />
                         <Component_dir />
                         {/*<Settings /> */}
                        {/*<Record />*/}
                         <Footer />
                     {/*</Route> */}
                </Switch>
            </Router>


        </>

    );
  }
}

