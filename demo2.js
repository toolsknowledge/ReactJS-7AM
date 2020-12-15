"use strict";
/*
    import {wish} from "./demo1";
    console.log(wish);
*/
exports.__esModule = true;
var obj = {
    var_one: "Hello_1",
    getVarOne: function () {
        return obj.var_one;
    }
};
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello_2";
    }
    class_one.prototype.getVarOne = function () {
        return this.var_one;
    };
    ;
    return class_one;
}());
;
console.log(obj.var_one, obj.getVarOne());
var obj1 = new class_one();
console.log(obj1.var_one, obj1.getVarOne());
