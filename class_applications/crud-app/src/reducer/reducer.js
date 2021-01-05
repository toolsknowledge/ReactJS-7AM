const reducer = (state={},action)=>{
    switch(action.type){
        case "EMPLOYEES":
            return{
                ...state,
                state:action.value
            }
        default:
            return state;
    }
};

export default reducer;