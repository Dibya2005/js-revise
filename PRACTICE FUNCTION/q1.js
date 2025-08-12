//write a bmi calculator
function calculateBMI(weight, height) {
  if (height <= 0) {
    throw new Error("Height must be greater than zero.");
  }
  const bmi = weight / (height * height);
  return bmi;
}
console.log(calculateBMI(70, 1.75). toFixed(2)); // to fixed used to specify the precision // Example usage: weight in kg, height in meters