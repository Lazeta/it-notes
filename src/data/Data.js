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
                  title: `6.splice() => добавление нескольких элементов в массив; первый
                            аргумент указывает где начать вставку элементов по индексу; второй аргумент указывает
                            сколько элементов нужно удалить, если аргумент не указать, то удаления не будет,
                            просто добавится новый элемент в массиве; самые новые элементы указываются в скобках
                            данного метода в кавычках,`,
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
                  title: `13.filter() => создает новый массив из всех элементов соответствующих
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
                  title: "empty",
                  type: "text",
                },
              ],
            },
            {
              title: "Numbers Methods",
              children: [
                {
                  title: "empty",
                  type: "text",
                },
              ],
            },
            {
              title: "Object Methods",
              children: [
                {
                  title: "empty",
                  type: "video",
                  url: "https://www.youtube.com/embed/lo7o91qLzxc",
                },
              ],
            },
          ],
        },
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
      ],
    },
    {
      title: "Interview",
      children: [
        {
          title: "Theme frontend",
          children: [
            {
              title: `
                        Темы интервью 📚:
                        - Основы ООП.
                        - Основные структуры данных и их организация (массив, список, стек, очередь, дерево, хеш-таблица и т.д.).
                        - Возможность реализовать довольно простой алгоритм на JavaScript. Примеры задач
                        - Основные алгоритмы сортировки и поиска.
                        - Двоичная система счисления.
                        - Несколько вопросов по задачам, решенным на этапе №1.
                        - Основы HTML/CSS:
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
      ],
    },
  ],
};
