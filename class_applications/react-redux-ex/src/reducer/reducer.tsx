const initialState:any = {
    bal : 5000
};

const reducer:any = (state=initialState,action:any):any=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                bal : state.bal - action.value
            }
        case "DEPOSIT":
            return{
                ...state,
                bal : state.bal + action.value
            }
        default:
            return state; 
    }
};

export default reducer;