var obj = {
  name: "ES5 Example",
  showName: function() {
    const kok = () => {
      console.log(this.name); // arrow keeps 'this' from showName
    };
    kok();
  }
};
//arrow function hamesha this ki value parent se lete ha parent ki jo bhi this ki value ha wahi iski value ha -> laxical this
//we shold use arrow function if we dont want our this to be window obj
obj.showName(); // ES5 Example
