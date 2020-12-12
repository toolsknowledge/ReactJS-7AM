/*
    namespace AshokIT{
        export const sub:string = "ReactJS";
        export namespace SambaIT{
            export function getWish():string{
                return `Welcome to ${sub}`;
            };
        };
    };
*/
var namespace1;
(function (namespace1) {
    namespace1.var_one = "Hello_1";
    function fun_one() {
        return "Hello_2";
    }
    namespace1.fun_one = fun_one;
    ;
    namespace1.obj = {
        var_three: "Hello_3"
    };
    class class_one {
        constructor() {
            this.var_four = "Hello_4";
        }
    }
    namespace1.class_one = class_one;
    ;
    ;
})(namespace1 || (namespace1 = {}));
;
/*
    /// <reference path="file1.ts" />
    console.log( AshokIT.sub,
                AshokIT.SambaIT.getWish() );
*/
/// <reference path="file1.ts" />
let obj = {
    var_five: "Hello_5"
};
console.log(namespace1.var_one, namespace1.fun_one(), namespace1.obj.var_three, new namespace1.class_one().var_four, obj.var_five);
