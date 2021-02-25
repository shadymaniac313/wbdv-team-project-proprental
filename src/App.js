import WelcomeComponent from "./components/welcome.component";
import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./components/sign-in.component";

function App() {
    return (
        <BrowserRouter>
            <div className={"container-fluid"}>
                <Route path = "/SignIn" component = {SignIn}/>
                {/*<WelcomeComponent/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;