import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router,NavLink, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import Signin from "./screens/Signin";

function App(){
    return(
      <Router>
        <div className="grid-container">
           
           <header className="row">
              <div>
                 <NavLink to="/" className="brand" exact={true} strict>AshokIT</NavLink>
              </div>
              <div>
                 <NavLink to="/cart" exact={true} strict>Cart</NavLink>
                 <NavLink to="/signin" exact={true} strict>SignIn</NavLink>
              </div>
           </header>

           <main>
               <Route path="/" component={HomeScreen} exact={true} strict></Route>
               <Route path="/product/:productID" component={ProductScreen} exact={true} strict></Route>
               <Route path="/signin" component={Signin} exact={true} strict></Route>
           </main>

           <footer className="row center">
               copyright@ashokit.in
           </footer>

        </div>
      </Router>
    )
};

export default App;






















