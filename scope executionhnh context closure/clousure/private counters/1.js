function countformee(){
  let c=0;
  return function(){
    c++;
    console.log(c)
  }
}
// countformee()
//count for me chalane pe c bna aur a =ek funtion return hua to kuch bhi print nhi hoga
let fnc=countformee()
fnc()
fnc()
let fnc2=countformee()
fnc2()
fnc2()
fnc2()
//we are thinking that it will print 1,2,3,4,5
//but not true 
//count for mee call hona par it will create new block  jiska khudka c ha jiski value 0 ha 
//count for mee jab bhi chaloge naya c banega returning function apna c ko yad rakhega