import React from "react";
import {useSelector,useDispatch} from "react-redux";
export default function App():any{
      const my_state:any = useSelector(state => state);
      const dispatch:any = useDispatch();
      
      const fun_one:any = ()=>{
          dispatch({
            type:"WITHDRAW",
            value:1000
          });
      };

      const fun_two:any = ()=>{
          dispatch({
              type:"DEPOSIT",
              value:10000
          });
      };
      
      return(
         <React.Fragment>
              <h1>{JSON.stringify(my_state)}</h1>
              <button onClick={fun_one}>Withdraw</button>
              <button onClick={fun_two}>Deposit</button>
         </React.Fragment>
      )
};