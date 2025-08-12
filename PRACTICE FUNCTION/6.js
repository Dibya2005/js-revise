//what is closure when it is created
//ek funcn jo return kra ek aur function aur andar wala function bahar wala function ke vlue ko use kra
function outerFunction() {
  let outerVariable = 'I am from outer function';

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer function
  }

  return innerFunction; // Returning the inner function
}