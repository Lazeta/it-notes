export const testDestructurization = {
  id: 101325,
  title: "Деструктуризация",
  questions: [
    {
      id: 101326,
      question: "Что такое деструктуризация?",
      answer: `Деструктуризация — это синтаксический сахар в JavaScript (и других языках 
      программирования), который позволяет извлекать значения из массивов или объектов и 
      присваивать их переменным в более удобной форме.`,
    },
    {
      id: 101327,
      question: "Применение деструктуризации",
      answer: `Упрощает работу с данными, особенно при работе с объектами, массивами или 
      возвращаемыми значениями функций.
      Позволяет писать более читаемый и компактный код.`,
    },
    {
      id: 101328,
      question: "Извлечение свойств объекта в переменные",
      answer: `const user = { name: "Alice", age: 25, city: "New York" };

      // Без деструктуризации:
      const name = user.name;
      const age = user.age;

      // С деструктуризацией:
      const { name, age } = user;

      console.log(name); // "Alice"
      console.log(age);  // 25`,
    },
    {
      id: 101329,
      question: "Переименование переменных",
      answer: `const { name: userName, age: userAge } = user;

      console.log(userName); // "Alice"
      console.log(userAge);  // 25`,
    },
    {
      id: 101330,
      question: "Значения по умолчанию",
      answer: `const { name, age, country = "USA" } = user;

      console.log(country); // "USA" (если свойства country нет в объекте)`,
    },
    {
      id: 101331,
      question: "Извлечение элементов массива в переменные",
      answer: `const colors = ["red", "green", "blue"];

      // Без деструктуризации:
      const firstColor = colors[0];
      const secondColor = colors[1];

      // С деструктуризацией:
      const [firstColor, secondColor] = colors;

      console.log(firstColor);  // "red"
      console.log(secondColor); // "green"`,
    },
    {
      id: 101332,
      question: "Пропуск значений",
      answer: `const [first, , third] = colors;

      console.log(first);  // "red"
      console.log(third);  // "blue"`,
    },
    {
      id: 101333,
      question: "Работа с объектами как аргументами функции",
      answer: `function printUser({ name, age }) {
        console.log(\`Name: \${name}, Age: \${age}\`);
      }

      const user = { name: "Bob", age: 30 };
      printUser(user); // "Name: Bob, Age: 30"`,
    },
    {
      id: 101334,
      question: "Работа с массивами как аргументами функции",
      answer: `function printColors([first, second]) {
        console.log(\`First color: \${first}, Second color: \${second}\`);
      }

      const colors = ["yellow", "purple"];
      printColors(colors); // "First color: yellow, Second color: purple"`,
    },
    {
      id: 101335,
      question: "",
      answer: ``,
    },
  ],
};
