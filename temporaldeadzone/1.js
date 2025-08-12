// tdz-js ko pta to ha ki uska matlab hai ki jab tak variable ko declare nahi kiya jata tab tak uska access nahi kiya ja sakta.
console.log(a); // ReferenceError: Cannot access 'a' before initialization
//variable banna ke phla ka lines tdz ha us variable ka
let a = 10; // global variable
let b=7;
{
  let b=5;
  console.log("inside block:", b);
}
console.log("outside block:", b);
