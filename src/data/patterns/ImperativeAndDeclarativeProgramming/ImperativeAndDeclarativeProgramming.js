export const ImperativeAndDeclarativeProgramming = {
  id: 186,
  title: "Imperative and Declarative Programming",
  children: [
    {
      title: "Определение императивного программирования",
      type: "text",
      description: `
            <p>Императивное программирование — это парадигма, в которой разработчик указывает, как именно должна быть выполнена задача, описывая последовательность шагов, необходимых для достижения результата.</p>
          `,
    },
    {
      title: "Примеры императивного программирования",
      type: "text",
      description: `
            <p>Пример императивного подхода на JavaScript:</p>
          `,
      code: `
let sum = 0;
for (let i = 1; i <= 5; i++) {
sum += i;
}
console.log(sum); // 15
          `,
    },
    {
      title: "Определение декларативного программирования",
      type: "text",
      description: `
            <p>Декларативное программирование — это парадигма, в которой разработчик описывает, что нужно сделать, а не как это сделать. Основное внимание уделяется результату, а не этапам выполнения.</p>
          `,
    },
    {
      title: "Примеры декларативного программирования",
      type: "text",
      description: `
            <p>Пример декларативного подхода на JavaScript:</p>
          `,
      code: `
const sum = [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
          `,
    },
    {
      title: "Сравнение подходов",
      type: "text",
      description: `
            <p>Императивное программирование требует от разработчика указания каждой детали выполнения, в то время как декларативное программирование позволяет сосредоточиться на конечном результате, что может сделать код более читаемым и поддерживаемым.</p>
          `,
    },
    {
      title: "Заключение",
      type: "text",
      description: `
            <p>Обе парадигмы имеют свои сильные и слабые стороны, и выбор между ними зависит от конкретной задачи и предпочтений разработчика.</p>
          `,
    },
  ],
};
