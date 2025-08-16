//clousures hota ha function jo ki kisi parent function ke andar ho aur andar wala function return ho rha ho, and returning function use kare parent function ka koi variable
//FYDE NUKSAN
//FYDA->variables ko private kr sakte ho
//globel poolution rok sakte ho
function abcd(){
  let a=9
  return function(){
    console.log(a)
  }
}
let fnc=abcd()
fnc()
//jab abcd ko chalaya a bana 
//return hua function
//fnc pe gya
//abcd khtm ho gya function
//to a bhi to khtm ho gya
// a to kthm ho chuka ha to undefinedprint krna chahiye
//ye sach ha function ke kthm hone pe  apka function and uska variables khtm ho jatte ha ,par jab bhi ,par jab bhi clousure bnta ha to apka funcn aur uska variable ka backlink bnaya jata ha uska nam hota ha [[enviroment]]
