export const testPrototype = {
  id: 100950,
  title: "Прототипы и прото",
  questions: [
    {
      id: 100951,
      question: "Что такое прототип в JavaScript?",
      answer: `
**Прототип:**
- Прототип — это механизм, который позволяет объектам наследовать свойства и методы от других объектов.
- Каждый объект в JavaScript имеет внутреннее свойство \`[[Prototype]]\`, которое ссылается на его прототип.

**Пример:**
\`\`\`javascript
const animal = {
  sound: 'Some sound',
  makeSound() {
    console.log(this.sound);
  },
};

const dog = Object.create(animal);
dog.sound = 'Woof';
dog.makeSound(); // 'Woof'
\`\`\`
`,
    },
    {
      id: 100952,
      question: "Как работает цепочка прототипов (prototype chain)?",
      answer: `
**Цепочка прототипов:**
- Когда вы обращаетесь к свойству объекта, JavaScript сначала ищет его в самом объекте.
- Если свойство не найдено, поиск продолжается в прототипе объекта, затем в прототипе прототипа и так далее, пока не достигнет \`null\`.

**Пример:**
\`\`\`javascript
const parent = { value: 42 };
const child = Object.create(parent);

console.log(child.value); // 42 (наследуется от parent)
\`\`\`
`,
    },
    {
      id: 100953,
      question: "Как создать объект с определенным прототипом?",
      answer: `
**Создание объекта с прототипом:**
1. **Object.create():**
   - Создает новый объект с указанным прототипом.

**Пример:**
\`\`\`javascript
const proto = { greet: () => console.log('Hello') };
const obj = Object.create(proto);
obj.greet(); // 'Hello'
\`\`\`

2. **Конструкторы:**
   - Используйте функции-конструкторы и свойство \`prototype\`.

**Пример:**
\`\`\`javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(\`Hello, \${this.name}\`);
};

const person = new Person('Alice');
person.greet(); // 'Hello, Alice'
\`\`\`
`,
    },
    {
      id: 100954,
      question: "Что такое __proto__ и как оно связано с prototype?",
      answer: `
**\`__proto__\`:**
- Это устаревшее свойство, которое предоставляет доступ к прототипу объекта.
- Оно эквивалентно \`Object.getPrototypeOf(obj)\`.

**Связь с \`prototype\`:**
- \`prototype\` используется для функций-конструкторов.
- \`__proto__\` используется для экземпляров объектов.

**Пример:**
\`\`\`javascript
function Animal() {}
Animal.prototype.sound = 'Roar';

const lion = new Animal();
console.log(lion.__proto__ === Animal.prototype); // true
\`\`\`
`,
    },
    {
      id: 100955,
      question: "Как проверить, является ли один объект прототипом другого?",
      answer: `
**Проверка прототипа:**
- Используйте метод \`isPrototypeOf()\`.

**Пример:**
\`\`\`javascript
const proto = { value: 42 };
const obj = Object.create(proto);

console.log(proto.isPrototypeOf(obj)); // true
\`\`\`

Альтернатива:
- \`Object.getPrototypeOf(obj) === proto\`.
`,
    },
  ],
};
