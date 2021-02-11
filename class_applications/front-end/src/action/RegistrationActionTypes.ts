import registrationModal from "../model/registration";

export const REGISTRATION_LOADING:string = "REGISTRATION_LOADING";           
export const REGISTRATION_SUCCESS:string = "REGISTRATION_SUCCESS";            
export const REGISTRATION_FAIL:string = "REGISTRATION_FAIL";                  

interface RegistrationSync{
    loading:boolean;
    status:registrationModal;
    error:string;
};

interface RegistrationLoading extends RegistrationSync{
    type : typeof REGISTRATION_LOADING;
};

interface RegistrationSuccess extends RegistrationSync{
    type: typeof REGISTRATION_SUCCESS;
};

interface RegistrationFail extends RegistrationSync{
    type: typeof REGISTRATION_FAIL;
};

export type RegistrationActionTypes = RegistrationLoading |  RegistrationSuccess | RegistrationFail;


