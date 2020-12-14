//function fun_one<string>(arg1:string):string{}

/*
    function fun_one<A>(arg1:A):A{
        return arg1;
    };
    console.log( fun_one<string>("Hello") );    //Hello
    console.log( fun_one<number>(100) );        //100
    console.log( fun_one<boolean>(true) );      //true
*/

/*
    function fun_one<T>(arg1:T[]):T[]{
        return arg1;
    };

    let arr1 = fun_one<string>(["Hello_1","Hello_2","Hello_3"]);
    arr1.push("Hello_4");
    //arr1.push(100);   //Argument of type 'number' is not assignable to parameter of type 'string'.
    console.log(arr1);

    let arr2 = fun_one<number>([100,200,300]);
    arr2.push(400);
    //arr2.push("Hello_5");    //Argument of type 'string' is not assignable to parameter of type 'number'.
    console.log(arr2);
*/

/*
    function fun_one<A,B>(arg1:A,arg2:B):void{
        console.log(arg1, arg2);
    };
    fun_one<string,string>("Hello_1","Hello_2");     //Hello_1 Hello_2
    fun_one<number,number>(100,200);                 //100 200
    fun_one<any,any>(true,"Hello");                  //true Hello
*/


/*
    class class_one<A,B>{
        private var_one:A;
        private var_two:B;
        constructor(arg1:A,arg2:B){
            this.var_one = arg1;
            this.var_two = arg2;
        };
        fun_one():any{
            return this.var_one+" "+this.var_two;
        };
    }
    let obj1:class_one<string,string> = new class_one("Hello_1","Hello_2");
    console.log( obj1.fun_one() );                  //Hello_1 Hello_2

    let obj2:class_one<number,number> = new class_one(100,100);
    console.log( obj2.fun_one() );                  //100 100

    let obj3:class_one<any,any> = new class_one("Hello_1",100);
    console.log( obj3.fun_one() );                  //Hello_1 100
*/


/*
    interface interface1<T,U>{
        (arg1:T,arg2:U):void;
    };
    function fun_one(arg1:string,arg2:string):void{
        console.log(arg1, arg2);
    };
    let obj:interface1<string,string> = fun_one;
    obj("Hello_1","Hello_2");    //Hello_1 Hello_2
*/



/*
    //classes or json object    (non generics)
    // functions                (generics)
    interface interface1<A>{
        (arg1:A):void;
    };

    function fun_one(arg1:string):void{
        console.log(arg1);
    };

    function fun_two(arg1:number):void{
        console.log(arg1);
    };

    let obj:interface1<string> = fun_one;
    obj("Hello_1");     //Hello_1

    let obj1:interface1<number> = fun_two;
    obj1(100);         //100
*/


//9030001847

interface interface1{
    arg1:any;
};

let obj:interface1 = {
    arg1 : "Hello_1"
};

console.log( obj.arg1 );






















































