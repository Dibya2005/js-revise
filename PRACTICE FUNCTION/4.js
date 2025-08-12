//convert this function to pure funtion
let t=0;
// function addtotal(num){
//   t += num; // This modifies the external variable 't', making it impure
//   return t;
// }
function addtotal(num){
  let k=t; // Capture the current value of 't'
  k += num; // Modify the captured value instead of 't'
  return k; // Return the new value without modifying 't'
}