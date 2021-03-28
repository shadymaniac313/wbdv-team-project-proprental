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

function App() {

  return (
    <BrowserRouter>
      <div className={"container-fluid"}>
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/AdminSignIn" component={AdminSignIn} />
        <Route path="/admin/home" component={AdminHome} />
        <Route path="/admin/AddProperty" component={AddProperty} />
        <Route path="/admin/EditProperty" component={EditProperty} />
        <Route 
          path="/propertypage/:ListingId"
          exact={true}
          component={PropertyPage}
          />
        <Route
          path="/search/:city"
          exact={true}
          component={ProductVisibility}
        />
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path={"/profile"} component={ProfileComponent} />
      </div>
    </BrowserRouter>
  );

}

export default App;
