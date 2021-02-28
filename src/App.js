import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./components/sign-in.component";
import SignUp from "./components/sign-up.component";
import Home from "./components/home.component";
import AdminSignIn from "./components/admin/AdminSignIn";
import AddProperty from "./components/admin/AddProperty"
import AdminHome from "./components/admin/AdminHome"
import EditProperty from "./components/admin/EditProperty"

function App() {
    return (
        <BrowserRouter>
            <div className={"container-fluid"}>
                <Route path = "/SignIn" component = {SignIn}/>
                <Route path = "/SignUp" component = {SignUp}/>
                <Route path = "/AdminSignIn" component = {AdminSignIn}/>  
                <Route path = "/AdminHome" component = {AdminHome}/>  
                <Route path = "/admin/AddProperty" component = {AddProperty}/> 
                <Route path = "/admin/EditProperty" component = {EditProperty}/>  
                <Route path="/" exact={true}>
                      <Home/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;