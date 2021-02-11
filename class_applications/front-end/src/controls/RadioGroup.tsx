import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, Radio, FormControlLabel } from "@material-ui/core";
import React from "react";
interface IProps{
    name:string;
    label:string;
    value:string;
    onChange:any;
    items:any[]
};                  //items:any[] = [{id:"male",title:"Male"},{id:"female",title:"FeMale"}]
interface IState{}
export default class RadioGroup extends React.Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
               <FormControl>
                   <FormLabel>{this.props.label}</FormLabel>
                   <MuiRadioGroup row name={this.props.name}
                                      value={this.props.value}
                                      onChange={this.props.onChange}>
                        {this.props.items.map((obj:any)=>(
                            <FormControlLabel key={obj.id} 
                                              value={obj.id} 
                                              control={<Radio />} 
                                              label={obj.title}></FormControlLabel>
                        ))}
                    </MuiRadioGroup>
               </FormControl>
            </React.Fragment>
        )
    };
};