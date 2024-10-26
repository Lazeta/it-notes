// export type Item = {
//     title?: string;
//     type?: "link" | "image" | "text";
//     url?: string;
//     description?: string;
//     subtopics?: Subtopic[];
// };

// export type Subtopic = {
//     title?: string;
//     items?: Item[];
//     description?: string;
//     subtopics?: Subtopic[];
// };

export const Data = [
    {
        title: "React",
        subtopics: [
            {
                title: "React JS",
                description: "Learn about React JS.",
                items: [
                    { title: "Introduction to React JS", type: "link", url: "https://it-shpora.pp.ua/category/react/", description: "Learn about React JS." },
                    { title: "Advanced React JS", type: "link", url: "https://devdocs.io/react/", description: "https://devdocs.io/react/" },
                    { title: "Storybook", type: "link", url: "https://storybook.js.org/docs/writing-stories", description: "How to write stories" },
                    { title: "React JS Drag to Select", type: "link", url: "https://www.joshuawootonn.com/react-drag-to-select", description: "This past summer, I led a project at Makeswift to rework our file manager. Makeswift is a website builder and many of our users have hundreds of files. To manage hundreds of anything you need bulk operations, but bulk operations aren't helpful if selecting things is cumbersome, so drag selection was a key part of my vision for making Makeswift's file manager feel native." },
                ],
            },
            {
                title: "React TS",
                description: "Learn about React TypeScript.",
                items: [
                    { title: "Introduction to React TypeScript", description: "Basics of React Typescript." },
                    { title: "Advanced React Typescript", description: "Deep dive into React Typescript." },
                ],
            },
            {
                title: "React Native",
                description: "Learn about React Native.",
                items: [
                    { title: "Introduction to React Native", description: "Basics React Native." },
                    { title: "Advanced React Native", description: "Deep dive into React Native." },
                ],
            },
        ],
    },
    {
        title: "Vue",
        subtopics: [
            {
                title: "Vue JS",
                description: "Learn about Vue JS.",
                items: [
                    { title: "Introduction to React", description: "Basics of Vue." },
                    { title: "Advanced React", description: "Deep dive into Vue." },
                ],
            },
        ],
    },
    {
        title: "Angular",
        subtopics: [
            {
                title: "Angular JS",
                description: "Learn about Angular JS.",
                items: [
                    { title: "Introduction to Angular JS", description: "Basics of Angular JS." },
                    { title: "Advanced Angular JS", description: "Deep dive into Angular JS." },
                ],
            },
        ],
    },
    {
        title: "Node.js",
        subtopics: [
            {
                title: "Node.js with Express",
                description: "Learn about Node.js and Express.",
                items: [
                    { title: "Introduction to Node.js", description: "Basics of Node.js." },
                    { title: "Advanced Node.js", description: "Deep dive into Node.js." },
                ],
            },
        ],
    },
    {
        title: "JavaScript",
        subtopics: [
            {
                title: "ES6",
                description: "Learn about ES6 features in JavaScript.",
                items: [
                    {
                        type: "text",
                        description: "Basics of ES6."
                    },
                ],
            },
            {
                title: "Asynchronous Programming",
                description: "Learn about callbacks, promises, and async/await.",
                items: [
                    {
                        type: "text",
                        description: "Basics of async programming."
                    },
                ],
            },
            {
                title: "JavaScript Frameworks",
                description: "Overview of popular JavaScript frameworks.",
                items: [
                    {
                        type: "link",
                        url: "https://example.com",
                        description: "Learn more about frameworks."
                    },
                ],
            },
            {
                title: "DOM Manipulation",
                description: "Learn about manipulating the DOM with JavaScript.",
                items: [
                    {
                        type: "link",
                        url: "https://example.com",
                        description: "Learn more about DOM Manipulation."
                    },
                ],
            },
            {
                title: "Drag and Drop",
                items: [
                    {
                        title: "mouse drag and drop",
                        type: "link",
                        url: "https://learn.javascript.ru/mouse-drag-and-drop",
                        description: "https://learn.javascript.ru/mouse-drag-and-drop"
                    }
                ]
            },
            {
                title: "Methods",
                items: [
                    {
                        title: "Arrays",
                        description: "Array methods and functions.",
                        subtopics: [ // Подкатегории для методов массива
                            {
                                title: "Array Methods",
                                items: [
                                    {
                                        type: "text",
                                        description: "1. pop() => removes the last element from an array."
                                    },
                                    {
                                        type: "text",
                                        description: "2.shift() => удаляет элемент в начале массива",
                                    },
                                    {
                                        type: "text",
                                        description: "3.push() => добавляется несколько элементов в конец массива",
                                    },
                                    {
                                        type: "text",
                                        description: "4.unshift() => добавляет несколько элементов в начало массива",
                                    },
                                    {
                                        type: "text",
                                        description: "5.length => получаем число элементов массива",
                                    },
                                    {
                                        type: "text",
                                        description: `6.splice() => добавление нескольких элементов в массив; первый
                                            аргумент указывает где начать вставку элементов по индексу; второй аргумент указывает
                                            сколько элементов нужно удалить, если аргумент не указать, то удаления не будет,
                                            просто добавится новый элемент в массиве; самые новые элементы указываются в скобках
                                            данного метода в кавычках,`
                                    },
                                    {
                                        type: "text",
                                        description: `7.slice() => вырезает один или несколько элементов массива
                                            через указатель аргумента начала вырезания и второй аргумент где закончить срез;
                                            принимает отрицательные значения.`,
                                    },
                                    {
                                        type: "text",
                                        description: `8.concat() => конкатенация двух массивов`,
                                    },
                                    {
                                        type: "text",
                                        description: `9.map() => принимает массив и применяет указанную функцию для
                                            всех элементов массива; возвращает новый массив.`,
                                    },
                                    {
                                        type: "text",
                                        description: `10.every() => проверяет, соответствуют ли все элементы указанному
                                            массиву определённому условию; если все элементы соответствуют условию, то возвращает
                                            метод true, в противном случае вернёт false.`,
                                    },
                                    {
                                        type: "text",
                                        description: `11.includes() => проверяет на наличие в массиве элемента; если
                                            элемент найден, то возвращает true.`,
                                    },
                                    {
                                        type: "text",
                                        description: `12.spread() => превращает массив в строки с помощью специальных
                                            разделителей … сохраняет между ними границу или по умолчанию между строками образуются
                                            пробелы.`,
                                    },
                                    {
                                        type: "text",
                                        description: `13.filter() => создает новый массив из всех элементов соответствующих
                                            заданному условию.`,
                                    },
                                    {
                                        type: "text",
                                        description: "14.reduce(function (previousValue, item, index, array) { … }, [initial]); => сводит массив к одному значению."
                                    },
                                    {
                                        type: "text",
                                        description: "15.reduceRight() => сводит массив к одному значение с права на лево.",
                                    },
                                    {
                                        type: "text",
                                        description: `16.indexOf() => возвращает первый индекс по которому может быть найден
                                            элемент в массиве и -1 если такого элемента нет; это не тоже самое что и Boolean values,
                                            мы можем получать 2 и более индекса совпадений по массиву.`
                                    },
                                    {
                                        type: "text",
                                        description: `17.sort() => возвращает отсортированный массив; если compareFunction
                                            предоставлена, то массив сортируется в соответствиями с этими условиями.`
                                    },
                                    {
                                        type: "text",
                                        description: `18.find() => возвращает значение первого найденного в массиве элемента,
                                            который удовлетворяет условию указанных в функции, в противном случае возвращает undefined.`
                                    },
                                    {
                                        type: "text",
                                        description: `19.findIndex() => возвращает индекс в массиве, если элемент удовлетворяет
                                            условиям проверяющей функции, в противном случае вернёт -1.`
                                    },
                                    {
                                        type: "text",
                                        description: `20.forEach(function (item, index, array) { … } => выполняет указанную
                                            функцию один раз для каждого элемента в массиве.`
                                    },
                                    {
                                        type: "text",
                                        description: "21.join(‘, ’) => преобразовывает массив в строку с заданным разделителем.",
                                    },
                                    {
                                        type: "text",
                                        description: "22.isArray() => проверяем массив ли этот объект или нет.",
                                    },
                                    {
                                        type: "link",
                                        url: "https://learn.javascript.ru/array-methods",
                                        description: "Learn more about array methods."
                                    },
                                    {
                                        type: "image",
                                        url: "https://www.example.com/path/to/image.jpg",
                                        description: "Visual representation of array methods."
                                    },
                                ]
                            },
                            {
                                title: "Strings Methods",
                                items: [
                                    {

                                    }
                                ]
                            },
                            {
                                title: "Numbers Methods",
                                items: [
                                    {

                                    }
                                ]
                            },
                            {
                                title: "Object Methods",
                                items: [
                                    {

                                    }
                                ]
                            }
                        ],
                    },
                ],
            },
        ]
    },
    {
        title: "Interview",
        subtopics: [
            {
                title: "Theme frontend",
                items: [
                    {
                        title: "Questions for Frontend theme",
                        type: "text",
                        description: `
                        Темы интервью 📚:
                        Основы ООП.
                        Основные структуры данных и их организация (массив, список, стек, очередь, дерево, хеш-таблица и т. д.).
                        Возможность реализовать довольно простой алгоритм на JavaScript. Примеры задач
                        Основные алгоритмы сортировки и поиска.
                        Двоичная система счисления.
                        Несколько вопросов по задачам, решенным на этапе №1.
                        Основы HTML/CSS:
                        Отображать значения атрибутов
                        Вес селектора
                        Псевдоклассы и псевдоэлементы
                        Коробчатая модель
                        em против rem, относительные и абсолютные значения
                        Позиционирование: поток документов, свойство позиции, переполнение и z-индекс.
                        Флексбокс
                        Сетка
                        ...
                        Основы JS:
                        Типы данных
                        Переменные
                        Числовые методы
                        Строковые методы и строковые шаблоны
                        Тернарные, нулевое объединение, необязательное связывание и логические операторы – синтаксис и варианты использования
                        Случай переключателя — примеры, где это может быть полезно
                        Циклы - for, while, do while
                        Уметь обнаруживать случаи преобразования неявных типов данных в логические, строковые, числовые.
                        Преобразования типов
                        Строгое сравнение
                        `
                    }
                ]
            },
        ]
    },
    {
        title: "Style",
        subtopics: [
            {
                title: "CSS",
                items: [
                    { title: "CSS Grid Layout", description: "cheat sheet for CSS grid layout", type: "image", url: "https://i.pinimg.com/enabled_hi/564x/54/e9/87/54e98761c2348545244bf25487c5be23.jpg" },
                ]
            },
            {
                title: "SASS",
                items: [{

                }]
            },
            {
                title: "SCSS",
                items: [{

                }]
            },
            {
                title: "styled-components",
                items: [{

                }]
            },
            {
                title: "SASS",
                items: [{
                    
                }]
            },
        ]
    },
]