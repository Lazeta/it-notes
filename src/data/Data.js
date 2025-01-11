export const data = {
  title: "All",
  children: [
    {
      title: "React",
      children: [
        {
          title: "React JS",
          children: [
            {
              title: "Introduction to React JS",
              type: "link",
              url: "https://it-shpora.pp.ua/category/react/",
            },
            {
              title: "Advanced React JS",
              type: "link",
              url: "https://devdocs.io/react/",
            },
            {
              title: "Storybook",
              type: "link",
              url: "https://storybook.js.org/docs/writing-stories",
            },
            {
              title: "React JS Drag to Select",
              type: "link",
              url: "https://www.joshuawootonn.com/react-drag-to-select",
            },
          ],
        },
        {
          title: "React TS",
          children: [
            {
              title: "Introduction to React TypeScript",
              type: "link",
              url: "https://it-shpora.pp.ua/category/react-typescript/",
            },
            {
              title: "Advanced React Typescript",
              type: "link",
              url: "https://reactjs.org/docs/getting-started",
            },
          ],
        },
        {
          title: "React Native",
          children: [
            {
              title: "Introduction to React Native",
              type: "link",
              url: "https://it-shpora.pp.ua/category/react-native/",
            },
            {
              title: "Advanced React Native",
              type: "link",
              url: "https://reactnative.dev/",
            },
          ],
        },
      ],
    },
    {
      title: "Vue",
      children: [
        {
          title: "Vue JS",
          children: [
            {
              title: "Introduction to Vue JS",
              type: "link",
              url: "https://it-shpora.pp.ua/category/vue-js/",
            },
            {
              title: "Advanced React",
              type: "link",
              url: "https://it-shpora.pp.ua/category/vue-js/",
            },
          ],
        },
      ],
    },
    {
      title: "Angular",
      children: [
        {
          title: "Angular JS",
          children: [
            {
              title: "Introduction to Angular JS",
              type: "link",
              url: "https://it-shpora.pp.ua/category/angular-js/",
            },
            {
              title: "Advanced Angular JS",
              type: "link",
              url: "https://it-shpora.pp.ua/category/angular-js/",
            },
          ],
        },
      ],
    },
    {
      title: "Node.js",
      children: [
        {
          title: "Node.js with Express",
          children: [
            {
              title: "Introduction to Node.js",
              type: "link",
              url: "https://it-shpora.pp.ua/category/node-js/",
            },
            {
              title: "Advanced Node.js",
              type: "link",
              url: "https://it-shpora.pp.ua/category/node-js/",
            },
          ],
        },
      ],
    },
    {
      title: "JavaScript",
      children: [
        {
          title: "ES6",
          children: [
            {
              title: "Basics of ES6.",
              type: "text",
            },
          ],
        },
        {
          title: "Asynchronous Programming",
          children: [
            {
              title: "Basics of async programming.",
              type: "text",
            },
          ],
        },
        {
          title: "JavaScript Frameworks",
          children: [
            {
              title: "Learn more about frameworks",
              type: "link",
              url: "https://example.com",
            },
          ],
        },
        {
          title: "DOM Manipulation",
          children: [
            {
              title: "Learn more about DOM Manipulation.",
              type: "link",
              url: "https://example.com",
            },
          ],
        },
        {
          title: "Drag and Drop",
          children: [
            {
              title: "mouse drag and drop",
              type: "link",
              url: "https://learn.javascript.ru/mouse-drag-and-drop",
            },
          ],
        },
        {
          title: "Recursion",
          children: [
            {
              title: "How to Use Recursion in React",
              type: "link",
              url: "https://www.freecodecamp.org/news/how-to-use-recursion-in-react/",
            },
          ],
        },
        {
          title: "Destructuring objects in JS",
          children: [
            {
              title: "",
              description:
                "Деструктуризация объектов позволяет извлекать значения из объекта и присваивать их переменным в краткой форме",
              type: "code",
              code: `const person = { name: 'Alice', age: 25 };
const { name, age } = person;
console.log(name, age);`,
            },
          ],
        },
        {
          title: "Methods",
          children: [
            {
              title: "Array Methods",
              children: [
                {
                  title: "1. pop() => removes the last element from an array.",
                  type: "text",
                },
                {
                  title: "2.shift() => удаляет элемент в начале массива",
                  type: "text",
                },
                {
                  title:
                    "3.push() => добавляется несколько элементов в конец массива",
                  type: "text",
                },
                {
                  title:
                    "4.unshift() => добавляет несколько элементов в начало массива",
                  type: "text",
                },
                {
                  title: "5.length => получаем число элементов массива",
                  type: "text",
                },
                {
                  title: `6.splice() => добавление нескольких элементов в массив; 
                            первый аргумент указывает где начать вставку элементов по индексу; 
                            второй аргумент указывает сколько элементов нужно удалить, если аргумент не указать, то удаления не будет, просто добавится новый элемент в массиве; самые новые элементы указываются в скобках данного метода в кавычках,`,
                  type: "text",
                },
                {
                  title: `7.slice() => вырезает один или несколько элементов массива
                            через указатель аргумента начала вырезания и второй аргумент где закончить срез;
                            принимает отрицательные значения.`,
                  type: "text",
                },
                {
                  title: "8.concat() => конкатенация двух массивов",
                  type: "text",
                },
                {
                  title: `9.map() => принимает массив и применяет указанную функцию для
                            всех элементов массива; возвращает новый массив.`,
                  type: "text",
                },
                {
                  title: `10.every() => проверяет, соответствуют ли все элементы указанному
                            массиву определённому условию; если все элементы соответствуют условию, то возвращает
                            метод true, в противном случае вернёт false.`,
                  type: "text",
                },
                {
                  title: `11.includes() => проверяет на наличие в массиве элемента; если
                            элемент найден, то возвращает true.`,
                  type: "text",
                },
                {
                  title: `12.spread() => превращает массив в строки с помощью специальных
                            разделителей … сохраняет между ними границу или по умолчанию между строками образуются
                            пробелы.`,
                  type: "text",
                },
                {
                  title: `13.filter() => возвращает новый массив из всех элементов соответствующих
                            заданному условию.`,
                  type: "text",
                },
                {
                  title:
                    "14.reduce(function (previousValue, item, index, array) { … }, [initial]); => сводит массив к одному значению.",
                  type: "text",
                },
                {
                  title:
                    "15.reduceRight() => сводит массив к одному значение с права на лево.",
                  type: "text",
                },
                {
                  title: `16.indexOf() => возвращает первый индекс по которому может быть найден
                            элемент в массиве и -1 если такого элемента нет; это не тоже самое что и Boolean values,
                            мы можем получать 2 и более индекса совпадений по массиву.`,
                  type: "text",
                },
                {
                  title: `17.sort() => возвращает отсортированный массив; если compareFunction
                            предоставлена, то массив сортируется в соответствиями с этими условиями.`,
                  type: "text",
                },
                {
                  title: `18.find() => возвращает значение первого найденного в массиве элемента,
                            который удовлетворяет условию указанных в функции, в противном случае возвращает undefined.`,
                  type: "text",
                },
                {
                  title: `19.findIndex() => возвращает индекс в массиве, если элемент удовлетворяет
                            условиям проверяющей функции, в противном случае вернёт -1.`,
                  type: "text",
                },
                {
                  title: `20.forEach(function (item, index, array) { … } => выполняет указанную
                            функцию один раз для каждого элемента в массиве.`,
                  type: "text",
                },
                {
                  title:
                    "21.join(‘, ’) => преобразовывает массив в строку с заданным разделителем.",
                  type: "text",
                },
                {
                  title:
                    "22.isArray() => проверяем массив ли этот объект или нет.",
                  type: "text",
                },
                {
                  title: "Learn more about array methods.",
                  type: "link",
                  url: "https://learn.javascript.ru/array-methods",
                },
                {
                  title: "Visual representation of array methods.",
                  type: "link",
                  url: "https://medium.com/@sewolpe/visualizing-javascript-array-methods-7babf560f7be",
                },
              ],
            },
            {
              title: "Strings Methods",
              children: [
                {
                  title: "1.toUpperCase() => перевод строки в верхний регистр",
                  type: "text",
                },
                {
                  title: "2.toLowerCase() => перевод строки в нижний регистр",
                  type: "text",
                },
                {
                  title: "3.trim() => удаляет пробелы в начале и конце строки",
                  type: "text",
                },
                {
                  title: "4.length => получаем длину строки",
                  type: "text",
                },
                {
                  title: `5.includes() => проверяет на наличие в строке элемента; если элемент найден, то возвращает true.`,
                  type: "text",
                },
                {
                  title: `6.spread() => превращает массив в строки с помощью специальных разделителей ... сохраняет между ними границу или по умолчанию между строками образуются пробелы.`,
                  type: "text",
                },
                {
                  title: `7.repeat() => повторяет строку указанное количество раз.`,
                  type: "text",
                },
                {
                  title: `8.split() => разбивает строку на массив подстроки по указанному разделителю. Возвращает новый массив, который содержит подстроки полученные в ходе разбиения.`,
                  type: "text", 
                },
                {
                  title: `9.startsWith() => проверяет на наличие в начале строки указанного элемента. Возвращает true или false`,
                  type: "text",
                },
                {
                  title: `10.endsWith() => проверяет на наличие в конце строки указанного элемента. Возвращает true или false`,
                  type: "text",
                },
                {
                  title: `11.slice() => вырезает один или несколько элементов внутри строки через указатель аргумента начала вырезания и второй аргумент где закончить срез; принимает отрицательные значения.`,
                  type: "text",
                },
                {
                  title: `12.substring() => возвращает вырезанную часть строки, но не принимает отрицательные числа в качестве аргументов.`,
                  type: "text",
                },
                {
                  title: `13.concat() => конкатенация между собой строк в одну строку`,
                  type: "text",
                },
                {
                  title: `14.charCodeAt() => возвращает значение символа по Юникод.`,
                  type: "text",
                },
                {
                  title: `15.charAt() => возвращает символ по Юникод.`,
                  type: "text",
                },
                {
                  title: `16.trimStart() => удаляет пробелы в начале строки.`,
                  type: "text",
                },
                {
                  title: `17.trimEnd() => удаляет пробелы в конце строки.`,
                  type: "text",
                },
                {
                  title: `18.padStart() => добавляет символы в начале строки, чтобы результирующая строка получила указанную длину; по умолчанию метод возвращает пустую строку до указанной длины, но может принимать и другие символы указанные во втором аргументе.`,
                  type: "text",
                },
                {
                  title: `19.padEnd() => добавляет символы в конце строки, чтобы результирующая строка получила указанную длину.`,
                  type: "text",
                },
                {
                  title: `20.indexOf() => возвращает индекс первого вхождения указанного элемента в строку. Если элемент не найден, возвращает -1.`,
                  type: "text",
                },
                {
                  title: `21.at(-1) или at() => получает последний символ строки или символ согласно индексу слева на право, так же как при отрицательном значении принимает символ с право на лево.`,
                  type: "text",
                },
              ],
            },
            {
              title: "Numbers Methods",
              children: [
                {
                  title: "1.toFixed() => форматирует число с использованием записи с фиксированной запятой.",
                  type: "text",
                },
                {
                  title: "2.parseFloat() => принимает строку в качестве аргумента и возвращает число с плавающей точной.",
                  type: "text",
                },
                {
                  title: "3.parseInt() => принимает строку в качестве аргумента и возвращает целое число в соответствии с указанной системой счисления.",
                  type: "text",
                },
                {
                  title: "4.Number() => преобразовывает строку в числовой тип данных.",
                  type: "text",
                },
                {
                  title: "5.Math.sqrt() => возвращает квадратный корень числа.",
                  type: "text",
                },
                {
                  title: "6.Math.cbrt() => возвращает кубический корень числа.",
                  type: "text",
                },
                {
                  title: "7.Math.abs() => возвращает абсолютное значение числа.",
                  type: "text", 
                },
                {
                  title: "8.Math.pow() => возвращает число, возведённое в степень.",
                }
              ],
            },
            {
              title: "Object Methods",
              children: [
                {
                  title: "1.Object.keys(obj): Возвращает массив строк, содержащий имена собственных перечисляемых свойств объекта.",
                  type: "text",
                },
                {
                  title: "2.Object.values(obj): Возвращает массив значений собственных перечисляемых свойств объекта.",
                  type: "text",
                },
                {
                  title: "3.Object.create(proto, propertiesObject): Создает новый объект с указанным прототипом и свойствами.",
                  type: "text",
                },
                {
                  title: "4.Object.freeze(obj): Замораживает объект, предотвращая добавление, удаление или изменение его свойств.",
                  type: "text",
                },
                {
                  title: "5.Object.assign(target, ...sources): Копирует значения всех собственных перечисляемых свойств из одного или более источников в целевой объект и возвращает его.",
                  type: "text",
                },
                {
                  title: "6.Object.entries(obj): Возвращает массив пар [ключ, значение] для собственных перечисляемых свойств объекта.",
                  type: "text",
                },
                {
                  title: "7.Object.seal(obj): Замораживает объект, предотвращая добавление, удаление или изменение его свойств.",
                  type: "text",
                },
                {
                  title: "8.Object.is(value1, value2): Определяет, являются ли два значения одним и тем же значением.",
                  type: "text",
                }
              ],
            },
            {
              title: "Cycle",
              children: [
                {
                  title: "1.while => повторяет блок кода до тех пор, пока не выполнится условие.",
                  type: "text",
                },
                {
                  title: "2.do while => повторяет блок кода до тех пор, пока не выполнится условие. После чего выполняется блок кода.",
                  type: "text",
                },
                {
                  title: "3.for => повторяет блок кода определённое количество раз.",
                  type: "text",
                },
                {
                  title: "4.for of => повторяет блок кода для каждого элемента в массиве.",
                  type: "text",
                },
                {
                  title: "5.for in => повторяет блок кода для каждого свойства в объекте.",
                  type: "text",
                },
                {
                  title: "6.break => прерывает выполнение цикла.",
                  type: "text",
                },
                {
                  title: "7.continue => прерывает текущую итерацию цикла и переходит к следующей.",
                  type: "text",
                },
              ]
            },
            {
              title: "work with JSON",
              children: [
                {
                  title: `JSON.stringify(value, replacer, space): Преобразует значение в строку JSON.`,
                  type: "text",
                },
                {
                  title: `JSON.parse(text, reviver): Преобразует строку JSON в значение.`,
                  type: "text",
                },
              ]
            }
          ],
        },
        {
          title: "Page Visibility API",
          children: [
            {
              title:
                "Реализация паузы/старта видео в зависимости от состояния видимости страницы",
              description: `Page Visibility API — это API браузера, который проверяет видимость страницы. Он помогает определять, скрыта или свернута текущая страница, и тем самым позволяет контролировать ее поведение и использование ресурсов`,
              type: "code",
              code: `const video = document.querySelector('video');
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    video.pause();
  } else {
    video.play();
  }
});`,
              link: "Подробнее — MDN",
              url: "https://medium.com/nuances-of-programming/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-page-visibility-api-fca074a5b113",
            },
          ],
        },
        {
          title: "Function Levenshtein",
          children: [
            {
              title: "Function Levenshtein or Levenshtein Distance",
              type: "code",
              description: `
                <p>Функция Левенштейна, или расстояние Левенштейна, измеряет различие между двумя строками, 
                определяя минимальное количество операций, необходимых для преобразования одной строки в другую.
                </p>
                <ul>Операциями могут быть:
                  <li>Замена: Заменить один символ на другой;</li>
                  <li>Удаление: Удалить символ из строки;</li>
                  <li>Вставка: Вставить символ в строку;</li>
                </ul>
                <p>Суть и применение</p>
                <ul>
                  <li>Сравнение строк: Функция используется для нахождения «похожести» строк. Чем меньше расстояние Левенштейна, тем более похожи строки.</li>
                  <li>Поиск и исправление ошибок: Часто применяется в системах проверки правописания, для поиска похожих слов и исправления ошибок.</li>
                  <li>Обработка естественного языка: Используется в алгоритмах для сравнения слов и предложений, что может быть полезно в чат-ботах, поисковых системах и других NLP приложениях.</li>
                </ul>
                            `,
              code: `function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; matrix[i] = [i]) i++;
  for (let j = 0; j <= a.length; matrix[0][j] = j++) j++;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b[i - 1] === a[j - 1]
        ? matrix[i - 1][j - 1]
        : Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
    }
  }
  return matrix[b.length][a.length];
}`,
            }
          ],
        }
      ],
    },
    {
      title: "Next.js",
      children: [
        {
          title: "Next.js Crash Course Tutorial",
          children: [
            {
              title: "#1 - Introduction & New Features",
              type: "video",
              url: "https://www.youtube.com/embed?v=TJQbDPGzm0Y&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT",
            },
            {
              title: "#2 - SSR & Server Components (theory)",
              type: "video",
              url: "https://www.youtube.com/embed?v=YEG2_fSJswc&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=2",
            },
            {
              title: "#3 - Pages & Routes",
              type: "video",
              url: "https://www.youtube.com/embed?v=vwg4Wrk-kWE&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=3",
            },
            {
              title: "#4 - Layouts & Links",
              type: "video",
              url: "https://www.youtube.com/embed?v=R7A5vBDfZ18&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=4",
            },
            {
              title: "#5 - Styles, Fonts & Images",
              type: "video",
              url: "https://www.youtube.com/embed?v=oWUQQD97Rz0&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=5",
            },
            {
              title: "#6 - Fetching & Revalidating Data",
              type: "video",
              url: "https://www.youtube.com/embed?v=PAXWRgEo7Ns&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=6",
            },
            {
              title: "#7 - Dynamic Segments (Params)",
              type: "video",
              url: "https://www.youtube.com/embed?v=ZwajQ9ywgIU&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=7",
            },
            {
              title: "#8 - Static Rendering",
              type: "video",
              url: "https://www.youtube.com/embed?v=ihmyC4Ei2zY&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=8",
            },
            {
              title: "#9 - Custom 404 Page",
              type: "video",
              url: "https://www.youtube.com/embed?v=PbFH_VE1Iks&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=9",
            },
            {
              title: "#10 - Loading UI & Suspense",
              type: "video",
              url: "https://www.youtube.com/embed?v=Lzml9L3f4IM&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=10",
            },
            {
              title: "#11 - Client Form Component",
              type: "video",
              url: "https://www.youtube.com/embed?v=nSfu7sHPE9M&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=11",
            },
            {
              title: "#12 - Building the App",
              type: "video",
              url: "https://www.youtube.com/embed?v=Yi_zS8jSln8&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT&index=12",
            },
          ],
        },
        {
          title: "Routing",
          children: [
            {
              title: "Learn more about routing",
              description:
                "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.",
              type: "link",
              url: "https://nextjs.org/docs/app/building-your-application/routing#terminology",
            },
          ],
        },
      ],
    },
    {
      title: "Interview",
      children: [
        {
          title: "Theme Frontend",
          children: [
            {
              title: "common web dev interview questions",
              children: [
                {
                  title: "Основные структуры данных и их организация",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Двоичная система счисления",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Что такое цикл событий (event loop) и как он работает?",
                  children: [
                    {
                      title: "", 
                      type: "list",
                      description: `
                      <p>Цикл событий (event loop) - это механизм, используемый в JavaScript и других языках программирования для обработки событий и выполнения асинхронного кода. Он позволяет программе эффективно обрабатывать события, такие как пользовательские действия, таймеры, сетевые запросы и другие асинхронные операции.</p>
                      <p>Работа цикла событий в JavaScript обычно выглядит следующим образом:</p>
                        <li>Ожидание событий: Цикл событий начинает свою работу, ожидая возникновения событий. Это могут быть пользовательские действия (например, щелчки мыши или нажатия клавиш), таймеры, сетевые запросы или другие асинхронные операции.</li>
                        <li>Обработка событий: Когда событие происходит, оно помещается в очередь событий (event queue). Цикл событий извлекает событие из очереди и передает его на обработку.</li>
                        <li>Выполнение обработчиков событий: Цикл событий вызывает соответствующий обработчик события, который содержит код, который должен быть выполнен в ответ на событие. Обработчик выполняется синхронно, то есть блокирует выполнение других событий до завершения.</li>
                        <li>Обработка асинхронного кода: Если в обработчике события есть асинхронный код, такой как таймеры или сетевые запросы, он не блокирует выполнение других событий. Вместо этого асинхронный код помещается в очередь задач (task queue) для выполнения в будущем.</li>
                        <li>Возврат к ожиданию событий: После выполнения всех обработчиков событий и обработки асинхронного кода, цикл событий возвращается к ожиданию новых событий. Процесс повторяется, пока не будет завершена работа программы.</li>
                        <p>Цикл событий позволяет JavaScript выполнять асинхронный код без блокировки основного потока выполнения. Это позволяет создавать отзывчивые веб-приложения, которые могут обрабатывать пользовательские действия и одновременно выполнять другие задачи, такие как загрузка данных или анимации.</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
              ]
            },
            {
              title: "HTML/CSS questions",
              children: [
                {
                  title: "Отображать значения атрибутов",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Вес селектора",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Псевдоклассы и псевдоэлементы",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Коробчатая модель",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "em против rem, относительные и абсолютные значения",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Позиционирование: поток документов, свойство позиции, переполнение и z-индекс",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Флексбокс",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Сетка",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
              ]
            },
            {
              title: "JS questions",
              children: [
                {
                  title: "Возможность реализовать довольно простой алгоритм на JavaScript. Примеры задач",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Основные алгоритмы сортировки и поиска",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Переменные",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Числовые методы",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Строковые методы и строковые шаблоны",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: `Тернарные, нулевое объединение, необязательное связывание и логические операторы`,
                  children: [
                    {
                      title: "Тернарные, нулевое объединение, необязательное связывание и логические операторы – синтаксис и варианты использования", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Случай переключателя — примеры, где это может быть полезно",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Циклы - for, while, do while",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Строгое сравнение",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
              ]
            },
            {
              title: "React questions",
              children: [
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
              ]
            },
            {
              title: "typification questions",
              children: [
                {
                  title: "Типы данных",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    },
                    {
                      title: "Что такое NaN? Какого типа это значение? Как можно узнать, равно ли значение переменной NaN?", 
                      children: [
                        {
                          title: "title",
                          type: "list",
                          description: `
                          <p>paragraph</p>
                            <li>li</li>
                            <p>paragraph</p>
                          `,
                        }
                      ],
                    }
                  ]
                },
                {
                  title: "Уметь обнаруживать случаи преобразования неявных типов данных",
                  children: [
                    {
                      title: "Уметь обнаруживать случаи преобразования неявных типов данных в логические, строковые, числовые", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "Преобразования типов",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
              ]
            },
            {
              title: "methodology and libraries",
              children: [
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
              ]
            },
            {
              title: "patterns and principles",
              children: [
                {
                  title: "OOP",
                  children: [
                    {
                      title: "Object Oriented Programming", 
                      type: "list",
                      description: `
                      <p>Основы объектно-ориентированного программирования (ООП) включают в себя несколько ключевых концепций:</p>
                        <li>Объекты: Основные единицы ООП, которые представляют собой экземпляры классов. Объекты могут содержать данные (атрибуты) и методы (функции), которые работают с этими данными.</li>
                        <li>Классы: Шаблоны для создания объектов. Класс определяет свойства и поведение, которые будут у его объектов. Классы могут наследовать свойства и методы от других классов.</li>
                        <li>Инкапсуляция: Принцип, который подразумевает скрытие внутреннего состояния объекта и предоставление доступа к нему только через методы. Это помогает защитить данные и уменьшить зависимость между компонентами.</li>
                        <li>Наследование: Механизм, позволяющий создавать новый класс на основе существующего. Новый класс (производный) наследует свойства и методы базового класса, что способствует повторному использованию кода.</li>
                        <li>Полиморфизм: Способность объектов разных классов обрабатывать данные по одному и тому же интерфейсу. Это позволяет использовать один и тот же метод для объектов разных типов, что упрощает код и делает его более гибким.</li>
                        <p>Эти концепции помогают разработчикам создавать более структурированные, гибкие и поддерживаемые программы.</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
                {
                  title: "topic title",
                  children: [
                    {
                      title: "title", 
                      type: "list",
                      description: `
                      <p>paragraph</p>
                        <li>li</li>
                        <p>paragraph</p>
                      `,
                    }
                  ]
                },
              ]
            },
            {
              title: `
                        Темы интервью 📚:
                        - Основы ООП.
                        - Основные структуры данных и их организация (массив, список, стек, очередь, дерево, хеш-таблица и т.д.).
                        - Возможность реализовать довольно простой алгоритм на JavaScript. Примеры задач
                        - Основные алгоритмы сортировки и поиска.
                        - Двоичная система счисления.
                        Основы HTML/CSS:
                        - Отображать значения атрибутов
                        - Вес селектора
                        - Псевдоклассы и псевдоэлементы
                        - Коробчатая модель
                        - em против rem, относительные и абсолютные значения
                        - Позиционирование: поток документов, свойство позиции, переполнение и z-индекс.
                        - Флексбокс
                        - Сетка
                        ... 
                        Основы JS:
                        - Типы данных
                        - Переменные
                        - Числовые методы
                        - Строковые методы и строковые шаблоны
                        - Тернарные, нулевое объединение, необязательное связывание и логические операторы – синтаксис и варианты использования
                        - Случай переключателя — примеры, где это может быть полезно
                        - Циклы - for, while, do while
                        - Уметь обнаруживать случаи преобразования неявных типов данных в логические, строковые, числовые.
                        - Преобразования типов
                        - Строгое сравнение
                        `,
              type: "text",
            },
          ],
        },
        {
          title: "Theme Backend",
          children: [
            {
              title: 'new topic',
              // type: 'text',
            },
          ]
        },
        {
          title: "Definitions",
          children: [
            {
              title: "Reducers - чистая функция, которая принимает старый 'state' и 'action', и возвращает новое модифицированное состояние если это нужно. По правилам иммутабельности работает лишь с копией state.",
              type: "text",

            },
            {
              title: "Actions - объект, который содержит тип и payload, которые передаются в reducer.",
              type: "text",
            },
            {
              title: "Thunk - функция, которая возвращает другую функцию. ",
              type: "text",
            },
            {
              title: "Middleware - функция, которая принимает store и next и возвращает функцию, которая принимает action и вызывает next(action).",
              type: "text",
            },
            {
              title: "Selectors - функция, которая принимает state и возвращает его часть.",
              type: "text",
            },
            {
              title: 'HOC - Higher Order Component - функция, которая принимает компонент и возвращает новый компонент.',
              type: 'text',
            },
            {
              title: "Hooks - функции, которые позволяют использовать состояние и действия в функциональном компоненте.",
              type: "text",
            },
            {
              title: 'Promise - объект, который представляет асинхронное выполнение. Он может быть в состояниях "pending", "fulfilled" и "rejected".',
              type: "text",
            },
            {
              title: 'Callback - функция, которая вызывается после завершения асинхронного действия.',
              type: 'text',
            },
            {
              title: 'BLL - Business Logic Layer (слой бизнес логики).',
              type: 'text',
            },
            {
              title: 'DAL - Data Access Layer (слой доступа к данным).',
              type: 'text',
            },
            {
              title: 'UI - User Interface (пользовательский интерфейс).',
              type: 'text',
            },
            {
              title: 'API - Application Programming Interface (интерфейс программного обеспечения).',
              type: 'text',
            },
            {
              title: 'REST API - Representational State Transfer API (REST API).',
              type: 'text',
            },
            {
              title: 'Side Effects - эффекты, которые происходят в результате выполнения асинхронного действия.',
              type: 'text',
            },
            {
              title: 'OOP - Объектно-ориентированное программирование.',
              type: 'text',
            },
            {
              title: 'encapsulation - инкапсуляция, которая предотвращает доступ к необходимому коду извне.',
              type: 'text',
            },
            {
              title: 'polymorphism - полиморфизм, который позволяет обрабатывать различные объекты в одном коде.',
              type: 'text',
            },
            {
              title: 'inheritance - наследование, которое позволяет создавать новые классы на основе существующих.',
              type: 'text',
            },
            {
              title: 'constructor - конструктор, который вызывается при создании объекта.',
              type: 'text',
            },
            {
              title: 'super - ключевое слово, которое вызывается в конструкторе родительского класса.',
              type: 'text',
            },
            {
              title: 'this - ключевое слово, которое ссылается на текущий объект.',
              type: 'text',
            },
            {
              title: 'prototype - объект, который хранит ссылки на другие объекты.',
              type: 'text',
            },
            {
              title: 'bind - метод, который привязывает функцию к объекту.',
              type: 'text',
            },
            {
              title: 'Компонента - это функциональный компонент React возвращает JSX.',
              type: 'text',
            },
            {
              title: 'componentDidMount - это жизненный цикл компонента, который вызывается после его рендеринга.',
              type: 'text',
            },
            {
              title: '__proto__ - это свойство объекта, которое хранит ссылки на другие объекты.',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
            {
              title: '',
              type: 'text',
            },
          ]
        }
      ],
    },
    {
      title: "Style",
      children: [
        {
          title: "CSS",
          children: [
            {
              title: "CSS Grid Layout",
              type: "image",
              url: "https://i.pinimg.com/enabled_hi/564x/54/e9/87/54e98761c2348545244bf25487c5be23.jpg",
            },
            {
              title: `⚡️ Мультиколонки:
Основная идея мультиколонок заключается в том, что вы можете взять фрагмент содержимого и поместить его в несколько колонок, как в газете
              `,
              type: "code",
              code: `
.article-content {
  columns: auto 10rem;
}

.article {
    // Шорткат columns даёт возможность указать значения для 
    // свойств column-count и column-width одновременно, задав 
    // количество и ширину колонок
    columns: 2 200px;
    column-gap: 25px;
  }
  .title{
    // Свойство column-span позволяет элементу растянуться 
    // на несколько колонок
    column-span: all;
  }
}`,
            },
            {
              title: "HTML and CSS Slider",
              type: "video",
              url: "https://www.youtube.com/embed/gVxyTOPPEPc",
            },
          ],
        },
        {
          title: "SASS",
          children: [
            {
              title: "SASS cheat sheet",
              type: "image",
              url: "https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2023/07/how-sass-works-1024x506.png",
            },
          ],
        },
        {
          title: "SCSS",
          children: [
            {
              title: "SCSS cheat sheet",
              type: "image",
              url: "https://i0.wp.com/techprimelab.com/wp-content/uploads/2020/06/SCSS-or-CSS.jpg",
            },
          ],
        },
        {
          title: "styled-components",
          children: [
            {
              title: "styled-components cheat sheet",
              type: "image",
              url: "https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png",
            },
          ],
        },
      ],
    },
    {
      title: "IDE",
      children: [
        {
          title: "VS Code",
          children: [
            {
              title: "Visual Studio Code Справка по горячим клавишам",
              type: "link",
              url: "https://hotkeycheatsheet.com/ru/hotkey-cheatsheet/vscode",
            },
          ],
        },
        {
          title: "WebStorm",
          children: [
            {
              title: "WebStorm Справка по горячим клавишам",
              type: "link",
              url: "https://hotkeycheatsheet.com/ru/hotkey-cheatsheet/webstorm",
            },
          ],
        },
        {
          title: "Sublime Text 3",
          children: [
            {
              title: "Sublime Text 3 Справка по горячим клавишам",
              type: "link",
              url: "https://hotkeycheatsheet.com/ru/hotkey-cheatsheet/sublime-text-3",
            },
          ],
        },
        {
          title: "PyCharm",
          children: [
            {
              title: "PyCharm Справка по горячим клавишам",
              type: "link",
              url: "https://hotkeycheatsheet.com/ru/hotkey-cheatsheet/pycharm",
            },
          ],
        },
      ],
    },
    {
      title: "HTML",
      children: [
        {
          title: "Basic of HTML",
          type: "link",
          url: "https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics",
        },
        {
          title: `Атрибут for: 
          Он связывает элемент <label> с соответствующим полем <input>, позволяя пользователям 
          кликать по тексту метки для выбора или фокуса на связанном элементе управления.
          p.s. Значение атрибута for должно совпадать с id связанного элемента, что 
          улучшает доступность и удобство взаимодействия с формами.`,
          type: "code",
          code: `<label for="Number">Ваше любимое число:</label>
<input id="number">`,
        },
      ],
    },
  ],
};
