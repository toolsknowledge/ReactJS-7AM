//import createStore function
const {createStore} = require("redux");

//initial state
const initialState = {
    bal : 5000
};

//reducer
const reducer = (state=initialState,action)=>{        
    switch(action.type){
        case "WITHDRAW":
            return{
                ...state,
                bal : state.bal-action.value   
            }
        case "DEPOSIT":
            return{
                ...state,
                bal : state.bal+action.value
            }
        default:
            return state;
    }
};


//create the store
const store = createStore(reducer);


//subscribe
store.subscribe(()=>{
    console.log( store.getState() );
});


//dispatch   (ReactJS(react-redux),Angular(NgRx),VueJS)
store.dispatch({type:"WITHDRAW",value:1000});
store.dispatch({type:"WITHDRAW",value:2000});
store.dispatch({type:"DEPOSIT",value:10000});
store.dispatch({type:"WITHDRAW",value:1000});
store.dispatch({type:"DEPOSIT",value:5000});