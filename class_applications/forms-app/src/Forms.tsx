import React from "react";
import Controls from "./controls/Controls";
import {useForm,Form} from "./controls/useForm";

const initialState = {
    fullName:""
};

export default function Forms(props:any):any{
    
    const validate:any = (fieldValues=values)=>{
        let temp = {...errors};
        if( "fullName" in fieldValues){
            temp.fullName = fieldValues.fullName?"":"Full Name Required"
        }
        setErrors({
            ...temp
        })
        // if (fieldValues == values)
        //     return Object.values(temp).every(x => x == "")
    };

    const {
        handleInputChange,
        resetForm,
        values,
        setValues,
        errors,
        setErrors
    } = useForm(initialState,true,validate);
    
    const submitFn = (e:any):any=>{
        e.preventDefault();
        console.log(values);
    };

    return(
        <React.Fragment>
            <Form onSubmit={submitFn}>
                <Controls.Input name="fullName"
                                value={values.fullName}
                                label="fullName"
                                onChange={handleInputChange}
                                error={errors.fullName}></Controls.Input>
                <input type="submit" value="Register"></input>
            </Form>
        </React.Fragment>
    )
};