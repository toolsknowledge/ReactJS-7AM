//getting behaviours, and properties from parent class to chile class called as prototype chaining.

//in javascript (below ES6 version), we will create "classes" by using "constructor" functions.

//in constructor function all the members(variables & functions) starts with "this" keyword.

//we will create object to the classes by using "new" keyword.

/*
    function class_one(){
        this.sub_one = "ReactJS";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    };

    let obj = new class_one();
    console.log( obj.sub_one,
                obj.sub_two,
                obj.sub_three );   //ReactJS NodeJS MongoDB
*/

/*
    function class_one(arg1,arg2,arg3){
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    };

    let obj1 = new class_one("Angular","NodeJS","MongoDB");
    console.log( obj1.var_one, obj1.var_two, obj1.var_three );

    let obj2 = new class_one("ReactJS","NodeJS","CouchDB");
    console.log( obj2.var_one, obj2.var_two, obj2.var_three );

    let obj3 = new class_one("VueJS","Deno","couchDB");
    console.log( obj3.var_one, obj3.var_two, obj3.var_three );
*/

/*
    function class_one(){
        this.wish = "NodeJS";

        this.getWish = function(){
            return `Welcome to ${this.wish}`;
        };
    };
    let obj = new class_one();
    console.log( obj.getWish() );    //Welcome to NodeJS
*/



/*
    function class_one(obj){
        this.var_one = obj;
    };

    function class_two(){
        this.my_fun = function(){
            return "welcome to react js";
        };
    };


    let obj = new class_one(new class_two());
    console.log( obj.var_one.my_fun() );    //welcome to react js
*/


/*
    function class_one(){

    };
    class_one.prototype.var_one = "ReactJS";
    class_one.prototype.var_two = "NodeJS";
    class_one.prototype.var_three = "MongoDB";

    let obj = new class_one();
    console.log( obj.var_one,
                obj.var_two,
                obj.var_three );    //ReactJS NodeJS MongoDB
*/

/*
    function class_one(){

    };
    class_one.prototype.var_one = "Hello_1";


    function class_two(){

    };
    class_two.prototype = Object.create(class_one.prototype);
    class_two.prototype.var_two = "Hello_2";

    let obj1 = new class_one();
    console.log( obj1.var_one );     //Hello_1

    let obj2 = new class_two();
    console.log( obj2.var_one, obj2.var_two );    //Hello_1 Hello_2
*/


/*
    function class_one(){

    };
    class_one.prototype.fun_one = function(){
        return "Hello_1";
    };


    function class_two(){

    };
    class_two.prototype = Object.create(class_one.prototype);
    class_two.prototype.fun_two = function(){
        return "Hello_2";
    };


    let obj1 = new class_one();
    console.log( obj1.fun_one() );     //Hello_1


    let obj2 = new class_two();
    console.log( obj2.fun_one(), obj2.fun_two() );   //Hello_1 Hello_2
*/


//multi level
/*
    function class_one(){

    };
    class_one.prototype.var1 = "class_one";
    class_one.prototype.fun1 = function(){
        return this.var1;
    };

    function class_two(){

    };
    class_two.prototype = Object.create(class_one.prototype);
    class_two.prototype.var2 = "class_two";
    class_two.prototype.fun2 = function(){
        return this.var2;
    };

    function class_three(){

    };
    class_three.prototype = Object.create(class_two.prototype);
    class_three.prototype.var3 = "class_three";
    class_three.prototype.fun3 = function(){
        return this.var3;
    };

    let obj1 = new class_one();
    console.log( obj1.var1, obj1.fun1() );


    let obj2 = new class_two();
    console.log( obj2.var1, obj2.fun1(), obj2.var2, obj2.fun2() );


    let obj3 = new class_three();
    console.log( obj3.var1, obj3.fun1(), obj3.var2, obj3.fun2(), obj3.var3, obj3.fun2() );;
*/


/*
    //multiple inheritance (not supported)
    function class_one(){
        
    };
    class_one.prototype.var1 = "Hello_1";

    function class_two(){

    };
    class_two.prototype.var2 = "Hello_2";

    function class_three(){

    };

    class_three.prototype = Object.create(class_one.prototype);
    class_three.prototype.var3 = "Hello_3";
    class_three.prototype = Object.create(class_two.prototype);

    let obj = new class_three();
    console.log( obj.var1 );
*/




function class_one(){

};
class_one.prototype.fun1 = function(){
    return "data from mongodb soon...!";
};


function class_two(){

};
class_two.prototype = Object.create(class_one.prototype);
class_two.prototype.fun1 = function(){
    return "couchDB Data Soon....!";
};
let obj = new class_two();
console.log( obj.fun1() );








































































