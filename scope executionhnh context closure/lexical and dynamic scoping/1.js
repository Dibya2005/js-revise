//js- lexical scoping-> ap kaha par  physically availabe ho ye poore tarike se depend krta ha ki app kya accesss kr paoge
//dynamic scoping - we dont follow in js
//defnition of dynamic-> KAHA SE ACCSSS KR RAHA HO USKA UPAR DEPEND KAREGA KI VALUE MILAGI YA NHI
//
// function abce(){
//   let a=9 //a lexicllly avalable inside abce function
//   //a can be access anywhere  inside abce 
//   function l(){
//     console.log(a)

//   }
// }
// let a=9
// function abc(){
//   console.log(a)
// }
// function defg(){
//   let a=11
//   abc()
// }
// defg() // it prints 9
// //for dynamic programing language it will print 11