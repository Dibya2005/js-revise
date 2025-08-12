let arr=[1,2,3,4,5,6,44,33];
arr=arr.every(
  function(val){
    return val > 0;
  })
  console.log(arr);
//every checks if all elements satisfy the condition
//returns true if all elements match the condition  