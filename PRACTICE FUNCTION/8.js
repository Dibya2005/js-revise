//convert this normal into IIFE
(function () {
  let t = 0;
  function addtotal(num) {
    t += num; // This modifies the external variable 't', making it impure
    return t;
  }
})();