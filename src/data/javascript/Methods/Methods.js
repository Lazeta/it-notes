export const Methods = {
  id: 154,
  title: "Methods",
  children: [
    {
      id: 505,
      title: "Array Methods",
      children: [
        {
          title: "",
          type: "text",
          description: "1. pop() => removes the last element from an array.",
        },
        {
          title: "",
          type: "text",
          description: "2.shift() => удаляет элемент в начале массива",
        },
        {
          title: "",
          type: "text",
          description:
            "3.push() => добавляется несколько элементов в конец массива",
        },
        {
          title: "",
          type: "text",
          description:
            "4.unshift() => добавляет несколько элементов в начало массива",
        },
        {
          title: "",
          type: "text",
          description: "5.length => получаем число элементов массива",
        },
        {
          title: "",
          type: "text",
          description: `6.splice() => добавление нескольких элементов в массив; 
              первый аргумент указывает где начать вставку элементов по индексу; 
              второй аргумент указывает сколько элементов нужно удалить, если аргумент не указать, то удаления не будет, просто добавится новый элемент в массиве; самые новые элементы указываются в скобках данного метода в кавычках,`,
        },
        {
          title: "",
          type: "text",
          description: `7.slice() => вырезает один или несколько элементов массива
              через указатель аргумента начала вырезания и второй аргумент где закончить срез;
              принимает отрицательные значения.`,
        },
        {
          title: "",
          type: "text",
          description: "8.concat() => конкатенация двух массивов",
        },
        {
          title: "",
          type: "text",
          description: `9.map() => принимает массив и применяет указанную функцию для
              всех элементов массива; возвращает новый массив.`,
        },
        {
          title: "",
          type: "text",
          description: `10.every() => проверяет, соответствуют ли все элементы указанному
              массиву определённому условию; если все элементы соответствуют условию, то возвращает
              метод true, в противном случае вернёт false.`,
        },
        {
          title: "",
          type: "text",
          description: `11.includes() => проверяет на наличие в массиве элемента; если
              элемент найден, то возвращает true.`,
        },
        {
          title: "",
          type: "text",
          description: `12.spread() => превращает массив в строки с помощью специальных
              разделителей … сохраняет между ними границу или по умолчанию между строками образуются
              пробелы.`,
        },
        {
          title: "",
          type: "text",
          description: `13.filter() => возвращает новый массив из всех элементов соответствующих
              заданному условию.`,
        },
        {
          title: "",
          type: "text",
          description: `14.reduce(function (previousValue, item, index, array) { … }, [initial]); => сводит массив к одному значению.`,
        },
        {
          title: "",
          type: "text",
          description:
            "15.reduceRight() => сводит массив к одному значение с права на лево.",
        },
        {
          title: "",
          type: "text",
          description: `16.indexOf() => возвращает первый индекс по которому может быть найден
              элемент в массиве и -1 если такого элемента нет; это не тоже самое что и Boolean values,
              мы можем получать 2 и более индекса совпадений по массиву.`,
        },
        {
          title: "",
          type: "text",
          description: `17.sort() => возвращает отсортированный массив; если compareFunction
              предоставлена, то массив сортируется в соответствиями с этими условиями.`,
        },
        {
          title: "",
          type: "text",
          description: `18.find() => возвращает значение первого найденного в массиве элемента,
              который удовлетворяет условию указанных в функции, в противном случае возвращает undefined.`,
        },
        {
          title: "",
          type: "text",
          description: `19.findIndex() => возвращает индекс в массиве, если элемент удовлетворяет
              условиям проверяющей функции, в противном случае вернёт -1.`,
        },
        {
          title: "",
          type: "text",
          description: `20.forEach(function (item, index, array) { … } => выполняет указанную
              функцию один раз для каждого элемента в массиве.`,
        },
        {
          title: "",
          type: "text",
          description:
            "21.join(‘, ’) => преобразовывает массив в строку с заданным разделителем.",
        },
        {
          title: "",
          type: "text",
          description: `22.isArray() => проверяем массив ли этот объект или нет.`,
        },
        {
          title: "",
          type: "text",
          link: "Learn more about array methods.",
          url: "https://learn.javascript.ru/array-methods",
        },
        {
          title: "",
          type: "text",
          link: "Visual representation of array methods.",
          url: "https://medium.com/@sewolpe/visualizing-javascript-array-methods-7babf560f7be",
        },
      ],
    },
    {
      id: 506,
      title: "Strings Methods",
      children: [
        {
          title: "",
          type: "text",
          description: "1.toUpperCase() => перевод строки в верхний регистр",
        },
        {
          title: "",
          type: "text",
          description: "2.toLowerCase() => перевод строки в нижний регистр",
        },
        {
          title: "",
          type: "text",
          description: "3.trim() => удаляет пробелы в начале и конце строки",
        },
        {
          title: "",
          type: "text",
          description: "4.length => получаем длину строки",
        },
        {
          title: "",
          type: "text",
          description: `5.includes() => проверяет на наличие в строке элемента; если элемент найден, то возвращает true.`,
        },
        {
          title: "",
          type: "text",
          description: `6.spread() => превращает массив в строки с помощью специальных разделителей ... сохраняет между ними границу или по умолчанию между строками образуются пробелы.`,
        },
        {
          title: "",
          type: "text",
          description: `7.repeat() => повторяет строку указанное количество раз.`,
        },
        {
          title: "",
          type: "text",
          description: `8.split() => разбивает строку на массив подстроки по указанному разделителю. Возвращает новый массив, который содержит подстроки полученные в ходе разбиения.`,
        },
        {
          title: "",
          type: "text",
          description:
            "9.startsWith() => проверяет на наличие в начале строки указанного элемента. Возвращает true или false",
        },
        {
          title: ``,
          type: "text",
          description:
            "10.endsWith() => проверяет на наличие в конце строки указанного элемента. Возвращает true или false",
        },
        {
          title: ``,
          type: "text",
          description:
            "11.str.substr(0, 2) => возвращает часть этой строки, начиная с указанного индекса и продолжая заданное количество символов после него. P.S.Deprecate",
        },
        {
          title: ``,
          type: "text",
          description:
            "12.str.slice(0, -2) => вырезает один или несколько элементов внутри строки через указатель аргумента начала вырезания и второй аргумент где закончить срез; принимает отрицательные значения.",
        },
        {
          title: ``,
          type: "text",
          description:
            "13.substring() => возвращает вырезанную часть строки, но не принимает отрицательные числа в качестве аргументов.",
        },
        {
          title: ``,
          type: "text",
          description:
            "14.concat() => конкатенация между собой строк в одну строку",
        },
        {
          title: ``,
          type: "text",
          description:
            "15.charCodeAt() => возвращает значение символа по Юникод.",
        },
        {
          title: ``,
          type: "text",
          description: "16.charAt() => возвращает символ по Юникод.",
        },
        {
          title: ``,
          type: "text",
          description: "17.trimStart() => удаляет пробелы в начале строки.",
        },
        {
          title: ``,
          type: "text",
          description: "18.trimEnd() => удаляет пробелы в конце строки.",
        },
        {
          title: ``,
          type: "text",
          description:
            "19.padStart() => добавляет символы в начале строки, чтобы результирующая строка получила указанную длину; по умолчанию метод возвращает пустую строку до указанной длины, но может принимать и другие символы указанные во втором аргументе.",
        },
        {
          title: ``,
          type: "text",
          description:
            "20.padEnd() => добавляет символы в конце строки, чтобы результирующая строка получила указанную длину.",
        },
        {
          title: ``,
          type: "text",
          description:
            "21.indexOf() => возвращает индекс первого вхождения указанного элемента в строку. Если элемент не найден, возвращает -1.",
        },
        {
          title: ``,
          type: "text",
          description:
            "22.at(-1) или at() => получает последний символ строки или символ согласно индексу слева на право, так же как при отрицательном значении принимает символ с право на лево.",
        },
        {
          title: `23.search()`,
          type: "text",
          description: `search() => возвращает индекс первого вхождения подстроки в строке.`,
          code: `console.log(str.search('World')); // 9`,
        },
        {
          title: "24.str.replace()",
          children: [
            {
              title: "Определение",
              type: "text",
              description: `
                    <p>Метод <code>replace()</code> используется для замены части строки на другую строку. Он возвращает новую строку, в которой все (или первое) вхождения искомой подстроки заменены на указанную.</p>
                  `,
            },
            {
              title: "Синтаксис",
              type: "text",
              description: `
                    <p>Синтаксис метода <code>replace()</code> выглядит следующим образом:</p>
                  `,
              code: `
            str.replace(searchValue, newValue);
                  `,
            },
            {
              title: "Параметры",
              type: "text",
              description: `
                    <p>Метод принимает два параметра:</p>
                    <ul>
                      <li><strong>searchValue</strong>: Строка или регулярное выражение, определяющее, что нужно заменить.</li>
                      <li><strong>newValue</strong>: Строка, на которую нужно заменить <code>searchValue</code>.</li>
                    </ul>
                  `,
            },
            {
              title: "Примеры использования",
              type: "text",
              description: `
                    <p>Вот несколько примеров использования метода <code>replace()</code>:</p>
                  `,
              code: `
            1. Замена подстроки:
            let str1 = "Hello, world!";
            let newStr1 = str1.replace("world", "JavaScript");
            console.log(newStr1); // Вывод: "Hello, JavaScript!"
            
            2. Замена с использованием регулярного выражения:
            let str2 = "I like cats, cats are great.";
            let newStr2 = str2.replace(/cats/g, "dogs");
            console.log(newStr2); // Вывод: "I like dogs, dogs are great."
            
            3. Замена первого вхождения:
            let str3 = "one one one";
            let newStr3 = str3.replace("one", "two");
            console.log(newStr3); // Вывод: "two one one"
            
            4. Использование функции в качестве второго аргумента:
            let str4 = "I have 2 apples and 3 oranges.";
            let newStr4 = str4.replace(/\\d+/g, (match) => {
              return parseInt(match) * 2; // Умножаем каждое число на 2
            });
            console.log(newStr4); // Вывод: "I have 4 apples and 6 oranges."
                  `,
            },
            {
              title: "Особенности",
              type: "text",
              description: `
                    <p>Некоторые особенности метода <code>replace()</code>:</p>
                    <ul>
                      <li>Метод не изменяет исходную строку; он возвращает новую.</li>
                      <li>Если <code>searchValue</code> — строка, замена будет регистронезависимой.</li>
                      <li>При использовании регулярного выражения с флагом <code>g</code> будут заменены все вхождения.</li>
                    </ul>
                  `,
            },
          ],
        },
      ],
    },
    {
      id: 507,
      title: "Numbers Methods",
      children: [
        {
          title: "",
          type: "text",
          description:
            "1.toFixed(number) => форматирует число с использованием записи с фиксированной запятой. Аргументам принимает количество знаков после запяты.",
        },
        {
          title: "",
          type: "text",
          description:
            "2.parseFloat(string) => принимает строку в качестве аргумента и возвращает число с плавающей точной.",
        },
        {
          title: "",
          type: "text",
          description:
            "3.parseInt(string, radix) => принимает строку в качестве аргумента и возвращает целое число в соответствии с указанной системой счисления.",
        },
        {
          title: "",
          type: "text",
          description:
            "4.Number() => преобразовывает строку в числовой тип данных.",
        },
        {
          title: "toExponential()",
          type: "text",
          description:
            "<p>Преобразует число в экспоненциальное представление.</p>",
          code: "var x = 9.656; console.log(x.toExponential(2)); // '9.66e+0'",
        },
        {
          title: "toPrecision()",
          type: "text",
          description:
            "<p>Возвращает строку с числом, записанным с указанной длиной.</p>",
          code: "var x = 9.656; console.log(x.toPrecision(4)); // '9.656'",
        },
        {
          id: 2537,
          title: "Методы Math",
          children: [
            {
              title: "Math.max()",
              type: "text",
              description: "<p>Возвращает наибольшее значение.</p>",
              code: "console.log(Math.max(1, 2, 3)); // 3",
            },
            {
              title: "Math.min()",
              type: "text",
              description: "<p>Возвращает наименьшее значение.</p>",
              code: "console.log(Math.min(1, 2, 3)); // 1",
            },
            {
              title: "Math.random()",
              type: "text",
              description: "<p>Генерирует случайное число от 0 до 1.</p>",
              code: `
function getRandomInt(min, max) {
// генерация случайного целого числа
return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // случайное число от 1 до 10
                  `,
            },
            {
              title: "Math.round()",
              type: "text",
              description: "<p>Округляет число до ближайшего целого.</p>",
              code: "console.log(Math.round(4.6)); // 5",
            },
            {
              title: "5.Math.sqrt() => возвращает квадратный корень числа.",
              type: "text",
              description:
                "5.Math.sqrt() => возвращает квадратный корень числа.",
            },
            {
              title: "",
              type: "text",
              description:
                "6.Math.cbrt() => возвращает кубический корень числа.",
            },
            {
              title: "",
              type: "text",
              description:
                "7.Math.abs() => возвращает абсолютное значение числа.",
            },
            {
              title: "",
              type: "text",
              description:
                "8.Math.pow() => возвращает число, возведённое в степень.",
            },
          ],
        },
      ],
    },
    {
      id: 508,
      title: "Object Methods",
      children: [
        {
          title:
            "1.Object.keys(obj): Возвращает массив строк, содержащий имена собственных перечисляемых свойств объекта.",
          type: "text",
          description: `<p>Примеры использования <code>Object.keys()</code>:</p>`,
          code: `
const person = { name: 'Alice', age: 25 };
console.log(Object.keys(person)); // ['name', 'age']
                                  `,
        },
        {
          title:
            "2.Object.values(obj): Возвращает массив значений собственных перечисляемых свойств объекта.",
          type: "text",
          description: `<p>Примеры использования <code>Object.values()</code>:</p>`,
          code: `
const person = { name: 'Alice', age: 25 };
console.log(Object.values(person)); // ['Alice', 25]
                                  `,
        },
        {
          title:
            "3.Object.create(proto, propertiesObject): Создает новый объект с указанным прототипом и свойствами.",
          type: "text",
          description: `<p>Примеры использования <code>Object.create()</code>:</p>`,
          code: `
const proto = { greet() { console.log('Hello!'); } };
const obj = Object.create(proto);
obj.greet(); // 'Hello!'
              `,
        },
        {
          title:
            "4.Object.freeze(obj): Замораживает объект, предотвращая добавление, удаление или изменение его свойств.",
          type: "text",
          description: `<p>Примеры использования <code>Object.freeze()</code>:</p>`,
          code: `
const obj = { name: 'Alice' };
Object.freeze(obj);
obj.name = 'Bob'; // не сработает
console.log(obj.name); // 'Alice'
              `,
        },
        {
          title:
            "5.Object.assign(target, ...sources): Копирует значения всех собственных перечисляемых свойств из одного или более источников в целевой объект и возвращает его.",
          type: "text",
          description: `<p>Примеры использования <code>Object.assign()</code>:</p>`,
          code: `
const target = { a: 1 };
const source = { b: 2, c: 3 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 2, c: 3 }
              `,
        },
        {
          title:
            "6.Object.entries(obj): Возвращает массив пар [ключ, значение] для собственных перечисляемых свойств объекта.",
          type: "text",
          description: `<p>Примеры использования <code>Object.entries()</code>:</p>`,
          code: `
const person = { name: 'Alice', age: 25 };
console.log(Object.entries(person)); // [['name', 'Alice'], ['age', 25]]
              `,
        },
        {
          title:
            "7.Object.seal(obj): Замораживает объект, предотвращая добавление, удаление или изменение его свойств.",
          type: "text",
          description: `<p>Примеры использования <code>Object.seal()</code>:</p>`,
          code: `
const obj = { name: 'Alice' };
Object.seal(obj);
obj.age = 25; // не сработает
obj.name = 'Bob'; // сработает
console.log(obj); // { name: 'Bob' }
              `,
        },
        {
          title:
            "8.Object.is(value1, value2): Определяет, являются ли два значения одним и тем же значением.",
          type: "text",
          description: `<p>Примеры использования <code>Object.is()</code>:</p>`,
          code: `
console.log(Object.is('abc', 'abc')); // true
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(null, undefined)); // false
              `,
        },
        {
          title:
            "9. Object.prototype.hasOwnProperty(): Возвращает булево значение, указывающее, является ли указанное свойство собственным свойством объекта.",
          type: "text",
          description: `<p>Примеры использования <code>Object.prototype.hasOwnProperty()</code>:</p>`,
          code: `
const obj = { name: 'Alice' };
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('age')); // false
              `,
        },
      ],
    },
    {
      id: 509,
      title: "Cycle",
      children: [
        {
          title: "for, while, do while",
          children: [
            {
              title: "Использование циклов for, while, do while",
              type: "text",
              description: `
                  <p>В JavaScript существуют различные виды циклов, которые позволяют повторять выполнение блока кода определенное количество раз или до тех пор, пока выполняется заданное условие.</p>
                  <ul>
                    <li><strong>Цикл for</strong>: Используется, когда известно количество итераций.</li>
                    <li><strong>Цикл while</strong>: Используется, когда количество итераций неизвестно, и необходимо повторять выполнение до тех пор, пока условие истинно.</li>
                    <li><strong>Цикл do while</strong>: Похож на цикл while, но гарантирует хотя бы одну итерацию.</li>
                  </ul>
                  `,
              code: `
// Пример цикла for
for (let i = 0; i < 5; i++) {
console.log("Итерация: " + i); // Выводит 0, 1, 2, 3, 4
}

// Пример цикла while
let j = 0; 
while (j < 5) {
console.log("Итерация: " + j); // Выводит 0, 1, 2, 3, 4
j++;
}

// Пример цикла do while
let k = 0;
do {
console.log("Итерация: " + k); // Выводит 0, 1, 2, 3, 4
k++;
} while (k < 5);
                  `,
            },
          ],
        },
        {
          title: "",
          type: "text",
          description:
            "1.for => повторяет блок кода определённое количество раз.",
        },
        {
          title: "",
          type: "text",
          description:
            "2.while => повторяет блок кода до тех пор, пока не выполнится условие.",
        },
        {
          title: "",
          type: "text",
          description:
            "3.do while => повторяет блок кода до тех пор, пока не выполнится условие. После чего выполняется блок кода.",
        },
        {
          title: "",
          type: "text",
          description:
            "4.for...of => повторяет блок кода для каждого элемента в массиве.",
        },
        {
          title: "",
          type: "text",
          description:
            "5.forEach() => повторяет блок кода для каждого элемента в массиве.",
        },
        {
          title: "",
          type: "text",
          description:
            "6.for in => повторяет блок кода для каждого свойства в объекте.",
        },
        {
          title: "",
          type: "text",
          description: "7.break => прерывает выполнение цикла.",
        },
        {
          title: "",
          type: "text",
          description:
            "8.continue => прерывает текущую итерацию цикла и переходит к следующей.",
        },
      ],
    },
    {
      id: 510,
      title: "work with JSON",
      children: [
        {
          title: ``,
          type: "text",
          description:
            "JSON.stringify(value, replacer, space): Преобразует значение в строку JSON.",
        },
        {
          title: ``,
          type: "text",
          description:
            "JSON.parse(text, reviver): Преобразует строку JSON в значение.",
        },
      ],
    },
    {
      id: 511,
      title: "Regular Expressions",
      children: [
        {
          title: "Метод match()",
          children: [
            {
              title: "Определение",
              type: "text",
              description: `
                    <p>Метод <code>match()</code> используется для поиска совпадений в строке с использованием регулярного выражения. Он возвращает массив с найденными совпадениями или <code>null</code>, если совпадения не найдены.</p>
                  `,
            },
            {
              title: "Синтаксис",
              type: "text",
              description: `
                    <p>Синтаксис метода <code>match()</code> выглядит следующим образом:</p>
                  `,
              code: `
str.match(regexp);
                  `,
            },
            {
              title: "Параметры",
              type: "text",
              description: `
                    <p>Метод принимает один параметр:</p>
                    <ul>
                      <li><strong>regexp</strong>: Регулярное выражение, по которому производится поиск.</li>
                    </ul>
                  `,
            },
            {
              title: "Примеры использования",
              type: "text",
              description: `
                    <p>Вот несколько примеров использования метода <code>match()</code>:</p>
                  `,
              code: `
1. Поиск простого совпадения:
let str1 = "Hello, world!";
let result1 = str1.match(/world/);
console.log(result1); // Вывод: ["world"]

2. Поиск с флагом g:
let str2 = "The rain in Spain stays mainly in the plain.";
let result2 = str2.match(/in/g);
console.log(result2); // Вывод: ["in", "in", "in"]

3. Регистронезависимый поиск с флагом i:
let str3 = "Hello, World!";
let result3 = str3.match(/world/i);
console.log(result3); // Вывод: ["World"]

4. Получение информации о совпадениях:
let str4 = "The quick brown fox jumps over the lazy dog.";
let result4 = str4.match(/(quick|lazy)/);
console.log(result4); // Вывод: ["quick", "quick", index: 4, ... ]

5. Использование групп для извлечения данных:
let str5 = "2023-01-27";
let result5 = str5.match(/(\\d{4})-(\\d{2})-(\\d{2})/);
console.log(result5); // Вывод: ["2023-01-27", "2023", "01", "27", ... ]
                  `,
            },
            {
              title: "Особенности",
              type: "text",
              description: `
                    <p>Некоторые особенности метода <code>match()</code>:</p>
                    <ul>
                      <li>Если регулярное выражение не находит совпадений, метод вернёт <code>null</code>.</li>
                      <li>Метод <code>match()</code> не изменяет исходную строку.</li>
                      <li>Использование флага <code>g</code> возвращает массив всех совпадений, но не предоставляет информации о позициях совпадений.</li>
                    </ul>
                  `,
            },
          ],
        },
      ],
    },
  ],
};
