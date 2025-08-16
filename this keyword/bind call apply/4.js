//function ko call karte wakt app set ke sakte ho uski this ki value kya hogi
let obj={
  name:"harsh",
}




// function abcd(){
//   console.log(this)

// }
// //hamechate ha abcd funtion ma this ki value window na banke upar wala object ho jayye
// abcd.call(obj)
//call ke andar jo bhi object daloge yh]this ki value wo ho jayyegi
function abcd(a,b,c){
  console.log(this,a,b,c)

}
abcd.call(obj,1,2,3)
