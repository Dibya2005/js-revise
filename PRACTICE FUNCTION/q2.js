//reusable discount calculator
function calculateDiscount(discount){
  return function(price) {
    if (price < 0) {
      throw new Error("Price must be a non-negative number.");
    }
    return price - (price * discount / 100);
  };
  
}
let discount10 = calculateDiscount(10); // 10% discount
console.log(discount10(100)); // 90.0, applying 10% discount on 100
console.log(discount10(200)); // 180.0, applying 10% discount
let discount20 = calculateDiscount(20); // 20% discount
console.log(discount20(100)); // 80.0, applying 20% discount on 100
console.log(discount20(200)); // 160.0, applying 20% discount on 200
// This allows you to create multiple discount calculators with different discount rates.