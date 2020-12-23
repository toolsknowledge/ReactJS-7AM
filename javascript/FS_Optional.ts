/*
    function fun_one(arg1?:string,
                    arg2?:string,
                    arg3?:string):void{
        console.log(arg1, arg2, arg3);
    };
    fun_one();                              //undefined undefined undefined
    fun_one("ReactJS");                     //ReactJS undefined undefined
    fun_one("ReactJS","NodeJS","MongoDB");  //ReactJS NodeJS MongoDB
    fun_one(undefined,"Deno",undefined);    //undefined Deno undefined
    fun_one(undefined,undefined,undefined); //undefined undefined undefined
    fun_one(null,null,null);                //null null null
*/


/*
    function fun_one(arg1:any,arg2?:any):any{
        console.log(arg1, arg2);
    };
    //fun_one();                    //Expected 1-2 arguments, but got 0.
    fun_one("Hello_1");             //Hello_1 undefined
    fun_one("Hello_1","Hello_2");   //Hello_1 Hello_2
    fun_one(undefined);             //undefined undefined
    fun_one(null,null);             //null null
*/


/*
    function fun_one(arg1?:any,arg2:any):any{}
    //optional parameter should be in last position  (regular with optional)
*/

/*
    function fun_one(arg1:any,arg2?:any,arg3?:any){}
    //we can have more than one optional parameter
*/




//function fun_one(arg1:any,arg2:any="Hello_2",arg3?:any):void{}

//function fun_one(arg2:any="Hello_2",arg1:any,arg3?:any):void{}

//function fun_one(arg1:any,arg3?:any,arg2:any="Hello_2"):void{}

//rest with regular
//function fun_one(...arg1:any,arg2:any):any{}   //A rest parameter must be last in a parameter list.
//function fun_one(arg1:any,...arg2:any):any{}




//rest,default,regular
//function fun_one(...arg1:any,arg2:any,arg3:any="Hello"):any{}   //A rest parameter must be last in a parameter list.
//function fun_one(arg2:any="Hello",arg1:any,...arg3:any):any{}


//regular, optional, default and rest
//function fun_one(arg1:any,arg2:any="Hello",arg3?:any,...arg4:any):any{}




/*
    function fun_one(param1?:any,
                    param2?:any,
                    param3?:any):any{}
    //while calling the function, param1,param2 and param3 are optional
    //the default values of param1,param2 and param3 are "undefined"
    //we can have more than one optional parameter
*/


//regular with optional
//function fun_one(arg1?:any,arg2:any):any{}
//Caution : optional always have last priority (Condition : regular with optional)



//regular , optional , default
//function fun_one(arg1?:any,arg2:any,arg3:any="Hello"):any{}   //misplace of optional
//function fun_one(arg2:any,arg1?:any,arg3:any="Hello"):any{}   (correct)
//function fun_one(arg3:any="Hello",arg2:any,arg1?:any):any{}     (correct)


//regular,default,optional and rest
//function fun_one(arg1:any="Hello",arg2?:any,arg3:any,...arg4:any):any{}
//function fun_one(arg1:any,arg2:any="Hello",arg3?:any,...arg4:any):any{}



//default with optional
function fun_one(arg2?:any,arg1:any="Hello"):any{}


































































