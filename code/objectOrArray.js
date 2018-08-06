/**
 * @Name: objectOrArray.js
 * @Author: zhengzheng.tang
 * @Update: 16/05/2018
 * @Desc: 判断一个值的类型
 */


var arr = [null, undefined, 1, 'iamstring', false, {a: 3}, [1, 2, 3, 4]];
arr.map(function (t) { console.log(typeof t) });

function isNull(value) {
    return (!value && value !== undefined && value !== 0)
}
var obj;
console.log(isNull(null));
console.log(isNull(1));
console.log(isNull({}));
console.log(isNull(undefined));
console.log(isNull(obj));

function isArray(value) {
    if(Array.isArray){
        return Array.isArray(value)

    } else{
      return  Object.prototype.toString().call(value) === '[object Array]'
    }
}

function isArray2(value) {
    return value instanceof Array;
}
console.log('-----isArray2-----');
console.log(isArray2([]));
console.log(isArray2({}));