// let arr=[1,2,3,4,5,6,44,33]
// let val=arr.find(
//   function(val){
//     return val==1;
//   })
let arr = [{id: 1, key: 1}, {id: 2, key: 1}, {id: 3, key: 3}];
let val = arr.find(function(val) {
  return val.key === 1;
});
console.log(val);
//finds the first element that matches the condition