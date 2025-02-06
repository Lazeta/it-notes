export const Descriptors = {
  id: 137,
  title: "Descriptors, Getters, and Setters",
  children: [
    {
      title: "Определение дескрипторов",
      type: "text",
      description: `
            <p>Дескрипторы свойств — это объекты, которые содержат информацию о свойствах объектов в JavaScript, такие как возможность записи, перечисляемость и доступность.</p>
            <p><strong>Дескрипторы объекта</strong> — это объекты, которые описывают свойства объекта, их поведение и характеристики. Они позволяют управлять тем, как свойства могут быть использованы и изменены.</p>
          `,
    },
    {
      title: "Типы дескрипторов",
      type: "text",
      description: `
            <p>Существует два типа дескрипторов:</p>
            <ul>
              <li><strong>Данные дескриптора</strong>: хранят значение и могут быть настроены для записи.</li>
              <li><strong>Accessor дескрипторы</strong>: используют геттеры и сеттеры для управления доступом к значениям.</li>
            </ul>
          `,
    },
    {
      title: "Геттеры",
      type: "text",
      description: `
            <p>Геттеры — это специальные методы, которые позволяют получать значения свойств объекта. Они определяются с помощью ключевого слова <code>get</code>.</p>
          `,
    },
    {
      title: "Пример геттера",
      type: "text",
      description: `
            <p>Пример использования геттера в объекте:</p>
          `,
      code: `
const person = {
firstName: 'John',
lastName: 'Doe',
get fullName() {
return \`\${this.firstName} \${this.lastName}\`;
}
};

console.log(person.fullName); // John Doe
          `,
    },
    {
      title: "Сеттеры",
      type: "text",
      description: `
            <p>Сеттеры — это специальные методы, которые позволяют задавать значения свойств объекта. Они определяются с помощью ключевого слова <code>set</code>.</p>
          `,
    },
    {
      title: "Пример сеттера",
      type: "text",
      description: `
            <p>Пример использования сеттера в объекте:</p>
          `,
      code: `
const person = {
firstName: 'John',
lastName: 'Doe',
set fullName(name) {
[this.firstName, this.lastName] = name.split(' ');
}
};

person.fullName = 'Jane Smith';
console.log(person.firstName); // Jane
console.log(person.lastName); // Smith
          `,
    },
    {
      title: "Заключение",
      type: "text",
      description: `
            <p>Дескрипторы, геттеры и сеттеры позволяют управлять доступом к свойствам объектов, обеспечивая более гибкий и контролируемый способ работы с данными в JavaScript.</p>
          `,
      link: "Подробнее на learn.javascript.ru",
      url: "https://learn.javascript.ru/descriptors-getters-setters",
    },
  ],
};
