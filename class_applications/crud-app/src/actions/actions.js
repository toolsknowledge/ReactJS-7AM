import axios from "axios";
import {call,put} from "redux-saga/effects";

function fun_one(){
    return axios.get("http://localhost:8080/fetch");
};

export function *fun_two(){
    const res = yield call(fun_one);
    yield put({type:"EMPLOYEES",value:res});
};