const initialState = {
    bal : 5000
};

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                bal : state.bal- action.value
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


