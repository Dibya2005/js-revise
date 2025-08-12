function counter(){
  let count = 0; // Private variable

  return function() {
    count ++; // Increment the count
    return count; // Return the current count
  };
}
let c=counter(); // Create a counter instance
console.log(c()); // Output: 1
console.log(c()); // Output: 2    
console.log(c()); // Output: 3
//har bar aap jab counter chalata ho aap ek naya count bana rahe ho counter se nikla hUA FUNCTION JAB JAB CHALATA HO COUNTER APNI VALUE yaad rakhta hai
let d=counter(); // Create another counter instance
console.log(d()); // Output: 1
console.log(d()); // Output: 2