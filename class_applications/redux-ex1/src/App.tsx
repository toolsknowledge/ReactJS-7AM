import React from "react";
import {useSelector,useDispatch} from "react-redux";
export default function App():any{
      const my_state:any= useSelector(state=>state);
      const dispatch:any = useDispatch();
      
      const onAgeUp = ()=>{
          dispatch({
            type:"AGE_UP",
            value:1
          })
      };

      const onAgeDown = ()=>{
        dispatch({
          type:"AGE_DOWN",
          value:1
        })
      };
      
      return(
        <React.Fragment>
            <h1>{my_state.age}</h1>
            <button onClick={onAgeUp}>AGE_UP</button>
            <button onClick={onAgeDown}>AGE_DOWN</button>
        </React.Fragment>
      )
};