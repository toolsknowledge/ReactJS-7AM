//Default Parameters
//this concept introduced in ES6
//while defining the function itself we will initilize the parameters

/*
    function fun_one(arg1="ReactJS",arg2="NodeJS",arg3="MongoDB"){
        console.log( arg1,arg2,arg3 );
    };
    fun_one();                            //ReactJS NodeJS MongoDB
    fun_one("VueJS","Deno","CouchDB");    //VueJS Deno CouchDB
    fun_one(undefined,"ServerLess");      //ReactJS ServerLess MongoDB
    fun_one(undefined,undefined,undefined);   //ReactJS NodeJS MongoDB
    fun_one(null,null,null);                  //null null null
*/

/*
    function fun_one(arg1,arg2="Hello_2",arg3,arg4="Hello_4"){
        console.log( arg1,arg2,arg3,arg4 );
    };
    fun_one();                                          //undefined Hello_2 undefined Hello_4
    fun_one("Hello_1",undefined,"Hello_3",undefined);   //Hello_1 Hello_2 Hello_3 Hello_4
    fun_one(undefined,undefined,undefined,undefined);   //undefined Hello_2 undefined Hello_4
    fun_one(null,null,null,null);                       //null null null null
*/
































