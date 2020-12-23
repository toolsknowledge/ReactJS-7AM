//if we know only declarations but we dont know implementations then we will choose interfaces
//we will declare interfaces by using "interface" keyword.
//implentation provided by either class or json 

/*
    interface interface1{
        var_one:any;
        var_two:any;
        var_three:any;
    };
    let obj1:interface1 = {
        var_one:"ReactJS",
        var_two:"NodeJS",
        var_three:"MongoDB"
    };
    console.log( obj1.var_one, obj1.var_two, obj1.var_three );

    let obj2:interface1 = {
        var_one:"Angular11",
        var_two:"Deno",
        var_three:"CassandraDB"
    };
    console.log( obj2.var_one, obj2.var_two, obj2.var_three);

    class class_one implements interface1{
        var_one:any = "Hello_1";
        var_two:any = "Hello_2";
        var_three:any = "Hello_3";
    };
    let obj:class_one =  new class_one();
    console.log( obj.var_one, obj.var_two, obj.var_three );     
*/


/*
    interface interface1{
        wish:string;
        getWish():string;
    };
    let obj1:interface1 = {
        wish:"Hello",
        getWish : ():string=>{
            return obj1.wish;
        }
    };
    console.log( obj1.wish, obj1.getWish() );
*/


/*
    //single level inheritance
    interface interface1{
        var1:any;
    }
    interface interface2 extends interface1{
        var2:any;
    }
    let obj:interface2 = {
        var1:"Hello_1",
        var2:"Hello_2"
    };
    console.log(obj.var1, obj.var2);
*/


/*
    //multilevel inheritance
    interface Parent{
        var1:string;
        getVar1():string;
    };
    interface Child extends Parent{
        var2:string;
        getVar2():string;
    };
    interface Subchild extends Child{
        var3:string;
        getVar3():string;
    };
    class class_one implements Subchild{
        var1:string = "Hello_1";
        var2:string = "Hello_2";
        var3:string = "Hello_3";
        getVar1():string{
            return this.var1;
        };
        getVar2():string{
            return this.var2;
        };
        getVar3():string{
            return this.var3;
        };
    };
    let obj:class_one = new class_one();
    console.log( obj.getVar1(), obj.getVar2(), obj.getVar3() );
*/


/*
    //multiple inheritance                   
    interface interface1{
        var_one:any;
    };
    interface interface2{
        var_one:any;
    };
    interface interface3 extends interface1,interface2{
        var_one:any;
    };
    let obj:interface3 = {
        var_one : "Hello"
    };
    console.log( obj.var_one );
*/


/*
    //hirarichal inheritance
    interface interface1{
        var_one:any;
    };
    interface interface2 extends interface1{
        var_one:any;
    };
    interface interface3 extends interface1{
        var_two:any;
    };
    class class_one implements interface2{
        var_one:any = "Hello_1";    
    };
    class class_two implements interface3{
        var_one:any = "Hello_1";
        var_two:any = "Hello_2";
    };
    console.log( new class_one().var_one );
    let obj:class_two = new class_two();
    console.log( obj.var_one, obj.var_two );
*/

interface interface1{
    fun_one():any;
};
interface interface2 extends interface1{
    fun_one():any;
};
interface interface3 extends interface1{
    fun_one():any;
};
interface interface4 extends interface2,interface3{
    fun_one():any;
};
let obj:interface4 = {
    fun_one : ():any=>{
        return "Hello";
    }
};
console.log( obj.fun_one() );

//Abstarct Classes
//Modules
//namespaces
//Generics              













































































































