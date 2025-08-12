//use of IIFI
let shary=(function () {
  let t = 0;
  return {
    getscore: function () {
      return t; // This returns the value of 't'
    },
    setscore: function (newScore) {
      t = newScore; // This sets the value of 't'
    }
  }
  
})();
console.log(shary.getscore()); // Output: 0
shary.setscore(10);
console.log(shary.getscore()); // Output: 10
shary.setscore(20);
console.log(shary.getscore()); // Output: 20