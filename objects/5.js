//copying obj spread
let obj={
  name:"harsh",
  age:33,
  email:"test@gmail.com"
};
let obj2={...obj}
console.log(obj2)//jusing spread operator
// //object.assign
// let obj3=Object.assign({},obj);
// console.log(obj3)
let obj3=Object.assign({k:10},obj);
console.log(obj3)
