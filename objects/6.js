//deep cloning
let obj={
  name:"harsh",
  age:23,
  add:{
    city:"bhopal"
  },
}
obj2={...obj}
console.log(obj2) //copy hol
obj.add.city="ghy"
console.log(obj)
console.log(obj2)
//city of both object changed
//copy krta h top ki value is only real copy
//nested  object reference pass krta ha
//iskLIYE ABKO KRNA PARTA HA DEEP CLONE
//HAM ISKA LIYE OOBJECT KO STRIG MA CONVERT KR DETE HA
//using JSON.stringify(obj) reference bni nha
//string koo bapas object ma convert krne ke liyr JSON.perse(objstrigify) use kru
let obj3=JSON.parse(JSON.stringify(obj))
obj3.add.city="manali"
console.log(obj)
console.log(obj3)