//clousire example
function outer(){
  let count=0;
  return function inner(){
    count++;
    console.log(count);
  }

}
const increment = outer(); // Create an instance of the outer function
increment(); // Call the inner function, which increments count
increment(); // Call the inner function again, which increments count
