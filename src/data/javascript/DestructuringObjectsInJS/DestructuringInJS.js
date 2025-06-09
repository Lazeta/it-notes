export const DestructuringInJS = {
  id: 138,
  title: "Destructuring assignment / Деструктурирующее присваивание",
  children: [
    {
      title: "Что такое деструктурирующее присваивание?",
      type: "text",
      description: `
        <p><strong>Деструктурирующее присваивание</strong> — это синтаксический сахар в JavaScript, который позволяет извлекать значения из массивов или свойства из объектов и присваивать их переменным. Это делает код более чистым и удобочитаемым.</p>
      `,
    },
    {
      title: "Пример с массивами",
      type: "text",
      description: `
        <p><strong>Пример деструктуризации массива:</strong></p>
      `,
      code: `
const numbers = [1, 2, 3];

// Деструктурируем массив
const [first, second] = numbers;

console.log(first); // 1
console.log(second); // 2
      `,
    },
    {
      title: "Пример с объектами",
      type: "text",
      description: `
        <p><strong>Пример деструктуризации объекта:</strong></p>
      `,
      code: `
const person = {
  name: 'John',
  age: 30,
};

// Деструктурируем объект
const { name, age } = person;

console.log(name); // John
console.log(age); // 30
      `,
    },
    {
      title: "Преимущества деструктурирующего присваивания",
      type: "text",
      description: `
        <ul>
          <li>Упрощает код: Уменьшает количество строк кода.</li>
          <li>Улучшает читаемость: Легче понять, какие значения используются.</li>
          <li>Можно задавать значения по умолчанию: Если значение отсутствует, можно указать значение по умолчанию.</li>
        </ul>
      `,
    },
    {
      title: "Значения по умолчанию",
      type: "text",
      description: `
        <p><strong>Пример значений по умолчанию:</strong></p>
      `,
      code: `
const settings = {
  volume: 10,
};

// Деструктурируем с значением по умолчанию
const { volume, brightness = 50 } = settings;

console.log(volume); // 10
console.log(brightness); // 50
      `,
    },
  ]
}