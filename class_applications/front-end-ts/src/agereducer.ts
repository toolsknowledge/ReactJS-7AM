import { AgeState } from "./agestate";

const initialState:AgeState={
    age:0
}
export const ageReducer = (state=initialState,action:any):AgeState=>{
    switch(action.type){
        case "AGE_UP":
            return{
                ...state,
                age:state.age+1
            }
        default:
            return state;
    }
};