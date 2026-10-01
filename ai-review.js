export function average(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0)
    / numbers.length;
}
console.log(average([10, 20]));
console.log(average([])); // Returns NaN — empty-array case
