//modules are "custom development by developer" in project.
//modules have internal scope (with in the project we can use).

/*
    compile the modules

    > tsc --module commomjs targetfile.ts

    --module is the flag, helps to compile the modules and it recognize export and import keywords

    commonjs library helps to execute local modules
*/

/*
    export const wish:string = "Hello";
*/


/*
    export const var_one:string = "Hello_1";
    export const var_two:string = "Hello_2";
    export const var_three:string = "Hello_3";
*/

/*
    export default function fun_one():any{
        return "Hello";
    }
*/


/*
    export function fun_one():any{
        return "ReactJS";
    };

    export function fun_two():any{
        return "NodeJS";
    };

    export function fun_three():any{
        return "MongoDB";
    };
*/


/*
    const obj:any = {
        var_one : "Hello_1",
        var_two : "Hello_2",
        var_three : "Hello_3"
    };
    export default obj;
*/
/*
    export class class_one{
        var_one:string;
        constructor(arg1:any){
            this.var_one = arg1;
        };
    };
*/

export default interface interface1{
    var_one:string;
    getVarOne():string;
};























































