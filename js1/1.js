// let a=10
// a=30
// console.log(a);
// //scope block global funtional
// //direct declare krli global variable
// //block ata r virt t use krli block scoped
function a(){
  if(true){
    let a = 10; // block scoped variable
    var b=  `hello`; // function scoped variable
    console.log(b); // "hello"
    console.log(a); // 10 
  }
  confirm.log(b); // "hello"
}
a(); // calling the function
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined