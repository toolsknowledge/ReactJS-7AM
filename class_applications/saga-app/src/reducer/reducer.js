const initialState = {
    bal : 5000
};

const reducer = (state=initialState,action)=>{

    switch(action.type){
        case "WITHDRAW_GST":
            return{
                ...state,
                bal : state.bal - action.value
            }
        // case "DEPOSIT_STAX":
        //     return {
        //         ...state,
        //         bal : state.bal + action.value
        //     }
        default:
            return state;
    }

};

export default reducer;