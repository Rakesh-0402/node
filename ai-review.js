export function average(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0)
    / numbers.length;
}

console.log(average([])); // Returns NaN
