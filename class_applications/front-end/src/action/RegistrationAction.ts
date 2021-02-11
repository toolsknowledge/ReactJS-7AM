import axios from "axios";
import { Dispatch } from "redux";
import { RegistrationActionTypes, REGISTRATION_LOADING, REGISTRATION_SUCCESS, REGISTRATION_FAIL } from "./RegistrationActionTypes";

export const register = (formData:any)=>{

    console.log(formData);

    return async (dispatch:Dispatch<RegistrationActionTypes>)=>{

        dispatch({type:REGISTRATION_LOADING,
                  loading:false,
                  status:{registration:""},
                  error:""});
        try{
            const res = await axios.post(`http://localhost:8080/registration`,formData);
            const {data} = res;
            dispatch({
                type:REGISTRATION_SUCCESS,
                status:data,
                loading:true,
                error:""
            })
        }catch(err){
            dispatch({
                type:REGISTRATION_FAIL,
                status:{registration:""},
                error:err.message,
                loading:false
            })
        }


    };
};