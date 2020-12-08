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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//hirarichal inheritance
var class_one = /** @class */ (function () {
    function class_one() {
        this.arg1 = "Hello_1";
    }
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arg2 = "Hello_2";
        return _this;
    }
    return class_two;
}(class_one));
;
var class_three = /** @class */ (function (_super) {
    __extends(class_three, _super);
    function class_three() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arg2 = "Hello_3";
        return _this;
    }
    return class_three;
}(class_one));
;
var class_four = /** @class */ (function (_super) {
    __extends(class_four, _super);
    function class_four() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arg2 = "Hello_4";
        return _this;
    }
    return class_four;
}(class_one));
;
var obj1 = new class_two();
console.log(obj1.arg1, obj1.arg2);
var obj2 = new class_three();
console.log(obj2.arg1, obj2.arg2);
var obj3 = new class_four();
console.log(obj3.arg1, obj3.arg2);
