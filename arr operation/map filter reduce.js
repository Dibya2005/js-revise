//map sirf tab use krna ha jab apko naya array banana ha picle array ke basis par
//map dikhte hi man me ek blank array bna lo
//jab bhi apko aisa koi case dikh jayye jaha par ek array se naya array banega aur wo naya array kuch values ko rakhega  tab mp lagega
let arr=[11,2,3,1132,23344,88]
let newarr=arr.map(function(val){
  if(val>10){
    return val;
  }
}) //return nkrli gota element undefined ahibo
console.log(newarr)