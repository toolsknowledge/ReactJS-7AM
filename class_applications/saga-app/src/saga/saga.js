//saga, mainly used to manipulate the original actions.
//we will manipulate original actions by using "generator functions"
//generator functions will prefix with "*"
//each statement in generator functions starts with "yield" keyword.     //{type:"WITHDRAW",value:1000}

import { delay, put, takeLatest } from "redux-saga/effects";
export function *withdraw_gst(action){
    yield delay(5000);
    
    yield put({type:"WITHDRAW_GST",value:(action.value+(action.value*0.18))});
};

export function *withdraw(){
    yield  takeLatest("WITHDRAW", withdraw_gst );
};





