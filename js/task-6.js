let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');
  if (input === '' || input === null) break;
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(input);
  console.log(numbers);
}
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

console.log(`Общая сумма чисел равна ${total}`);
