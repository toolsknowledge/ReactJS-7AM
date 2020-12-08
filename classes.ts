//class
//collection of "variables" and functions called as class
//we will define classes by using "class" keyword
//we will create object to the classes by using "new" keyword
//we will define constrictors by using "constructor" keyword
//TypeScript supports the following class level modifiers
//@public     @private      @protected
//recomended modifier for variables is "private"
//recomended modifier for functions is "public"
//default modifier is "public"

/*
    class class_one{
        sub_one:string;
        sub_two:string;
        sub_three:string;
        constructor(){
            this.sub_one = "ReactJS";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        };
    };
    let obj:class_one = new class_one();
    console.log( obj.sub_one,
                obj.sub_two,
                obj.sub_three );     //ReactJS NodeJS MongoDB
*/

/*
    class class_one{
        constructor(public arg1:string,
                    public arg2:string,
                    public arg3:string){
                    
        }
    };      
    let obj1:class_one = new class_one("ReactJS","NodeJS","MongoDB");
    console.log( obj1.arg1 , "<=>" , obj1.arg2 , "<=>" , obj1.arg3 );     //ReactJS <=> NodeJS <=> MongoDB

    let obj2:class_one = new class_one("Angular11","Deno","CassandraDB");
    console.log( obj2.arg1 , "<=>" , obj2.arg2 , "<=>" , obj2.arg3 );    //Angular11 <=> Deno <=> CassandraDB
*/

/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;
        constructor(){
            this.sub_one = "ReactJS";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        };
        public getSubOne():string{
            return this.sub_one;
        };
        public getSubTwo():string{
            return this.sub_two;
        };
        public getSubThree():string{
            return this.sub_three;
        };
    };
    let obj:class_one = new class_one();
    console.log( obj.getSubOne(),
                obj.getSubTwo(),
                obj.getSubThree() );     //ReactJS NodeJS MongoDB
*/

//getting the "properties and functions" from parent class to child class called as inheritance
//we will implement inheritance by using "extends" keyword
//Types of inheritances
//1) single level inheritance
//2) multi level inheritance
//3) multiple inheritance
//4) hirarichal inheritance
//5) hybrid inheritance

/*
    class class_one{
        var_one:any = "Parent Class !!!";
    };
    class class_two extends class_one{
        var_two:any = "Child Class !!!";
    };
    let obj1:class_one = new class_one();
    console.log( obj1.var_one );           //Parent Class !!!

    let obj2:class_two = new class_two();
    console.log(obj2.var_one, obj2.var_two );    //Parent Class !!! Child Class !!!
*/



/*
    class class_one{
        constructor(public arg1:any){}
    };
    class class_two extends class_one{

    };
    let obj:class_two = new class_two("Hello");
    console.log( obj.arg1 );     //Hello
*/


/*
    class class_one{
        arg1:any;
        constructor(param1:any){
            this.arg1 = param1;
        };
        getArg1():any{
            return this.arg1;
        };
    };
    class class_two extends class_one{
        arg2:any;
        constructor(param1:any,param2:any){
            super(param2);
            this.arg2 = param1;
        }
        getArg2():any{
            return this.arg2;
        };
    };
    let obj:class_two = new class_two("Hello_1","Hello_2");
    console.log( obj.getArg1(),
                obj.getArg2() );
*/

/*
    class class_one{
        arg1:any;
        constructor(param1:any){
            this.arg1 = param1;
        };
    };
    class class_two extends class_one{
        arg2:any;
        constructor(param1:any,param2:any){
            super(param1);
            this.arg2 = param2;
        };
    };
    class class_three extends class_two{
        arg3:any;
        constructor(param1:any,param2:any,param3:any){
            super(param1,param2);
            this.arg3 = param3;
        };
    };
    let obj:class_three = new class_three("Hello_1","Hello_2","Hello_3");
    console.log( obj.arg1, obj.arg2, obj.arg3 );   //Hello_1 Hello_2 Hello_3
*/


/*
    class class_one{}
    class class_two{}
    class class_three extends class_one,class_two{}
    //multiple inheritance not supported by TypeScript
*/

/*
    //hirarichal inheritance
    class class_one{
        arg1:any="Hello_1";
    };

    class class_two extends class_one{
        arg2:any = "Hello_2";
    };

    class class_three extends class_one{
        arg2:any = "Hello_3";
    };

    class class_four extends class_one{
        arg2:any = "Hello_4";
    };

    let obj1:class_two = new class_two();
    console.log( obj1.arg1, obj1.arg2 );    //Hello_1 Hello_2

    let obj2:class_three = new class_three();
    console.log( obj2.arg1, obj2.arg2 );    //Hello_1 Hello_3


    let obj3:class_four = new class_four();
    console.log( obj3.arg1, obj3.arg2 );    //Hello_1 Hello_4
*/


//Hybrid

class class_one{}

class class_two extends class_one{}

class class_three extends class_one{}

class class_four extends class_two,class_three{}


//Hybrid inheritance also not supported by TypeScript

































































