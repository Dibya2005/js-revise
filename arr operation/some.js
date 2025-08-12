let arr=[1,2,3,4,5,6,44,33]
let any=arr.some(
  function(val){
    return val > 4;
  })
console.log(any);
//some checks if any element satisfies the condition
//returns true if at least one element matches the condition