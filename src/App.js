import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/sign-in.component";
import SignUp from "./components/sign-up.component";
import Home from "./components/home.component";
import AdminSignIn from "./components/admin/AdminSignIn";
import AddProperty from "./components/admin/AddProperty";
import AdminHome from "./components/admin/AdminHome";
import EditProperty from "./components/admin/EditProperty";
import ProductVisibility from "./components/product-visibility";
import ProfileComponent from "./components/profile/profile-component";
import PropertyPage from "./components/PropertyPage.component"
import PrivacyPolicy from "./components/PrivacyPolicy"
import LocalPropertyPage from "./components/LocalPropertyPage.component";

function App() {

  return (
    <BrowserRouter>
      <div className={"container-fluid"}>
        
        {/* User & Basic Routes here */}
        <Route path="/" component={Home} exact={true} />
        <Route path={"/profile"} component={ProfileComponent} />
        <Route path="/Login" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
         
        {/* Admin route begins here */}
        <Route path="/AdminSignIn" component={AdminSignIn} />
        <Route path="/admin/home" component={AdminHome} />
        <Route path="/admin/AddProperty" component={AddProperty} />
        <Route path="/admin/EditProperty" component={EditProperty} />

        {/* API and Website Functioning Routes here */}
        <Route 
          path="/propertypage/:ListingId"
          exact={true}
          component={PropertyPage}  />
        <Route
            path="/lpropertypage/:ListingId"
            exact={true}
            component={LocalPropertyPage}  />
        <Route
          path="/search/:city"
          exact={true}
          component={ProductVisibility} />
        
       
      </div>
    </BrowserRouter>
  );

}

export default App;
