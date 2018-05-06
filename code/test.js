//
// /**
//  * Created by Don on 2017/5/17.
//  */
//
//
//
// function Parent(name,age) {
//     this.name=name;
//     this.age=age;
//
//
// }
//
// function Chile() {function getAge() {console.log(this.age);}
//
//
// }
//
// Child.prototype = new Parent();
//
// var lex=new Child(lex,30);
//
//
//
// function Parent(name,age) {
//     this.name=name;
//     this.age=age;
// }
//
// function Child() {
//     function getAge() {console.log(this.age);}
//
//     if(){
//
//     }
//
//     return new
//         apply(child,arguments);
//
//
// }
//
// Child.prototype = new Parent();
// Child.
//
//
//     var lex=new Child(lex,30);

const list = [1, 2];
list.push(3);

function count() {
    var a = 0;
    return function Add() {
        console.log(++a);

    }
}

var countNum = count();
countNum();
countNum();



//数组的用法，内置对象数组的方法
function A() {
  var C = [];
  for(var i = 0,j = 0; i < A.length; i++) {

    if (A[i] < B[j]) {
      C.push(A[i]);
      A.shift(A[i])
    }
    else {
      C.push(B[j]);
      B.shift(B[j]);

    }
  }
  return C;
}


