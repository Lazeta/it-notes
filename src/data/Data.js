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
  ],
};
