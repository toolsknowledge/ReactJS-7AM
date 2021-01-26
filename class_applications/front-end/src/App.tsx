/*

  import React from 'react';

  import './App.css';
  import HomeScreen from './screens/HomeScreen';
  import ProductScreen from './screens/ProductScreen';

  function App() {
    return (
      // <div className="class_one">
      //    <HomeScreen></HomeScreen>
      // </div>

      <div className="grid-container">
          <header className="row">
              <div>
                <a href="#" className="brand">AshokIT</a>
              </div>

              <div>
                  <a href="#">Cart</a>
                  <a href="#">SingIn</a>
              </div>
          </header>

          <main>
              <HomeScreen></HomeScreen>
          </main>

          <footer className="row center">
                All Rights Are Reserved
          </footer>
      </div>
      
    );
  }

  export default App;
*/

import React from "react";
import HomeScreen from "./screens/HomeScreen";

function App(){
    return(
        <div className="grid-container">
           
           <header className="row">
              <div>
                 <a href="#" className="brand">AshokIT</a>
              </div>
              <div>
                 <a href="#">Cart</a>
                 <a href="#">SignIn</a>
              </div>
           </header>

           <main>
              <HomeScreen></HomeScreen>
           </main>

           <footer className="row center">
               copyright@ashokit.in
           </footer>

        </div>
    )
};

export default App;






















