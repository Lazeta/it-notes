export const RealizeEasyAlgoOnJS = {
  id: 2531,
  title: "Реализация простого алгоритма на JavaScript",
  children: [
    {
      title: "Факториал числа",
      type: "text",
      description: `
                <p>Задача: Реализовать функцию, вычисляющую факториал числа.</p>
                <ul>
                  <li>Факториал числа n (обозначается n!) равен произведению всех положительных целых чисел от 1 до n.</li>
                  <li>Пример: 5! = 5 * 4 * 3 * 2 * 1 = 120</li>
                </ul>
              `,
      code: `
function factorial(n) {
if (n < 0) return -1; // факториал не существует для отрицательных чисел
if (n === 0) return 1; // 0! = 1
return n * factorial(n - 1); // рекурсивный вызов
}
              `,
    },
  ],
};
