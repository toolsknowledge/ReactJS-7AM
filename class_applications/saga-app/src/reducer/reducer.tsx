const initialState:any = {
    bal : 10000
};
const reducer:any = (state=initialState,action:any):any=>{
    switch(action.type){
        case "WITHDRAW_GST":
            return{
                ...state,
                bal : state.bal - action.value
            }
            break;
        default:
            return state;
    }
    return state;
};
export default reducer;