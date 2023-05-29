const numbers = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let positiveCount = 0;
let positiveSum = 0;
let maxNumber = numbers[0];
let maxIndex = 0;
let negativeCount = 0;
let oddPositiveCount = 0;
let evenPositiveCount = 0;
let evenPositiveSum = 0;
let oddPositiveSum = 0;
let positiveProduct = 1;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++;
    positiveSum += numbers[i];
    positiveProduct *= numbers[i];

    if (numbers[i] % 2 === 0) {
      evenPositiveCount++;
      evenPositiveSum += numbers[i];
    } else {
      oddPositiveCount++;
      oddPositiveSum += numbers[i];
    }
  } else if (numbers[i] < 0) {
    negativeCount++;
  }

  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
    maxIndex = i;
  }
}

alert(`Сума позитивних елементів: ${positiveSum}
Кількість позитивних елементів: ${positiveCount}
Максимальний елемент: ${maxNumber} (індекс ${maxIndex})
Кількість негативних елементів: ${negativeCount}
Кількість непарних позитивних елементів: ${oddPositiveCount}
Кількість парних позитивних елементів: ${evenPositiveCount}
Сума парних позитивних елементів: ${evenPositiveSum}
Сума непарних позитивних елементів: ${oddPositiveSum}
Добуток позитивних елементів: ${positiveProduct}`);
