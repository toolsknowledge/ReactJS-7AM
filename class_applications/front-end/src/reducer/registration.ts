import { RegistrationActionTypes, REGISTRATION_FAIL, REGISTRATION_LOADING, REGISTRATION_SUCCESS } from "../action/RegistrationActionTypes";
import registrationModal from "../model/registration";
interface initialStateI{
    loading:boolean;
    status:registrationModal;
    error:string;
};
const initialState:initialStateI = {
    loading:false,
    status:{registration:""},
    error:""
}
const registrationReducer = (state=initialState,action:RegistrationActionTypes):initialStateI=>{
    switch(action.type){
        case REGISTRATION_SUCCESS:
        case REGISTRATION_LOADING:
        case REGISTRATION_FAIL:
            return{
                ...state,
                loading:action.loading,
                status:action.status,
                error:action.error
            }
        default:
            return state;
    }
}

export default registrationReducer;
