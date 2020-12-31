//initial state
const initialState:any = {
    age:20
};

//create the reducer
const reducer:any = (state=initialState,action:any):any=>{
    switch(action.type){
        case "AGE_UP":
            return{
                ...state,
                age : state.age+action.value
            }
        case "AGE_DOWN":
            return{
                ...state,
                age : state.age-action.value
            }
        default:
            return state;
    };
};

//export the reducer
export default reducer;