import { FormControl, FormLabel,RadioGroup,FormControlLabel,Radio } from "@material-ui/core";
import React from "react";

interface IProps{
    name:string;
    label:string;
    value:string;
    items:any[]
};

class RadioEx extends React.Component<IProps,{}>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <FormControl>
                    <FormLabel>{this.props.label}</FormLabel>
                    <RadioGroup row
                                name={this.props.name}
                                value={this.props.value}>
                        {
                            this.props.items.map(
                                item => (
                                    <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                                )
                            )
                        }
                    </RadioGroup>
                </FormControl>
            </React.Fragment>
        )
    }
};

export default RadioEx;