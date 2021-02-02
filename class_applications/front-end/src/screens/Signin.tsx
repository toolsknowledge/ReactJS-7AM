import { Button, TextField } from "@material-ui/core";
import React from "react";

interface IState{
    "uname":string;
    "upwd":string;
};

interface IProps{}

class Signin extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            "uname":"",
            "upwd":""
        };
    };

    handleChange = (event:any)=>{
        const {name,value} = event.target;
        switch(name){
            case "uname":
                this.setState({
                    "uname":value
                })
                break;
            case "upwd":
                this.setState({
                    "upwd":value
                })
                break;
        }
    };

    login = ()=>{
        if(this.state.uname === "admin" && this.state.upwd === "admin"){
            alert("Login Success");
        }else{
            alert("Login Fail");
        }
    };

    render(){
        return(
            <React.Fragment>
                 <TextField label="User Name" variant="outlined" name="uname" value={this.state.uname} onChange={this.handleChange}></TextField>
                 <br></br><br></br>
                 <TextField label="Password" variant="outlined" name="upwd" value={this.state.upwd} onChange={this.handleChange}></TextField>
                 <br></br><br></br>
                 <Button variant="contained" color="primary" onClick={this.login} style={{width:200}}>Login</Button>
            </React.Fragment>
        )
    };
};

export default Signin;


