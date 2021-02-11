import React,{useState} from "react";
//receives
//formInitialValues   (json object)
//flag (boolean)
//validate   (user defined function)
export default function UseForm(formInitaialValues:any,
                                flag:boolean,
                                validate:any):any{
    //save the formInitialValues
    const [values,setValues] = useState(formInitaialValues);

    //define the errors
    const [errors,setErrors] = useState({});


    //handle the changes in Input
    const handleInputChange = (event:any)=>{
        const {name,value} = event.target;
        setValues({
            ...values,
            [name]:value
        });
        if(flag){
            validate({[name]:value})
        }
    };


    //handle the resetForm
    const resetForm = ()=>{
        setValues(formInitaialValues);
        setErrors({})
    };

    return{
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    }
};