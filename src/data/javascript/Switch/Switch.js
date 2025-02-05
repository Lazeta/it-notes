export const Switch = {
  id: 240,
  title: "Switch",
  children: [
    {
      title: "Использование конструкции switch и где это нужно",
      type: "text",
      description: `
          <p>Конструкция switch позволяет выполнять различные действия на основе значения выражения.</p>
          <ul>
            <li>Мы можем использовать switch вместо многочисленных if-else, когда нужно проверить одно значение на несколько возможных вариантов.</li>
            <li>Это делает код более читаемым и поддерживаемым.</li>
          </ul>
          <p>Вот несколько примеров использования switch:</p>
          `,
      code: `
// Пример 1: Определение дня недели
const day = 3;
let dayName;

switch (day) {
case 1:
dayName = 'Понедельник';
break;
case 2:
dayName = 'Вторник';
break;
case 3:
dayName = 'Среда';
break;
case 4:
dayName = 'Четверг';
break;
case 5:
dayName = 'Пятница';
break;
case 6:
dayName = 'Суббота';
break;
case 7:
dayName = 'Воскресенье';
break;
default:
dayName = 'Некорректный день';
}

console.log(dayName); // "Среда"


// Пример 2: Использование switch с выражением
const fruit = 'яблоко';
let color;

switch (fruit) {
case 'банан':
color = 'желтый';
break;
case 'яблоко':
color = 'красный';
break;
case 'виноград':
color = 'зеленый';
break;
default:
color = 'неизвестный цвет';
}

console.log(color); // "красный"


// Пример 3: Объединение случаев
const grade = 'B';
let message;

switch (grade) {
case 'A':
case 'B':
message = 'Отлично!';
break;
case 'C':
message = 'Хорошо!';
break;
case 'D':
message = 'Удовлетворительно!';
break;
case 'F':
message = 'Неп satisfactoriously!';
break;
default:
message = 'Некорректная оценка';
}

console.log(message); // "Отлично!"
          `,
    },
  ],
};
