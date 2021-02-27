import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./components/sign-in.component";
import SignUp from "./components/sign-up.component";
import ProfileComponent from "./components/profile/profile-data";

function App() {
    return (
        <BrowserRouter>
            <div className={"container-fluid"}>
                <Route path = "/SignIn" component = {SignIn}/>
                <Route path = "/SignUp" component = {SignUp}/>
                <Route path={"/profile"} component={ProfileComponent}/>
            </div>
        </BrowserRouter>
    );
}

export default App;