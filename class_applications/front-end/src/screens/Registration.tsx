import React from "react";
import UseForm from "../controls/UseForm";
import Form from "../controls/Form";
import { Grid, Paper } from "@material-ui/core";
import Controls from "../controls/Controls";
import { makeStyles } from "@material-ui/core";
import {useSelector,useDispatch} from "react-redux";
import * as actions from "../action/RegistrationAction";


const useStyles = makeStyles(theme=>({
    "root":{
        width:"70%",
        padding:theme.spacing(1),
        margin:"0 auto"
    }
}))

export default function Registration(props:any):any{

    const my_state:any= useSelector(state=>state);
    const dispatch:any = useDispatch();



    const items:any[] = [
        {id:"Male",title:"Male"},
        {id:"Female",title:"Female"}
    ];

    const options:any[] = [
        {id:"Engg",title:"Software Engineer"},
        {id:"Sr.Engg",title:"Senior Software Engineer"},
        {id:"Tester",title:"Tester"},
        {id:"Sr.Tester",title:"Senior Tester"},
        {id:"Manager",title:"Manager"}
    ];


    const classes = useStyles();

    const initialFormValues = {
        firstName:"",
        lastName:"",
        email:"",
        mobile:"",
        gender:"Male",
        departmentId:"",
        isPermanent: false,
        upwd:""

    };    
    const validate = (obj = values)=>{
        const temp = {...errors};
        if("firstName" in obj){
            temp.firstName = obj.firstName?"":"Can't Left First Name"
        }
        if("lastName" in obj){
            temp.lastName = obj.lastName?"":"Can't Left LastName"
        }
        if("email" in obj){
            temp.email = (/$^|.+@.+..+/).test(obj.email)?"":"Plaese provide valid email"
        }
        if("mobile" in obj){
            temp.mobile = (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(obj.mobile)?"":"Plaese provide valid mobile"
        }
        if("departmentId" in obj){
            temp.departmentId = obj.departmentId.length!=0?"":"can't left blank"
        }
        if("upwd" in obj){
            temp.firstName = obj.upwd?"":"Can't Left Password"
        }
        setErrors({
            ...temp
        });
    };

    const {
        values,
        setValues,
        errors,  
        setErrors,
        handleInputChange,
        resetForm      
    } = UseForm(initialFormValues,true,validate);

    const submitFn = (event:any)=>{
        event.preventDefault();
        dispatch(actions.register(values));
    };


    return(
        <React.Fragment>
            <Paper elevation={3} className={classes.root}>
                <Form>
                    <Grid container>
                        <Grid item xs={6}>
                            <Controls.Input name="firstName"
                                            value={values.firstName}
                                            label="First Name"
                                            onChange={handleInputChange}
                                            error={errors.firstName}/>
                             <Controls.Input name="email"
                                            value={values.email}
                                            label="Email"
                                            onChange={handleInputChange}
                                            error={errors.email}/>

                            <Controls.Input name="upwd"
                                            value={values.upwd}
                                            label="Password"
                                            onChange={handleInputChange}
                                            error={errors.upwd}/>
                            
                            <Controls.Select
                                name="departmentId"
                                label="Department"
                                value={values.departmentId}
                                onChange={handleInputChange}
                                options={options}
                                error={errors.departmentId}
                            />
                        </Grid>
                        <Grid item xs={6}>

                        <Controls.RadioGroup 
                                            name="gender"
                                            value={values.gender}
                                            onChange={handleInputChange}
                                            label="Gender"
                                            items={items}/>
                            
                        <Controls.Input name="lastName"
                                        value={values.lastName}
                                        label="Last Name"
                                        onChange={handleInputChange}
                                        error={errors.lastName}/>
                        <Controls.Input name="mobile"
                                        value={values.mobile}
                                        label="Mobile"
                                        onChange={handleInputChange}
                                        error={errors.mobile}/>
                        <Controls.Checkbox
                                name="isPermanent"
                                label="Permanent Employee"
                                value={values.isPermanent}
                                onChange={handleInputChange}
                        />
                        <div>
                            <Controls.Button type="submit"
                                            text="Register" 
                                            onClick={submitFn}
                                            ></Controls.Button>
                            <Controls.Button type="reset"
                                            text="Reset"
                                            onClick={resetForm}></Controls.Button>
                        </div>
                        
                        </Grid>
                    </Grid>
                </Form>
            </Paper>            
        </React.Fragment>
    )
};
