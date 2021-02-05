import { Grid } from "@material-ui/core";
import React from "react";
import Controls from "../components/controls/Controls";
interface IState{}
interface IProps{}

class Registration extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };

    submitFn = (event:any)=>{
        console.log("Hello");
    };

    render(){
        return(
            <form onSubmit={this.submitFn}>
                <Grid container>
                    <Grid item xs={6}>
                        <Controls.Input name="first name"
                                        label="First Name"
                                        value="" />
                        <br></br>
                        <Controls.Input name="last name"
                                    label="Last Name"
                                    value="" />
                        <br></br>
                        <Controls.Input name="email"
                                    label="Email"
                                    value="" />
                        <br></br>
                        <Controls.Input name="mobile"
                                    label="Mobile"
                                    value="" />
                    </Grid>

                    <Grid item xs={6}>
                        <Controls.RadioEx name="Gender"
                                          label="Gender"
                                          value="male"
                                          items={[{id:"male", title:"Male"},
                                                  {id:"female", title:"Female"}]}></Controls.RadioEx>
                    </Grid>
                </Grid>
            </form>
        );
    };
};

export default Registration;