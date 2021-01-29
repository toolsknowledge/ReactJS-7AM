import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router,NavLink, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

function App(){
    return(
      <Router>
        <div className="grid-container">
           
           <header className="row">
              <div>
                 <NavLink to="/" className="brand" exact strict>AshokIT</NavLink>
              </div>
              <div>
                 <NavLink to="/cart" exact strict>Cart</NavLink>
                 <NavLink to="/signin" exact strict>SignIn</NavLink>
              </div>
           </header>

           <main>
               <Route path="/" component={HomeScreen} exact strict></Route>
               <Route path="/product/:productID" component={ProductScreen} exact strict></Route>
           </main>

           <footer className="row center">
               copyright@ashokit.in
           </footer>

        </div>
      </Router>
    )
};

export default App;






















