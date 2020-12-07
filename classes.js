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
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Parent Class !!!";
    }
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = "Child Class !!!";
        return _this;
    }
    return class_two;
}(class_one));
;
var obj1 = new class_one();
console.log(obj1.var_one);
var obj2 = new class_two();
console.log(obj2.var_one, obj2.var_two);
