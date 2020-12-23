import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function App() {

  const obj:any = useSelector(state=>state);
  const dispatch:any = useDispatch();

  const myFun = (event:any)=>{
    dispatch({type:"WITHDRAW",value:5000});
  };


  return (
    <div>
        <h1>{obj.bal}</h1>
        <br></br><br></br>
        <button onClick={myFun}>WithDraw</button>
    </div>
  );
}
export default App;