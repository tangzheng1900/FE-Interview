/**
 * @Name: deepClone.js
 * @Author: zhengzheng.tang
 * @Update: 06/05/2018
 * @Desc:
 */

function deepClone(obj) {
  if(typeof obj !=='object') return new Object(obj);
  if(obj === null) return null;
  // 日期，正则，
  if(obj instanceof RegExp) return new RegExp(obj);
  if(obj instanceof Date) return new Date(obj);
  let instance = new obj.constructor();
  for(let key in obj){
    instance[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
  }
  return instance;
}

let obj = {a:{a:1}};
let newObj = deepClone(obj);
obj.a.a =5;
console.log(obj, newObj);
