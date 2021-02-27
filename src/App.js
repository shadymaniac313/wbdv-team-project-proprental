import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./components/sign-in.component";
import SignUp from "./components/sign-up.component";
import Home from "./components/home.component";

function App() {
    return (
        <BrowserRouter>
            <div className={"container-fluid"}>
                <Route path = "/SignIn" component = {SignIn}/>
                <Route path = "/SignUp" component = {SignUp}/>
                <Route path = "/home" component = {Home}/>
            </div>
        </BrowserRouter>
    );
}

export default App;