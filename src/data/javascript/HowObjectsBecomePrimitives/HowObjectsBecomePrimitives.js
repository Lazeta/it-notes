export const HowObjectsBecomePrimitives = {
  id: 147,
  title: "How objects become primitives",
  children: [
    {
      title: "Преобразование объектов в примитивы",
      type: "text",
      description: `
            <p>В JavaScript объекты могут быть автоматически преобразованы в примитивные значения в контекстах, таких как сравнение, арифметические операции или приведение типов. Процесс преобразования включает:</p>
            <ul>
              <li>Попытка вызова метода <strong>valueOf()</strong></li>
              <li>Попытка вызова метода <strong>toString()</strong></li>
            </ul>
          `,
      code: `
const obj = {
valueOf: function() {
return 42;
}
};

console.log(obj + 10); // 52 (вызывается obj.valueOf())
          `,
    },
    {
      title: "Этапы преобразования",
      type: "text",
      description: `
            <p>Когда JavaScript пытается преобразовать объект в примитив, он выполняет следующие шаги:</p>
            <ol>
              <li>Вызывать метод <strong>valueOf()</strong>. Если он возвращает примитив, то это значение используется.</li>
              <li>Если <strong>valueOf()</strong> возвращает объект, то JavaScript попытется вызвать <strong>toString()</strong>. Если <strong>toString()</strong> возвращает примитив, то это значение используется.</li>
            </ol>
          `,
      code: `
const obj2 = {
toString: function() {
return 'Hello';
}
};

console.log(obj2 + ' World'); // "Hello World" (вызывается obj2.toString())
          `,
    },
    {
      title: "Примеры преобразования",
      type: "text",
      description: `
            <p>Пример объекта с реализацией обоих методов:</p>
          `,
      code: `
const obj3 = {
valueOf: function() {
return 10;
},
toString: function() {
return 'I am an object';
}
};

console.log(obj3 + 5); // 15 (вызывается valueOf)
console.log(String(obj3)); // "I am an object" (вызывается toString)
          `,
    },
    {
      title: "Использование операторов",
      type: "text",
      description: `
            <p>Объекты могут быть преобразованы в примитивы при использовании операторов:</p>
            <ul>
              <li>Сравнение: ==, ===</li>
              <li>Арифметические операции: +, -, *, /</li>
              <li>Приведение типов: String(), Number(), Boolean()</li>
            </ul>
          `,
      code: `
console.log([] + '1'); // "1" (вызывается toString)
console.log([1] == 1); // true (нестрогое сравнение, вызывается valueOf)
          `,
    },
    {
      title: "Вывод",
      type: "text",
      description: `
            <p>Объекты в JavaScript автоматически преобразуются в примитивные значения с использованием методов valueOf() и toString(). Контекст и ситуация определяют, какой метод будет вызван.</p>
          `,
      code: `
const obj4 = {
valueOf: function() {
return '5';
},
toString: function() {
return 'I am an object';
}
};

console.log(obj4 + 1); // "51" (вызывается valueOf)
console.log(obj4 == '5'); // true (нестрогое сравнение, вызывается valueOf)
          `,
    },
  ],
};
