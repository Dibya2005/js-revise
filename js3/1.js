//reference type
let a=[1,2,3]
let b=a
b.pop()
console.log(a)
console.log(b)
// both a and b refer to the same array object, so changes to b affect a

//same happen in objects
let obj1={name:"John"}
let obj2=obj1
obj2.age=30
console.log(obj1) // { name: 'John', age: 30 }
//dynamic typing-
// JavaScript allows variables to hold values of any type, and you can change the type of a variable at runtime.

