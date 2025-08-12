//create a pure funtion to transform your vaue 
function double(val){
  return val * 2; // This function does not modify any external state, making it pure
}
console.log(double(5)); // Output: 10