import React from "react";
import { UserForm, Form } from "../controls/UserForm";
import  Controls  from "../controls/Controls";
import { Grid } from "@material-ui/core";


const initialValues = {
    firstName:""
};

export default function Registration(){
    
    const validate:any = (fieldValues=values)=>{
        const temp = {...errors};
        if("firstName" in fieldValues){
            temp.firstName = fieldValues.firstName?"":"first name is required"
        }
        setErrors({
            ...temp
        })
    };
    
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleChanges,
        resetForm
    } = UserForm(initialValues,true,validate);


    return(
        <React.Fragment>
            <Form>
                <Grid>
                    <Grid item xs={6}>
                        <Controls.Input name="firstName"
                                        label="First Name"
                                        value={values.firstName}
                                        onChange={handleChanges}
                                        error={errors.firstName}/>
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </Form>
        </React.Fragment>      
    )

};