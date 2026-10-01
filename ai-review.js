export function average(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0)
    / numbers.length;
}

console.log(average([10,20,30,40])); // Returns NaN
