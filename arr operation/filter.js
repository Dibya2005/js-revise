let arr=[1,2,3,4,5,6,44,33]
//true ba false return kra
newarr=arr.filter(
  function(val){
    if(val>4) return true;

  }
)
console.log(newarr)