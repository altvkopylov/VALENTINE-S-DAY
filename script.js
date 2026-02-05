const arr = [
    'Неохайний',
    'Нейтральний',
    'Неактивний спобіб життя',
    'Консервативні погляди',
    'Стабільний',
    'Дбайливий',
    'За фемінізм',
    'Емоційно недоступний',
    'Невпевненний',
    'Маніпулятор',
    'Небезпечний',
    'Пов\'язаний з криміналом',
    'Контролюючий',
    'Приємний в спілкуванні',
    'Не викликає емоцій',
    'Підступний спокусник',
    'Піздабол',
    'Охайний та чистоплотний'
]

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    const randomThree = getRandomUnique(arr, 3); // генеруємо нові кожного разу
    output.classList.remove('hide');
    output.innerHTML = `${randomThree[0]}, ${randomThree[1]}, ${randomThree[2]}`;
})

const output = document.querySelector('.output');

// Функція для вибору 3 випадкових елементів без повторів
function getRandomUnique(arr, count) {
  const copy = [...arr]; // створюємо копію масиву
  const result = [];

  for (let i = 0; i < count; i++) {
    const index = Math.floor(Math.random() * copy.length);
    result.push(copy[index]);
    copy.splice(index, 1); // видаляємо, щоб не повторювались
  }

  return result;
}
// console.log(randomThree);