export const data = {
  title: "All",
  children: [
    {
      title: "HTML/CSS",
      children: [
        {
          title: "Style",
          children: [
            {
              title: "CSS",
              children: [
                {
                  title: "Способы подключения стилей в HTML",
                  children: [
                    {
                      title: "1. Внешний стиль (External CSS)",
                      type: "list",
                      description: `
                        <p>Подключение стилей через отдельный файл:</p>
                        <ul>
                          <li><strong>Используемый тег</strong>: <code>&lt;link&gt;</code>.</li>
                          <li><strong>Пример</strong>: 
                            <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>.
                          </li>
                          <li><strong>Преимущества</strong>: Упрощает управление стилями и позволяет повторно использовать их на нескольких страницах.</li>
                        </ul>
                      `,
                    },
                    {
                      title: "2. Встроенный стиль (Internal CSS)",
                      type: "list",
                      description: `
                        <p>Подключение стилей в <code>&lt;head&gt;</code> документа:</p>
                        <ul>
                          <li><strong>Используемый тег</strong>: <code>&lt;style&gt;</code>.</li>
                          <li><strong>Пример</strong>: 
                            <code>&lt;style&gt; body { background-color: lightblue; } &lt;/style&gt;</code>.
                          </li>
                          <li><strong>Преимущества</strong>: Удобно для небольших проектов или когда стили специфичны для одной страницы.</li>
                        </ul>
                      `,
                    },
                    {
                      title: "3. Инлайновый стиль (Inline CSS)",
                      type: "list",
                      description: `
                        <p>Применение стилей непосредственно к элементам:</p>
                        <ul>
                          <li><strong>Используемый атрибут</strong>: <code>style</code>.</li>
                          <li><strong>Пример</strong>: 
                            <code>&lt;h1 style="color: red;"&gt;Заголовок&lt;/h1&gt;</code>.
                          </li>
                          <li><strong>Преимущества</strong>: Быстрое применение стилей к отдельным элементам, но может привести к дублированию кода.</li>
                        </ul>
                      `,
                    },
                  ],
                },
                {
                  title: "Вес селектора или что такое специфичность в CSS",
                  children: [
                    {
                      title:
                        "Специфичность в CSS определяет, какой стиль применяется к элементу при наличии множества правил. Она рассчитывается на основе различных типов селекторов:",
                      type: "code",
                      description: `
                        <ul>
                          <li><strong>глобальный селектор *</strong>: не имеет веса</li>
                          <li><strong>Инлайновые стили</strong>: 1000</li>
                          <li><strong>ID-селекторы</strong>: 100</li>
                          <li><strong>Классы, атрибуты и псевдоклассы</strong>: 10</li>
                          <li><strong>Теги и псевдоэлементы</strong>: 1</li>
                        </ul>
                        <p>Пример:</p>
                      `,
                      code: `
          // Специфичность: 0 (глобальный селектор)
          * {
            color: black;
          }                    
        
          /* Специфичность: 1 (тег) */
          p {
            color: blue;
          }
        
          /* Специфичность: 10 (класс) */
          .myClass {
            color: red;
          }
        
          /* Специфичность: 100 (ID) */
          #myId {
            color: green;
          }
        
          /* Специфичность: 1000 (инлайн стиль) */
          &lt;p style="color: yellow;"&gt;Hello&lt;/p&gt;
                      `,
                    },
                  ],
                },
                {
                  title: "Псевдоклассы и псевдоэлементы",
                  children: [
                    {
                      title:
                        "Псевдоклассы и псевдоэлементы позволяют стилизовать элементы на основе их состояния или позиции:",
                      type: "code",
                      description: `
                        <ul>
                          <li><strong>Псевдоклассы</strong>: <code>:hover</code>, <code>:focus</code>, <code>:nth-child()</code></li>
                          <li><strong>Псевдоэлементы</strong>: <code>::before</code>, <code>::after</code>, <code>::first-line</code></li>
                        </ul>
                        <p>Пример:</p>
                      `,
                      code: `
  /* Псевдокласс */
  a:hover {
  color: blue;
  }

  /* Псевдоэлемент */
  p::first-line {
  font-weight: bold;
  }
                      `,
                    },
                  ],
                },
                {
                  title: "Коробчатая модель (box-sizing)",
                  children: [
                    {
                      title:
                        "Коробчатая модель описывает пространство, занимаемое элементом",
                      type: "code",
                      description: `
                        <p>Она включает в себя следующие свойства:</p>
                        <ul>
                          <li><strong>Content</strong>: Содержимое элемента.</li>
                          <li><strong>Padding</strong>: Поля вокруг содержимого.</li>
                          <li><strong>Border</strong>: Граница вокруг элемента.</li>
                          <li><strong>Margin</strong>: Отступы между элементами.</li>
                        </ul>
                        <p>Пример:</p>
                      `,
                      code: `
  div {
    margin: 10px;
    border: 1px solid black;
    padding: 5px;
    width: 100px;
  }
                      `,
                    },
                  ],
                },
                {
                  title: "em против rem, относительные и абсолютные значения",
                  children: [
                    {
                      title:
                        "<code>em</code> и <code>rem</code> - это относительные единицы измерения, используемые в CSS:",
                      type: "code",
                      description: `
                        <ul>
                          <li><strong>em</strong>: Относится к текущему элементу. Если размер шрифта родительского элемента равен 16px, то 1em = 16px.</li>
                          <li><strong>rem</strong>: Относится к корневому элементу (обычно <code>html</code>). Если размер шрифта корневого элемента равен 16px, то 1rem = 16px.</li>
                        </ul>
                        <p>Пример:</p>
                      `,
                      code: `
  h1 {
  font-size: 2em; /* 32px, если родительский элемент имеет размер 16px */
  }

  p {
  font-size: 1.5rem; /* 24px */
  }
                      `,
                    },
                  ],
                },
                {
                  title: "Позиционирование: поток документов, overflow, z-index",
                  children: [
                    {
                      title:
                        "Позиционирование в CSS управляет размещением элементов на странице:",
                      type: "code",
                      description: `
                        <ul>
                          <li><strong>static</strong>: Обычное потоковое позиционирование.</li>
                          <li><strong>relative</strong>: Относительное позиционирование, элемент сдвигается относительно своего обычного положения.</li>
                          <li><strong>absolute</strong>: Абсолютное позиционирование относительно ближайшего родительского элемента.</li>
                          <li><strong>fixed</strong>: Фиксированное позиционирование относительно окна браузера.</li>
                          <li><strong>sticky</strong>: Элемент ведет себя как <code>relative</code> до определенной точки, после чего становится <code>fixed</code>.</li>
                        </ul>
                        <p>Пример:</p>
                      `,
                      code: `
  .relative {
  position: relative;
  top: 10px;
  }

  .absolute {
  position: absolute;
  top: 20px;
  }

  .fixed {
  position: fixed;
  top: 0;
  }
                      `,
                    },
                    {
                      title: "Переполнение (Overflow)",
                      type: "list",
                      description: `
                        <p>Свойство <code>overflow</code> в CSS управляет тем, как обрабатывается содержимое, выходящее за пределы блока. Оно может принимать следующие значения:</p>
                        <ul>
                          <li><strong>visible</strong>: Содержимое не обрезается; его можно видеть за пределами элемента (значение по умолчанию).</li>
                          <li><strong>hidden</strong>: Содержимое, выходящее за пределы элемента, скрыто.</li>
                          <li><strong>scroll</strong>: Содержимое скрыто, но добавляются полосы прокрутки для доступа к нему.</li>
                          <li><strong>auto</strong>: Полосы прокрутки добавляются только при необходимости.</li>
                        </ul>
                      `,
                    },
                    {
                      title: "Пример использования overflow",
                      type: "code",
                      description: `
                        <p>Пример CSS с использованием свойства <code>overflow</code>:</p>
                      `,
                      code: `
  .container {
    width: 200px;
    height: 100px;
    overflow: scroll; /* Добавляет полосы прокрутки */
  }
                      `,
                    },
                    {
                      title: "z-индекс (z-index)",
                      type: "list",
                      description: `
                        <p>Свойство <code>z-index</code> управляет порядком наложения элементов на странице. Оно определяет, какой элемент будет отображаться сверху, когда элементы перекрываются. Некоторые важные моменты:</p>
                        <ul>
                          <li><strong>Числовые значения</strong>: Элементы с большим значением <code>z-index</code> отображаются выше элементов с меньшим значением.</li>
                          <li><strong>Контекст наложения</strong>: <code>z-index</code> работает только для элементов, у которых задано свойство <code>position</code> (relative, absolute, fixed или sticky).</li>
                          <li><strong>Значение по умолчанию</strong>: Элементы без заданного <code>z-index</code> имеют значение по умолчанию 0.</li>
                        </ul>
                      `,
                    },
                    {
                      title: "Пример использования z-index",
                      type: "code",
                      description: `
                        <p>Пример CSS с использованием свойства <code>z-index</code>:</p>
                      `,
                      code: `
  .box1 {
    position: absolute;
    z-index: 1; /* Находится ниже */
  }

  .box2 {
    position: absolute;
    z-index: 2; /* Находится выше */
  }
                      `,
                    },
                  ],
                },

                {
                  title: "Флексбокс",
                  children: [
                    {
                      title:
                        "Флексбокс - это метод расположения элементов в одной строке или колонке с возможностью изменения их размеров:",
                      type: "code",
                      description: `
                        <ul>
                          <li><strong>display: flex</strong>: Включает флексбокс на родительском элементе.</li>
                          <li><strong>flex-direction</strong>: Определяет направление основного оси (row, column).</li>
                          <li><strong>justify-content</strong>: Управляет расположением элементов вдоль главной оси.</li>
                          <li><strong>align-items</strong>: Управляет расположением элементов вдоль поперечной оси.</li>
                        </ul>
                        <p>Пример:</p>
                        `,
                      code: `               
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
                      `,
                    },
                  ],
                },
                {
                  title: "Сетка",
                  children: [
                    {
                      title: "CSS Grid",
                      type: "code",
                      description: `
                      <p>CSS Grid - это мощный инструмент для создания гибких и сложных макетов. Основные моменты:</p>
                      <ul>
                        <li>Создает двумерные сетки</li>
                        <li>Контролирует размещение элементов по строкам и колонкам</li>
                        <li>Задает размер и расстояние между элементами</li>
                      </ul>
                      <p>Пример:</p>
                      `,
                      code: `
  .grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 колонки */
  gap: 10px; /* расстояние между элементами */
  }
                      `,
                    },
                  ],
                },
                {
                  title: "CSS Grid Layout",
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
                  ]
                },
                {
                  title: "Разница между блочными и строчными элементами",
                  children: [
                    {
                      title: "Блочные элементы",
                      type: "list",
                      description: `
                        <p>Характеристики блочных элементов:</p>
                        <ul>
                          <li><strong>Занимают всю ширину</strong>: Блочные элементы по умолчанию занимают всю доступную ширину контейнера.</li>
                          <li><strong>Начинают новую строку</strong>: Каждый блочный элемент начинается с новой строки, что создает визуальное разделение между элементами.</li>
                          <li><strong>Примеры</strong>: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;section&gt;</code>.</li>
                        </ul>
                      `,
                    },
                    {
                      title: "Строчные элементы",
                      type: "list",
                      description: `
                        <p>Характеристики строчных элементов:</p>
                        <ul>
                          <li><strong>Занимают только необходимую ширину</strong>: Строчные элементы занимают только ту ширину, которая необходима для их содержания.</li>
                          <li><strong>Не начинают новую строку</strong>: Строчные элементы располагаются в одной строке с другими элементами, не создавая разрывов.</li>
                          <li><strong>Примеры</strong>: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;img&gt;</code>.</li>
                        </ul>
                      `,
                    },
                    {
                      title: "Сводная таблица различий",
                      type: "list",
                      description: `
                        <p>Краткое сравнение:</p>
                        <ul>
                          <li><strong>Ширина</strong>: Блочные элементы — 100% ширины; строчные элементы — по содержимому.</li>
                          <li><strong>Перенос</strong>: Блочные элементы переносят последующий контент на новую строку; строчные элементы — нет.</li>
                          <li><strong>Использование</strong>: Блочные элементы для структуры; строчные элементы для форматирования текста.</li>
                        </ul>
                      `,
                    },
                  ],
                },
                {
                  title: "HTML and CSS Slider",
                  children: [
                    {
                      title: "",
                      type: "video",
                      url: "https://www.youtube.com/embed/gVxyTOPPEPc",
                    },
                  ]
                },
                {
                  title: "Принципы семантической верстки",
                  children: [
                    {
                      title: "Принципы семантической верстки включают:",
                      type: "code",
                      description: `
                      <ul>
                        <li>Использование HTML-тегов по назначению (например, &lt;header&gt;, &lt;article&gt;, &lt;footer&gt;).</li>
                        <li>Обеспечение доступности для технологий помощников (скринридеров).</li>
                        <li>Улучшение SEO (поисковой оптимизации).</li>
                      </ul>
                      <p>Пример:</p>
                      `,
                      code: `
  <article>
  <header>
  <h1>Заголовок статьи</h1>
  </header>
  <p>Содержимое статьи...</p>
  <footer>Автор: Иван Иванов</footer>
  </article>
                      `,
                    },
                  ],
                },
                {
                  title: "Что такое #shadow-root в инспекторе HTML-страницы",
                  children: [
                    {
                      title:
                        "Shadow DOM позволяет создавать отдельные области DOM, чтобы избежать конфликтов стилей",
                      type: "list",
                      description: `
                              <ul>
                                  <li>Поддержка инкапсуляции: Стили внутри Shadow DOM не влияют на родительский DOM.</li>
                                  <li>Упрощение разработки компонентов: Позволяет создавать защищенные компоненты.</li>
                              </ul>
                      `,
                    },
                  ],
                },
                {
                  title: "Названия популярных CSS-методологий и их отличия",
                  children: [
                    {
                      title: "Существует несколько популярных CSS-методологий:",
                      type: "list",
                      description: `
                              <ul>
                                  <li><strong>BEM</strong> (Block, Element, Modifier) - способствует созданию доступных и модульных стилей.</li>
                                  <li><strong>SMACSS</strong> (Scalable and Modular Architecture for CSS) - структурирует стили по категориям.</li>
                                  <li><strong>OOCSS</strong> (Object-Oriented CSS) - акцентирует внимание на создании повторно используемых объектов.</li>
                              </ul>
                      `,
                    },
                  ],
                },
                {
                  title: "Как изменить цвет в svg файле",
                  children: [
                    {
                      title: "Изменение цвета",
                      type: "code",
                      description: `
                              <p>Существует несколько способов изменить цвет в SVG:</p>
                              <ul>
                                  <li>Изменение атрибутов <code>fill</code> и <code>stroke</code> в самом SVG файле.</li>
                                  <li>Использование CSS для стилизации SVG элементов.</li>
                                  <li>Динамическое изменение с помощью JavaScript.</li>
                              </ul>
                      `,
                      code: `
  // изменение атрибутов
  <svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="red" stroke="black" 
      stroke-width="2" />
  </svg>
  
  
  // использование CSS 
  <svg width="100" height="100">
  <style>
  .myCircle {
  fill: blue;
  stroke: green;
  stroke-width: 3;
  }
  </style>
  <circle class="myCircle" cx="50" cy="50" r="40" />
  </svg>
  
  
  // динамическое изменение
  <svg id="mySvg" width="100" height="100">
  <circle id="myCircle" cx="50" cy="50" r="40" fill="orange" 
      stroke="black" stroke-width="2" />
  </svg>
  
  <button onclick="changeColor()">Изменить цвет</button>
  
  <script>
  function changeColor() {
  var circle = document.getElementById("myCircle");
  circle.setAttribute("fill", "purple");  // Изменяем цвет заливки
  circle.setAttribute("stroke", "yellow"); // Изменяем цвет обводки
  }
  </script>
                      `,
                    },
                  ],
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
          title: "Создание макета в HTML и CSS",
          children: [
            {
              title: "HTML атрибуты для создания макета:",
              type: "code",
              description: `
                <ul>
                  <li><strong>Атрибуты <code>div</code>:</strong>
                    <ul>
                      <li><code>id</code>: Уникальный идентификатор элемента.</li>
                      <li><code>class</code>: Классы для стилизации с помощью CSS.</li>
                    </ul>
                  </li>
                  <li><strong>Семантические элементы:</strong>
                    <ul>
                      <li><code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>: Используются для структурирования страницы.</li>
                    </ul>
                  </li>
                  <li><strong>Встраиваемый стиль:</strong>
                    <ul>
                      <li>Пример использования <code>style</code>:</li>
                    </ul>
                  </li>
                </ul>
              `,
              code: `
  <div style="width: 50%; float: left;">Контент</div>
              `,
            },
            {
              title: "CSS свойства для создания макета:",
              type: "code",
              description: `
                <ul>
                  <li><strong>Свойство <code>display</code>:</strong>
                    <ul>
                      <li><code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>flex</code>, <code>grid</code></li>
                    </ul>
                  </li>
                  <li><strong>Свойство <code>position</code>:</strong>
                    <ul>
                      <li><code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code></li>
                    </ul>
                  </li>
                  <li><strong>Свойства <code>margin</code> и <code>padding</code>:</strong> Используются для управления пространством между элементами и внутри элемента.</li>
                  <li><strong>Свойства <code>width</code> и <code>height</code>:</strong> Задают размеры элемента.</li>
                </ul>
              `,
              code: `
  .container {
    display: flex;
    justify-content: center; /* Выравнивание по горизонтали */
    align-items: center; /* Выравнивание по вертикали */
  }
              `,
            },
            {
              title: "HTML5 семантические элементы:",
              type: "list",
              description: `
                <ul>
                  <li><strong>&lt;header&gt;</strong>, <strong>&lt;nav&gt;</strong>, <strong>&lt;main&gt;</strong>, <strong>&lt;section&gt;</strong>, <strong>&lt;article&gt;</strong>, <strong>&lt;aside&gt;</strong>, <strong>&lt;footer&gt;</strong>: Эти элементы помогают улучшить SEO и доступность.</li>
                </ul>
              `,
            },
            {
              title: "Flexbox и Grid для создания макетов:",
              type: "code",
              description: `
                <ul>
                  <li><strong>Flexbox:</strong> Упрощает выравнивание элементов вдоль одной оси.</li>
                  <li><strong>Grid:</strong> Позволяет создавать сеточные макеты, определяя колонки и строки.</li>
                </ul>
              `,
              code: `
  /* Flexbox */
  .container {
    display: flex;
    justify-content: center; /* Выравнивание по горизонтали */
    align-items: center; /* Выравнивание по вертикали */
  }

  /* Grid */
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Три равные колонки */
  }
              `,
            },
          ],
        },
        {
          title: "Состав базовой HTML-страницы",
          children: [
            {
              title: "<!DOCTYPE html>",
              type: "list",
              description: `
                <p>Объявляет тип документа и версию HTML:</p>
                <ul>
                  <li><strong>Версия</strong>: Обычно используется HTML5.</li>
                </ul>
              `,
            },
            {
              title: "<html>",
              type: "list",
              description: `
                <p>Корневой элемент HTML-документа:</p>
                <ul>
                  <li><strong>Атрибуты</strong>: Может содержать атрибут <code>lang</code> для указания языка.</li>
                </ul>
              `,
            },
            {
              title: "<head>",
              type: "list",
              description: `
                <p>Содержит метаданные о документе:</p>
                <ul>
                  <li><strong><meta charset="UTF-8"></strong>: Устанавливает кодировку документа.</li>
                  <li><strong><meta name="viewport"></strong>: Настройки для адаптивного дизайна и отображения на мобильных устройствах.</li>
                  <li><strong><title></strong>: Заголовок, отображаемый на вкладке браузера.</li>
                  <li><strong><link></strong>: Подключение внешних CSS-файлов.</li>
                  <li><strong><script></strong>: Подключение внешних JavaScript-файлов (если необходимо).</li>
                </ul>
              `,
            },
            {
              title: "<body>",
              type: "list",
              description: `
                <p>Основное содержимое страницы:</p>
                <ul>
                  <li><strong><header></strong>: Заголовок или навигация сайта.</li>
                  <li><strong><main></strong>: Основной контент страницы.</li>
                  <li><strong><footer></strong>: Нижний колонтитул с информацией о правами и ссылками.</li>
                </ul>
              `,
            },
          ],
        },




        {
          title: "На что нужно обратить внимание при разработке мультиязычных сайтов",
          children: [
            {
              title:
                "При разработке мультиязычных сайтов стоит учитывать:",
              type: "code",
              description: `
              <ul>
                <li>Хранение текста: использовать JSON или базы данных для хранения переведенных текстов.</li>
                <li>Изменение языка: обеспечить пользовательский интерфейс для смены языка.</li>
                <li>SEO: использовать атрибут &lt;html lang="en"&gt; для указания языка страницы.</li>
              </ul>
              <p>Пример:</p>
              `,
              code: `
  <html lang="ru">
    <head>
      <meta charset="UTF-8">
    </head>
  </html>
              `,
            },
          ],
        },
        {
          title: "Что такое прогрессивная развертка",
          children: [
            {
              title:
                "Прогрессивная развертка - это подход к разработке страниц, при котором отображение контента происходит по мере его загрузки",
              type: "code",
              description: `
              <ul>
                <li>Сначала загружается основной контент</li>
                <li>Второстепенный контент загружается позже</li>
              </ul>
              <p>Пример:</p>
              `,
              code: `
  // Пример с использованием JavaScript для прогрессивной загрузки
  fetch('/api/content')
    .then(response => response.json())
    .then(data => {
  document.getElementById('content').innerHTML = data.content;
  });
              `,
            },
          ],
        },
        {
          title: "Разница между script, script async и script defer",
          children: [
            {
              title: "Загрузки скриптов",
              type: "code",
              description: `
              <p>Существует три способа подключения скриптов в HTML:</p>
              <ul>
                <li>&lt;script&gt;: Загружает и выполняет скрипт синхронно.</li>
                <li>&lt;script async&gt;: Загружает скрипт асинхронно, не блокируя загрузку страницы.</li>
                <li>&lt;script defer&gt;: Также загружает скрипт асинхронно, но гарантирует, что он будет выполнен после полной загрузки HTML.</li>
              </ul>
              <p>Пример:</p>
              `,
              code: `
  <script src="script.js"></script>
  <script async src="script-async.js"></script>
  <script defer src="script-defer.js"></script>
              `,
            },
          ],
        },
        {
          title: "Подключение JavaScript-скриптов в HTML",
          children: [
            {
              title: "1. Внешний скрипт (External Script)",
              type: "list",
              description: `
                <p>Подключение скрипта через отдельный файл:</p>
                <ul>
                  <li><strong>Используемый тег</strong>: <code>&lt;script&gt;</code>.</li>
                  <li><strong>Пример</strong>: 
                    <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>.
                  </li>
                  <li><strong>Преимущества</strong>: Упрощает организацию кода и позволяет повторно использовать скрипты на нескольких страницах.</li>
                </ul>
              `,
            },
            {
              title: "2. Встроенный скрипт (Internal Script)",
              type: "list",
              description: `
                <p>Подключение скрипта непосредственно в документе:</p>
                <ul>
                  <li><strong>Используемый тег</strong>: <code>&lt;script&gt;</code>.</li>
                  <li><strong>Пример</strong>: 
                    <code>&lt;script&gt; console.log('Hello, world!'); &lt;/script&gt;</code>.
                  </li>
                  <li><strong>Преимущества</strong>: Удобно для небольших скриптов, специфичных для одной страницы.</li>
                </ul>
              `,
            },
            {
              title: "Атрибуты тега <script>",
              type: "list",
              description: `
                <p>Основные атрибуты:</p>
                <ul>
                  <li><strong>src</strong>: Указывает путь к внешнему JavaScript-файлу.</li>
                  <li><strong>defer</strong>: Загружает скрипт после завершения парсинга HTML-документа. Работает только с внешними скриптами.</li>
                  <li><strong>async</strong>: Загружает скрипт асинхронно, не блокируя парсинг HTML. Работает только с внешними скриптами.</li>
                  <li><strong>type</strong>: Указывает тип скрипта (по умолчанию <code>text/javascript</code>). Например, для модулей можно использовать <code>type="module"</code>.</li>
                  <li><strong>integrity</strong>: Используется для проверки целостности загружаемого файла с использованием Subresource Integrity (SRI).</li>
                  <li><strong>crossorigin</strong>: Определяет, как браузер должен обрабатывать кросс-доменные запросы для загружаемого скрипта.</li>
                </ul>
              `,
            },
          ],
        },
        {
          title: "Атрибут For",
          children: [
            {
              title: ``,
              type: "code",
              description: `
              Он связывает элемент <label> с соответствующим полем < input >, позволяя пользователям 
              кликать по тексту метки для выбора или фокуса на связанном элементе управления.
              p.s. Значение атрибута for должно совпадать с id связанного элемента, что 
              улучшает доступность и удобство взаимодействия с формами.
              `,
              code: `
  <label for="Number">Ваше любимое число:</label>
  <input id="number">`,
            },
          ]
        }
      ],
    },
    {
      title: "JavaScript",
      children: [
        {
          title: "ES6",
          children: [
            {
              title: "Destructuring assignment",
              type: "title",
            },
            {
              title: "Arrow functions () => {} ",
              type: "title",
            },
            {
              title: "Template strings `${}`",
              type: "title",
            },
            {
              title: "variable declaration with let and const",
              type: "title",
            },
            {
              title: "Classes",
              type: "title",
            },
            {
              title: "IIFE (immediately invoked function expression)",
              type: "title",
            },
            {
              title: "Multi-line strings",
              type: "title",
            },
            {
              title: "Promises",
              type: "title",
            },
            {
              title: "forEach and for...of",
              type: "title",
            },
            {
              title: "Default parameters",
              type: "title",
            },
            {
              title: "Rest-параметры и Spread-оператор ...",
              type: "title",
            },
          ],
        },
        {
          title: "Основные типы данных в JavaScript",
          children: [
            {
              title: "1. Числа (Number)",
              type: "list",
              description: `
                <p>Характеристики чисел:</p>
                <ul>
                  <li><strong>Тип данных</strong>: Представляют как целые, так и дробные числа.</li>
                  <li><strong>Примеры</strong>: <code>42</code>, <code>3.14</code>.</li>
                  <li><strong>Особенности</strong>: Поддерживают специальные значения, такие как <code>Infinity</code>, <code>-Infinity</code>, и <code>NaN</code> (не число).</li>
                </ul>
              `,
            },
            {
              title: "2. Строки (String)",
              type: "list",
              description: `
                <p>Характеристики строк:</p>
                <ul>
                  <li><strong>Тип данных</strong>: Последовательность символов, используемая для представления текста.</li>
                  <li><strong>Примеры</strong>: <code>"Hello, world!"</code>, <code>'JavaScript'</code>.</li>
                  <li><strong>Методы</strong>: Строки имеют множество методов, таких как <code>length</code>, <code>substring()</code>, <code>toUpperCase()</code>.</li>
                </ul>
              `,
            },
            {
              title: "3. Логические значения (Boolean)",
              type: "list",
              description: `
                <p>Характеристики логических значений:</p>
                <ul>
                  <li><strong>Тип данных</strong>: Представляют истинное (<code>true</code>) или ложное (<code>false</code>) значение.</li>
                  <li><strong>Примеры</strong>: <code>true</code>, <code>false</code>.</li>
                  <li><strong>Использование</strong>: Часто используются в условиях и циклах.</li>
                </ul>
              `,
            },
            {
              title: "4. Объекты (Object)",
              type: "list",
              description: `
                <p>Характеристики объектов:</p>
                <ul>
                  <li><strong>Тип данных</strong>: Сложные структуры, которые могут содержать множество значений и методов.</li>
                  <li><strong>Примеры</strong>: <code>{ name: "Alice", age: 25 }</code>, <code>new Date()</code>.</li>
                  <li><strong>Типы объектов</strong>: Могут быть встроенными (Array, Date и т.д.) или пользовательскими.</li>
                </ul>
              `,
            },
            {
              title: "5. Массивы (Array)",
              type: "list",
              description: `
                <p>Характеристики массивов:</p>
                <ul>
                  <li><strong>Тип данных</strong>: Специальный тип объекта, который хранит упорядоченные коллекции значений.</li>
                  <li><strong>Примеры</strong>: <code>[1, 2, 3]</code>, <code>["apple", "banana"]</code>.</li>
                  <li><strong>Методы</strong>: Массивы имеют множество методов, таких как <code>push()</code>, <code>pop()</code>, <code>map()</code>.</li>
                </ul>
              `,
            },
            {
              title: "6. Специальные значения",
              type: "list",
              description: `
                <p>Некоторые специальные значения:</p>
                <ul>
                  <li><strong>undefined</strong>: Переменная, которая была объявлена, но не инициализирована.</li>
                  <li><strong>null</strong>: Явное указание на отсутствие значения или объект.</li>
                  <li><strong>Symbol</strong>: Уникальные и неизменяемые идентификаторы (доступны с ES6).</li>
                  <li><strong>BigInt</strong>: Тип данных для работы с целыми числами произвольной длины (доступен с ES11).</li>
                </ul>
              `,
            },
          ],
        },
        {
          title: "Переменные let, const, var",
          children: [
            {
              title: "Область видимости переменных",
              type: "code",
              description: `
                <p>В JavaScript есть три типа областей видимости: глобальная, функция и блок.</p>
                <ul>
                  <li><strong>Глобальная</strong>: Переменные, доступные во всем скрипте.</li>
                  <li><strong>Функция</strong>: Переменные, доступные только внутри функции.</li>
                  <li><strong>Блок</strong>: Переменные, объявленные внутри блока (например, внутри 'if', 'for', и т. д.).</li>
                </ul>
              `,
              code: `
  let globalVar = 'I'm global';

  function testScope() {
  let functionVar = 'I'm local to function';
  if (true) {
  let blockVar = 'I exist only in this block';
  console.log(blockVar); // доступен здесь
  }
  console.log(functionVar); // доступен здесь
  // console.log(blockVar); // ошибка: blockVar не доступен здесь
  }
  console.log(globalVar); // доступен здесь
              `,
            },
            {
              title: "Описание переменных",
              type: "code",
              description: `
                <p><strong>var</strong>: Используется для объявления переменных. Переменные, объявленные с помощью var, имеют функциональную или глобальную область видимости и могут быть переопределены. Они также подвержены механизму поднятия (hoisting).</p>
                <p><strong>let</strong>: Вводится в ES6 (ECMAScript 2015). Используется для объявления переменных с блочной областью видимости. Переменные, объявленные с помощью let, не могут быть переопределены в пределах одной и той же области видимости. Также подвержены подъеманию, но не инициализируются до фактической строки кода.</p>
                <p><strong>const</strong>: Также введена в ES6. Используется для объявления констант, значение которых не может быть переопределено. Как и let, имеет блочную область видимости.</p>
              `,
              code: `
  var a = 'Hello';
  console.log(a); // 'Hello'

  let b = 'World';
  console.log(b); // 'World'

  const c = '!';
  console.log(c); // '!'
              `,
            },
            {
              title: "Сравнение области видимости",
              type: "code",
              description: `
                <p>Область видимости переменных var, let и const:</p>
                <ul>
                  <li><strong>var</strong>: Функциональная или глобальная область видимости.</li>
                  <li><strong>let</strong> и <strong>const</strong>: Блочная область видимости.</li>
                </ul>
              `,
              code: `
  if (true) {
  var x = 10;
  let y = 20;
  const z = 30;
  }

  console.log(x); // 10
  console.log(y); // ReferenceError: y is not defined
  console.log(z); // ReferenceError: z is not defined
              `,
            },
            {
              title: "Подъем переменных",
              type: "code",
              description: `
                <p>Все три типа переменных поднимаются, но их инициализация происходит на разных стадиях:</p>
              `,
              code: `
  console.log(aVar); // undefined (подъем, но не инициализация)
  var aVar = 'test';

  // console.log(aLet); // ReferenceError: Cannot access 'aLet' before initialization
  let aLet = 'test';

  // console.log(aConst); // ReferenceError: Cannot access 'aConst' before initialization
  const aConst = 'test';
              `,
            },
            {
              title: "Использование",
              type: "code",
              description: `
                <p>Рекомендуется использовать let и const вместо var, чтобы избежать неожиданных ошибок и путаницы:</p>
              `,
              code: `
  let name = 'John';
  const age = 30;

  name = 'Doe'; // корректно, значение переменной может меняться
  // age = 31; // TypeError: Assignment to constant variable. (ошибка)
              `,
            },
            {
              title: "Вывод",
              type: "code",
              description: `
                <p>Необходимо использовать let и const в современных приложениях, чтобы избежать проблем с областью видимости, поднятием и переопределением переменных.</p>
              `,
              code: `
  if (true) {
  let message = "Hello, block!";
  console.log(message); // "Hello, block!"
  }
  // console.log(message); // ReferenceError: message is not defined
              `,
            },
          ],
        },
        {
          title: "Способы объявления переменных",
          children: [
            {
              title: "1. Использование var",
              type: "code",
              description: `
                <p><strong>var</strong>: Объявляет переменную с функциональной или глобальной областью видимости.</p>
                <ul>
                  <li>Переменные, объявленные с помощью <code>var</code>, могут быть переопределены.</li>
                  <li>Подвержены механизму поднятия (hoisting).</li>
                </ul>
              `,
              code: `
  var name = 'Alice';
  console.log(name); // 'Alice'
  var name = 'Bob'; // переопределение
  console.log(name); // 'Bob'
              `,
            },
            {
              title: "2. Использование let",
              type: "code",
              description: `
                <p><strong>let</strong>: Объявляет переменную с блочной областью видимости.</p>
                <ul>
                  <li>Переменные, объявленные с помощью <code>let</code>, не могут быть переопределены в пределах одной области видимости.</li>
                  <li>Также подвержены поднятию, но не инициализируются до фактической строки кода.</li>
                </ul>
              `,
              code: `
  let age = 25;
  console.log(age); // 25
  // let age = 30; // ошибка: Identifier 'age' has already been declared
              `,
            },
            {
              title: "3. Использование const",
              type: "code",
              description: `
                <p><strong>const</strong>: Объявляет константу, значение которой не может быть переопределено.</p>
                <ul>
                  <li>Имеет блочную область видимости.</li>
                  <li>Объявленные с помощью <code>const</code> переменные должны быть инициализированы при объявлении.</li>
                </ul>
              `,
              code: `
  const pi = 3.14;
  console.log(pi); // 3.14
  // pi = 3.14159; // ошибка: Assignment to constant variable.
              `,
            },
            {
              title: "4. Групповое объявление",
              type: "code",
              description: `
                <p>Можно объявить несколько переменных в одной строке:</p>
              `,
              code: `
  let x = 10, y = 20, z = 30;
  console.log(x, y, z); // 10 20 30
              `,
            },
          ],
        },
        {
          title: "Особенности стрелочных функций",
          children: [
            {
              title: "1. Синтаксис",
              type: "code",
              description: `
                <p>Стрелочные функции имеют более компактный синтаксис по сравнению с обычными функциями:</p>
              `,
              code: `
  const add = (a, b) => a + b;
  console.log(add(2, 3)); // 5
              `,
            },
            {
              title: "2. Лексическое значение this",
              type: "code",
              description: `
                <p>Стрелочные функции не имеют своего собственного <code>this</code>; вместо этого они используют <code>this</code> из окружающего контекста:</p>
              `,
              code: `
  function Person() {
  this.age = 0;

  setInterval(() => {
  this.age++; // 'this' ссылается на объект Person
  console.log(this.age);
  }, 1000);
  }

  const p = new Person(); // будет выводить возраст каждую секунду
              `,
            },
            {
              title: "3. Отсутствие объекта arguments",
              type: "code",
              description: `
                <p>Стрелочные функции не имеют собственного объекта <code>arguments</code>. Для доступа к аргументам можно использовать оператор <code>rest</code>:</p>
              `,
              code: `
  const sum = (...args) => args.reduce((a, b) => a + b, 0);
  console.log(sum(1, 2, 3, 4)); // 10
              `,
            },
            {
              title: "4. Не могут быть использованы как конструкторы",
              type: "code",
              description: `
                <p>Стрелочные функции не могут быть использованы с оператором <code>new</code>:</p>
              `,
              code: `
  const Person = () => {};
  // const p = new Person(); // ошибка: Person is not a constructor
              `,
            },
            {
              title: "5. Не имеют свойства prototype",
              type: "code",
              description: `
                <p>Стрелочные функции не имеют свойства <code>prototype</code>, что делает их непригодными для создания методов объектов:</p>
              `,
              code: `
  const arrowFunc = () => {};
  console.log(arrowFunc.prototype); // undefined
              `,
            },
            {
              title: "6. Возврат значений",
              type: "code",
              description: `
                <p>Если стрелочная функция состоит из одного выражения, то фигурные скобки и ключевое слово <code>return</code> можно опустить:</p>
              `,
              code: `
  const square = x => x * x;
  console.log(square(4)); // 16
              `,
            },
          ],
        },
        {
          title: "Asynchronous Programming",
          children: [
            {
              title: "Basics of async programming",
              type: "list",
              description: `
                <p><strong>Асинхронное программирование</strong> — это парадигма, позволяющая выполнять операции, не блокируя основной поток выполнения. Это особенно полезно для задач, которые могут занять продолжительное время, таких как сетевые запросы или операции с файлами.</p>
              `,
            },
            {
              title: "Key Concepts",
              type: "list",
              description: `
                <p>Основные концепции асинхронного программирования:</p>
                <ul>
                  <li><strong>Callbacks</strong>: Функции обратного вызова, которые передаются в другие функции и вызываются после завершения асинхронной операции.</li>
                  <li><strong>Promises</strong>: Объекты, представляющие результат асинхронной операции, которые могут быть в состоянии ожидания (pending), выполнены (fulfilled) или отклонены (rejected).</li>
                  <li><strong>Async/Await</strong>: Синтаксический сахар над промисами, позволяющий писать асинхронный код, который выглядит как синхронный.</li>
                </ul>
              `,
            },
            {
              title: "Callbacks",
              type: "code",
              description: `
                <p>Пример использования колбеков:</p>
              `,
              code: `
  function fetchData(callback) {
    setTimeout(() => {
      callback('Data received');
    }, 1000);
  }

  fetchData((data) => {
    console.log(data); // 'Data received'
  });
              `,
            },
            {
              title: "Promises",
              type: "code",
              description: `
                <p>Пример использования промисов:</p>
              `,
              code: `
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data received');
      }, 1000);
    });
  }

  fetchData().then(data => {
    console.log(data); // 'Data received'
  });
              `,
            },
            {
              title: "Async/Await",
              type: "code",
              description: `
                <p>Пример использования async/await:</p>
              `,
              code: `
  async function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data received');
      }, 1000);
    });
  }

  async function getData() {
    const data = await fetchData();
    console.log(data); // 'Data received'
  }

  getData();
              `,
            },
            {
              title: "Benefits of Asynchronous Programming",
              type: "list",
              description: `
                <p>Преимущества асинхронного программирования:</p>
                <ul>
                  <li><strong>Улучшенная производительность</strong>: Не блокирует основной поток выполнения, что позволяет выполнять другие задачи.</li>
                  <li><strong>Лучшая отзывчивость приложения</strong>: Пользовательский интерфейс остается активным во время выполнения длительных операций.</li>
                  <li><strong>Упрощение кода</strong>: Использование async/await делает код более читаемым и понятным.</li>
                </ul>
              `,
            },
          ],
        },
        {
          title: "Drag and Drop",
          children: [
            {
              title: "Mouse Drag and Drop",
              type: "link",
              url: "https://learn.javascript.ru/mouse-drag-and-drop",
            },
            {
              title: "Основы Drag and Drop",
              type: "text",
              description: `
                <p>Drag and Drop — это способ улучшить интерфейс, позволяя пользователю перемещать элементы с помощью мыши. Это может быть полезно для копирования и перемещения документов, а также для других действий, таких как добавление элементов в корзину.</p>
              `,
            },
            {
              title: "Алгоритм Drag and Drop",
              type: "list",
              description: `
                <p>Базовый алгоритм Drag and Drop включает следующие шаги:</p>
                <ul>
                  <li><strong>mousedown</strong>: Подготовка элемента к перемещению.</li>
                  <li><strong>mousemove</strong>: Перемещение элемента на новые координаты.</li>
                  <li><strong>mouseup</strong>: Завершение перемещения элемента.</li>
                </ul>
              `,
            },
            {
              title: "Правильное позиционирование",
              type: "text",
              description: `
                <p>Чтобы избежать «прыжков» элемента при начале Drag and Drop, запоминаем расстояние от курсора до элемента и используем его при перемещении.</p>
              `,
            },
            {
              title: "Цели переноса (Droppable)",
              type: "list",
              description: `
                <p>Для реализации переноса элемента в другую цель, используйте метод <code>document.elementFromPoint</code> для определения, над каким элементом находится указатель.</p>
                <ul>
                  <li>Подсвечивайте элементы, когда мышь находится над ними.</li>
                  <li>Обрабатывайте окончание переноса, чтобы выполнить действия с элементами.</li>
                </ul>
              `,
            },
            {
              title: "Пример кода",
              type: "code",
              description: `
                <p>Пример реализации Drag and Drop:</p>
              `,
              code: `
  ball.onmousedown = function(event) {
    // код для начала переноса
  };

  function onMouseMove(event) {
    // код для перемещения элемента
  }
              `,
            },
          ],
        },
        {
          title: "Строгое и нестрогое сравнение",
          children: [
            {
              title: "Нестрогое сравнение (==)",
              type: "code",
              description: `
                <p><strong>Нестрогое сравнение</strong> выполняется с помощью оператора "==". При этом происходит приведение типов, что означает, что если два сравниваемых значения имеют разные типы, JavaScript попытается привести их к одному типу перед сравнением.</p>
                <p>Например, строка и число могут быть приведены к числу, а затем выполнено сравнение.</p>
              `,
              code: `
  console.log(5 == '5'); // true (строка '5' приводится к числу 5) 
  console.log(null == undefined); // true (null и undefined равны) 
              `,
            },
            {
              title: "Строгое сравнение (===)",
              type: "code",
              description: `
                <p><strong>Строгое сравнение</strong> выполняется с помощью оператора "===". При этом не происходит приведения типов, и значения сравниваются с учетом их типа. Если типы различны, результатом будет false.</p>
                <p>Строгое сравнение помогает избежать неожиданных результатов, возникающих вследствие неявного преобразования типов.</p>
              `,
              code: `
  console.log(5 === '5'); // false (разные типы) 
  console.log(null === undefined); // false (разные типы) 
              `,
            },
            {
              title: "Сравнение их особенностей",
              type: "code",
              description: `
                <p>Основные различия между строгое и нестрогое сравнение:</p>
                <ul>
                  <li><strong>Приведение типов:</strong> Нестрогое сравнение приводит разные типы к одному типу перед сравнением, в то время как строгое сравнение нет.</li>
                  <li><strong>Безопасность:</strong> Строгое сравнение снижает вероятность неожиданных результатов.</li>
                  <li><strong>Производительность:</strong> Строгое сравнение может быть немного быстрее, поскольку не требует приведения типов.</li>
                </ul>
              `,
              code: `
  console.log(5 == '5'); // true (нестрогое) 
  console.log(5 === '5'); // false (строгое) 
              `,
            },
          ],
        },
        {
          title: "Рекурсия (Recursion)",
          children: [
            {
              title: "Определение",
              type: "list",
              description: `
                <p><strong>Рекурсия</strong> — это функция вызывающая саму себя для решения подзадач. Рекурсивные функции обычно разбивают задачу на меньшие подзадачи, которые решаются аналогичным образом.</p>
              `,
            },
            {
              title: "Структура рекурсивной функции",
              type: "code",
              description: `
                <p>Рекурсивная функция должна иметь:</p>
                <ul>
                  <li><strong>Базовый случай</strong>: Условие, при котором функция прекращает вызывать саму себя, чтобы избежать бесконечной рекурсии.</li>
                  <li><strong>Рекурсивный случай</strong>: Вызов самой функции с меньшей или более простой версией задачи.</li>
                </ul>
              `,
              code: `
  function factorial(n) {
    if (n === 0) { // базовый случай
      return 1;
    }
    return n * factorial(n - 1); // рекурсивный случай
  }
  console.log(factorial(5)); // 120
              `,
            },
            {
              title: "Примеры использования",
              type: "list",
              description: `
                <p>Рекурсия может быть использована в следующих ситуациях:</p>
                <ul>
                  <li>Вычисление факториала.</li>
                  <li>Обход деревьев и графов.</li>
                  <li>Решение задач, таких как сортировка (например, быстрая сортировка, сортировка слиянием).</li>
                  <li>Решение задач, связанных с последовательностями (например, числа Фибоначчи).</li>
                </ul>
              `,
            },
            {
              title: "Преимущества и недостатки",
              type: "list",
              description: `
                <p>Преимущества и недостатки рекурсии:</p>
                <ul>
                  <li><strong>Преимущества:</strong> Код более лаконичен и понятен, особенно при работе со сложными структурами данных.</li>
                  <li><strong>Недостатки:</strong> Рекурсия может приводить к большому потреблению памяти из-за хранения состояния вызовов стека и может быть менее эффективной по сравнению с итеративными подходами.</li>
                </ul>
              `,
            },
          ],
        },
        {
          title: "Promise",
          children: [
            {
              title: "Определение",
              type: "list",
              description: `
                <p>Promise — это объект, представляющий конечный результат асинхронной операции. Он может находиться в одном из трех состояний:</p>
                <ul>
                  <li><strong>Ожидание (pending)</strong>: начальное состояние, ни выполнено, ни отклонено.</li>
                  <li><strong>Выполнено (fulfilled)</strong>: операция завершена успешно.</li>
                  <li><strong>Отклонено (rejected)</strong>: операция завершена с ошибкой.</li>
                </ul>
              `,
            },
            {
              title: "Создание Promise",
              type: "code",
              description: `
                <p>Promise создается с помощью конструктора <code>Promise</code>, который принимает функцию с двумя аргументами: <code>resolve</code> и <code>reject</code>.</p>
              `,
              code: `
  const myPromise = new Promise((resolve, reject) => {
  // Асинхронная операция
  const success = true; // поменяйте на false для теста отклонения

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Operation failed.');
    }
  });
              `,
            },
            {
              title: "Основные статические методы Promise",
              type: "list",
              description: `
                <p>Promise предоставляет несколько статических методов:</p>
                <ul>
                  <li><strong>Promise.all(iterable)</strong>: Ожидает выполнения всех переданных промисов и возвращает массив результатов. Если любой из промисов будет отклонен, возвращается ошибка.</li>
                  <li><strong>Promise.allSettled(iterable)</strong>: Ожидает выполнения всех переданных промисов и возвращает массив объектов с результатами (выполнено или отклонено) для каждого промиса.</li>
                  <li><strong>Promise.any(iterable)</strong>: Ожидает выполнения первого успешного промиса. Если все промисы будут отклонены, возвращается ошибка.</li>
                  <li><strong>Promise.race(iterable)</strong>: Ожидает выполнения первого завершенного промиса (выполнено или отклонено).</li>
                  <li><strong>Promise.resolve(value)</strong>: Возвращает промис, который выполнен с заданным значением.</li>
                  <li><strong>Promise.reject(reason)</strong>: Возвращает промис, который отклонен с заданной причиной.</li>
                </ul>
              `,
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
              code: `
  const person = { name: 'Alice', age: 25 };
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
                  type: "title",
                },
                {
                  title: "2.shift() => удаляет элемент в начале массива",
                  type: "title",
                },
                {
                  title:
                    "3.push() => добавляется несколько элементов в конец массива",
                  type: "title",
                },
                {
                  title:
                    "4.unshift() => добавляет несколько элементов в начало массива",
                  type: "title",
                },
                {
                  title: "5.length => получаем число элементов массива",
                  type: "title",
                },
                {
                  title: `6.splice() => добавление нескольких элементов в массив; 
                            первый аргумент указывает где начать вставку элементов по индексу; 
                            второй аргумент указывает сколько элементов нужно удалить, если аргумент не указать, то удаления не будет, просто добавится новый элемент в массиве; самые новые элементы указываются в скобках данного метода в кавычках,`,
                  type: "title",
                },
                {
                  title: `7.slice() => вырезает один или несколько элементов массива
                            через указатель аргумента начала вырезания и второй аргумент где закончить срез;
                            принимает отрицательные значения.`,
                  type: "title",
                },
                {
                  title: "8.concat() => конкатенация двух массивов",
                  type: "title",
                },
                {
                  title: `9.map() => принимает массив и применяет указанную функцию для
                            всех элементов массива; возвращает новый массив.`,
                  type: "title",
                },
                {
                  title: `10.every() => проверяет, соответствуют ли все элементы указанному
                            массиву определённому условию; если все элементы соответствуют условию, то возвращает
                            метод true, в противном случае вернёт false.`,
                  type: "title",
                },
                {
                  title: `11.includes() => проверяет на наличие в массиве элемента; если
                            элемент найден, то возвращает true.`,
                  type: "title",
                },
                {
                  title: `12.spread() => превращает массив в строки с помощью специальных
                            разделителей … сохраняет между ними границу или по умолчанию между строками образуются
                            пробелы.`,
                  type: "title",
                },
                {
                  title: `13.filter() => возвращает новый массив из всех элементов соответствующих
                            заданному условию.`,
                  type: "title",
                },
                {
                  title:
                    "14.reduce(function (previousValue, item, index, array) { … }, [initial]); => сводит массив к одному значению.",
                  type: "title",
                },
                {
                  title:
                    "15.reduceRight() => сводит массив к одному значение с права на лево.",
                  type: "title",
                },
                {
                  title: `16.indexOf() => возвращает первый индекс по которому может быть найден
                            элемент в массиве и -1 если такого элемента нет; это не тоже самое что и Boolean values,
                            мы можем получать 2 и более индекса совпадений по массиву.`,
                  type: "title",
                },
                {
                  title: `17.sort() => возвращает отсортированный массив; если compareFunction
                            предоставлена, то массив сортируется в соответствиями с этими условиями.`,
                  type: "title",
                },
                {
                  title: `18.find() => возвращает значение первого найденного в массиве элемента,
                            который удовлетворяет условию указанных в функции, в противном случае возвращает undefined.`,
                  type: "title",
                },
                {
                  title: `19.findIndex() => возвращает индекс в массиве, если элемент удовлетворяет
                            условиям проверяющей функции, в противном случае вернёт -1.`,
                  type: "title",
                },
                {
                  title: `20.forEach(function (item, index, array) { … } => выполняет указанную
                            функцию один раз для каждого элемента в массиве.`,
                  type: "title",
                },
                {
                  title:
                    "21.join(‘, ’) => преобразовывает массив в строку с заданным разделителем.",
                  type: "title",
                },
                {
                  title:
                    "22.isArray() => проверяем массив ли этот объект или нет.",
                  type: "title",
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
                  type: "title",
                },
                {
                  title: "2.toLowerCase() => перевод строки в нижний регистр",
                  type: "title",
                },
                {
                  title: "3.trim() => удаляет пробелы в начале и конце строки",
                  type: "title",
                },
                {
                  title: "4.length => получаем длину строки",
                  type: "title",
                },
                {
                  title: `5.includes() => проверяет на наличие в строке элемента; если элемент найден, то возвращает true.`,
                  type: "title",
                },
                {
                  title: `6.spread() => превращает массив в строки с помощью специальных разделителей ... сохраняет между ними границу или по умолчанию между строками образуются пробелы.`,
                  type: "title",
                },
                {
                  title: `7.repeat() => повторяет строку указанное количество раз.`,
                  type: "title",
                },
                {
                  title: `8.split() => разбивает строку на массив подстроки по указанному разделителю. Возвращает новый массив, который содержит подстроки полученные в ходе разбиения.`,
                  type: "title",
                },
                {
                  title: `9.startsWith() => проверяет на наличие в начале строки указанного элемента. Возвращает true или false`,
                  type: "title",
                },
                {
                  title: `10.endsWith() => проверяет на наличие в конце строки указанного элемента. Возвращает true или false`,
                  type: "title",
                },
                {
                  title: `11.slice() => вырезает один или несколько элементов внутри строки через указатель аргумента начала вырезания и второй аргумент где закончить срез; принимает отрицательные значения.`,
                  type: "title",
                },
                {
                  title: `12.substring() => возвращает вырезанную часть строки, но не принимает отрицательные числа в качестве аргументов.`,
                  type: "title",
                },
                {
                  title: `13.concat() => конкатенация между собой строк в одну строку`,
                  type: "title",
                },
                {
                  title: `14.charCodeAt() => возвращает значение символа по Юникод.`,
                  type: "title",
                },
                {
                  title: `15.charAt() => возвращает символ по Юникод.`,
                  type: "title",
                },
                {
                  title: `16.trimStart() => удаляет пробелы в начале строки.`,
                  type: "title",
                },
                {
                  title: `17.trimEnd() => удаляет пробелы в конце строки.`,
                  type: "title",
                },
                {
                  title: `18.padStart() => добавляет символы в начале строки, чтобы результирующая строка получила указанную длину; по умолчанию метод возвращает пустую строку до указанной длины, но может принимать и другие символы указанные во втором аргументе.`,
                  type: "title",
                },
                {
                  title: `19.padEnd() => добавляет символы в конце строки, чтобы результирующая строка получила указанную длину.`,
                  type: "title",
                },
                {
                  title: `20.indexOf() => возвращает индекс первого вхождения указанного элемента в строку. Если элемент не найден, возвращает -1.`,
                  type: "title",
                },
                {
                  title: `21.at(-1) или at() => получает последний символ строки или символ согласно индексу слева на право, так же как при отрицательном значении принимает символ с право на лево.`,
                  type: "title",
                },
                {
                  title: `22.search()`,
                  type: "code",
                  description: `search() => возвращает индекс первого вхождения подстроки в строке.`,
                  code: `console.log(str.search('World')); // 9`
                }
              ],
            },
            {
              title: "Numbers Methods",
              children: [
                {
                  title:
                    "1.toFixed() => форматирует число с использованием записи с фиксированной запятой.",
                  type: "title",
                },
                {
                  title:
                    "2.parseFloat() => принимает строку в качестве аргумента и возвращает число с плавающей точной.",
                  type: "title",
                },
                {
                  title:
                    "3.parseInt() => принимает строку в качестве аргумента и возвращает целое число в соответствии с указанной системой счисления.",
                  type: "title",
                },
                {
                  title:
                    "4.Number() => преобразовывает строку в числовой тип данных.",
                  type: "title",
                },
                {
                  title: "toExponential()",
                  type: "code",
                  description:
                    "<p>Преобразует число в экспоненциальное представление.</p>",
                  code: "var x = 9.656; console.log(x.toExponential(2)); // '9.66e+0'",
                },
                {
                  title: "toPrecision()",
                  type: "code",
                  description:
                    "<p>Возвращает строку с числом, записанным с указанной длиной.</p>",
                  code: "var x = 9.656; console.log(x.toPrecision(4)); // '9.656'",
                },
                {
                  title: "Методы Math",
                  children: [
                    {
                      title: "Math.max()",
                      type: "code",
                      description: "<p>Возвращает наибольшее значение.</p>",
                      code: "console.log(Math.max(1, 2, 3)); // 3",
                    },
                    {
                      title: "Math.min()",
                      type: "code",
                      description: "<p>Возвращает наименьшее значение.</p>",
                      code: "console.log(Math.min(1, 2, 3)); // 1",
                    },
                    {
                      title: "Math.random()",
                      type: "code",
                      description:
                        "<p>Генерирует случайное число от 0 до 1.</p>",
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
                      type: "code",
                      description:
                        "<p>Округляет число до ближайшего целого.</p>",
                      code: "console.log(Math.round(4.6)); // 5",
                    },
                    {
                      title: "5.Math.sqrt() => возвращает квадратный корень числа.",
                      type: "title",
                    },
                    {
                      title: "6.Math.cbrt() => возвращает кубический корень числа.",
                      type: "title",
                    },
                    {
                      title:
                        "7.Math.abs() => возвращает абсолютное значение числа.",
                      type: "title",
                    },
                    {
                      title:
                        "8.Math.pow() => возвращает число, возведённое в степень.",
                      type: "title",
                    },
                  ],
                },
              ],
            },
            {
              title: "Object Methods",
              children: [
                {
                  title:
                    "1.Object.keys(obj): Возвращает массив строк, содержащий имена собственных перечисляемых свойств объекта.",
                  type: "title",
                },
                {
                  title:
                    "2.Object.values(obj): Возвращает массив значений собственных перечисляемых свойств объекта.",
                  type: "title",
                },
                {
                  title:
                    "3.Object.create(proto, propertiesObject): Создает новый объект с указанным прототипом и свойствами.",
                  type: "title",
                },
                {
                  title:
                    "4.Object.freeze(obj): Замораживает объект, предотвращая добавление, удаление или изменение его свойств.",
                  type: "title",
                },
                {
                  title:
                    "5.Object.assign(target, ...sources): Копирует значения всех собственных перечисляемых свойств из одного или более источников в целевой объект и возвращает его.",
                  type: "title",
                },
                {
                  title:
                    "6.Object.entries(obj): Возвращает массив пар [ключ, значение] для собственных перечисляемых свойств объекта.",
                  type: "title",
                },
                {
                  title:
                    "7.Object.seal(obj): Замораживает объект, предотвращая добавление, удаление или изменение его свойств.",
                  type: "title",
                },
                {
                  title:
                    "8.Object.is(value1, value2): Определяет, являются ли два значения одним и тем же значением.",
                  type: "title",
                },
              ],
            },
            {
              title: "Cycle",
              children: [
                {
                  title:
                    "1.while => повторяет блок кода до тех пор, пока не выполнится условие.",
                  type: "title",
                },
                {
                  title:
                    "2.do while => повторяет блок кода до тех пор, пока не выполнится условие. После чего выполняется блок кода.",
                  type: "title",
                },
                {
                  title:
                    "3.for => повторяет блок кода определённое количество раз.",
                  type: "title",
                },
                {
                  title:
                    "4.for...of => повторяет блок кода для каждого элемента в массиве.",
                  type: "title",
                },
                {
                  title:
                    "5.forEach() => повторяет блок кода для каждого элемента в массиве.",
                  type: "title",
                },
                {
                  title:
                    "6.for in => повторяет блок кода для каждого свойства в объекте.",
                  type: "title",
                },
                {
                  title: "7.break => прерывает выполнение цикла.",
                  type: "title",
                },
                {
                  title:
                    "8.continue => прерывает текущую итерацию цикла и переходит к следующей.",
                  type: "title",
                },
              ],
            },
            {
              title: "work with JSON",
              children: [
                {
                  title: `JSON.stringify(value, replacer, space): Преобразует значение в строку JSON.`,
                  type: "title",
                },
                {
                  title: `JSON.parse(text, reviver): Преобразует строку JSON в значение.`,
                  type: "title",
                },
              ],
            },
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
              code: `
  const video = document.querySelector('video');
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      video.pause();
    } else {
      video.play();
    }
  });
`,
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
              code: `
  function levenshtein(a, b) {
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
  }
`
            },
          ],
        },
        {
          title: "Sort functions",
          children: [
            {
              title: "Сортировка пузырьком",
              type: "code",
              description: `
                <p>Алгоритм сортировки пузырьком сравнивает пары соседних элементов и меняет их местами, если порядок неправильный.</p>
                <p>Задача: Реализовать сортировку массива с использованием алгоритма пузырька.</p>
              `,
              code: `
  function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // обмен элементов
      swapped = true;
      }
    }
  } while (swapped);
    return arr;
  }
              `,
            },
          ]
        },
        {
          title: "Search function",
          children: [

          ]
        },
        {
          title: "Event Loop",
          children: [
            {
              title:
                "Цикл событий (event loop) — это механизм, который позволяет JavaScript выполнять асинхронные операции, не блокируя основной поток выполнения. Он обеспечивает обработку событий и выполнение колбеков (callback functions) в ответ на события, такие как клики мыши, нажатия клавиш и завершение асинхронных операций.",
              type: "list",
              description: `
              <p>Вот как работает цикл событий:</p>
                <li>Обработка асинхронного кода: Если в обработчике события есть асинхронный код, такой как таймеры или сетевые запросы, он не блокирует выполнение других событий. Вместо этого асинхронный код помещается в очередь задач (task queue) для выполнения в будущем.</li>
                <li>Очередь сообщений (Message Queue): Когда асинхронная операция (например, запрос к серверу) завершается, соответствующий колбек помещается в очередь сообщений.</li>
                <li>Цикл событий: Цикл событий постоянно проверяет стек вызовов и очередь сообщений. Если стек пуст, он берет первое сообщение из очереди и помещает его в стек вызовов для выполнения.</li>
                <p>Таким образом, цикл событий позволяет JavaScript обрабатывать асинхронные операции, не блокируя выполнение других кода, что делает его эффективным для работы с пользовательскими интерфейсами и сетевыми запросами.</p>
              `,
            },
          ],
        },
        {
          title: "Reducers",
          children: [
            {
              title: "Определение редьюсера",
              type: "text",
              description: `
                <p>Редьюсер — это чистая функция, которая принимает текущее состояние и действие, и возвращает новое состояние.</p>
              `,
            },
            {
              title: "Аргументы редьюсера",
              type: "list",
              description: `
                <p>Редьюсер принимает два аргумента:</p>
                <ul>
                  <li><strong>state</strong>: текущее состояние.</li>
                  <li><strong>action</strong>: объект, описывающий действие.</li>
                </ul>
              `,
            },
            {
              title: "Пример редьюсера",
              type: "code",
              description: `
                <p>Пример простого редьюсера для управления задачами:</p>
              `,
              code: `
  const initialState = { todos: [] };

  function todoReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return { ...state, todos: [...state.todos, action.payload] };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  }
              `,
            },
            {
              title: "Использование редьюсера",
              type: "text",
              description: `
                <p>Редьюсеры комбинируются с помощью функции <code>combineReducers</code> для создания общего состояния в Redux.</p>
              `,
            },
            {
              title: "Пример с использованием useReducer",
              type: "code",
              description: `
                <p>Пример использования <code>useReducer</code> в React:</p>
              `,
              code: `
  import React, { useReducer } from 'react';

  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </>
    );
  }
              `,
            },
            {
              title: "Заключение",
              type: "text",
              description: `
                <p>Редьюсеры обеспечивают предсказуемое и централизованное управление состоянием в приложениях.</p>
              `,
            },
          ],
        },
      ],
    },
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
      title: "Patterns, principles, methodologies",
      children: [
        {
          title: "Чистый код (Clean Code)",
          children: [
            {
              title: "Определение",
              type: "list",
              description: `
                <p>Чистый код — это подход к написанию программного обеспечения, который акцентирует внимание на его читаемости, понятности и простоте. Он способствует более легкому пониманию и сопровождению кода.</p>
              `,
            },
            {
              title: "Основные принципы чистого кода",
              type: "list",
              description: `
                <p>Некоторые ключевые принципы чистого кода:</p>
                <ul>
                  <li><strong>Читаемость</strong>: Код должен быть легким для чтения и понимания.</li>
                  <li><strong>Понятность</strong>: Названия переменных, функций и классов должны быть ясными и описательными.</li>
                  <li><strong>Структурированность</strong>: Код должен быть организован логически, с четким разделением на модули и функции.</li>
                  <li><strong>Минимизация дублирования</strong>: Избегайте повторения кода, используя функции и модули.</li>
                  <li><strong>Тестируемость</strong>: Код должен быть легко тестируемым, что облегчает обнаружение ошибок.</li>
                </ul>
              `,
            },
            {
              title: "Примеры хорошего кода",
              type: "code",
              description: `
                <p>Пример хорошего кода с понятными названиями:</p>
              `,
              code: `
  function calculateArea(radius) {
  return Math.PI * radius * radius;
  }
              `,
            },
            {
              title: "Примеры плохого кода",
              type: "code",
              description: `
                <p>Пример плохого кода с непонятными названиями:</p>
              `,
              code: `
  function c(r) {
  return 3.14 * r * r;
  }
              `,
            },
            {
              title: "Рекомендации по написанию чистого кода",
              type: "list",
              description: `
                <p>Некоторые рекомендации:</p>
                <ul>
                  <li><strong>Используйте описательные названия</strong>: Названия должны отражать назначение переменной или функции.</li>
                  <li><strong>Разделяйте код на функции</strong>: Каждая функция должна выполнять одну задачу.</li>
                  <li><strong>Пишите комментарии</strong>: Используйте комментарии для объяснения сложных частей кода, но не переусердствуйте.</li>
                  <li><strong>Следуйте стандартам кодирования</strong>: Придерживайтесь общепринятых стилей и стандартов в вашей команде.</li>
                  <li><strong>Регулярно рефакторите код</strong>: Улучшайте и оптимизируйте код по мере его развития.</li>
                </ul>
              `,
            },
            {
              title: "Преимущества чистого кода",
              type: "list",
              description: `
                <p>Преимущества написания чистого кода:</p>
                <ul>
                  <li><strong>Упрощенное сопровождение</strong>: Более легкое понимание и изменение кода.</li>
                  <li><strong>Меньше ошибок</strong>: Чистый код снижает вероятность ошибок и багов.</li>
                  <li><strong>Увеличение производительности команды</strong>: Читаемый код ускоряет процесс разработки и тестирования.</li>
                </ul>
              `,
            },
          ],
        },
        {
          title: "Методология BEM",
          children: [
            {
              title: "B - Блок (Block)",
              type: "list",
              description: `
                <p>Определение блока:</p>
                <ul>
                  <li><strong>Что это</strong>: Независимый компонент интерфейса, который может быть переиспользован.</li>
                  <li><strong>Примеры</strong>: <code>header</code>, <code>menu</code>, <code>button</code>.</li>
                </ul>
              `,
            },
            {
              title: "E - Элемент (Element)",
              type: "list",
              description: `
                <p>Определение элемента:</p>
                <ul>
                  <li><strong>Что это</strong>: Составная часть блока, которая не имеет смысла вне него.</li>
                  <li><strong>Обозначение</strong>: Элементы обозначаются двойным подчеркиванием, например, <code>menu__item</code>.</li>
                </ul>
              `,
            },
            {
              title: "M - Модификатор (Modifier)",
              type: "list",
              description: `
                <p>Определение модификатора:</p>
                <ul>
                  <li><strong>Что это</strong>: Состояние или версия блока или элемента, изменяющая его внешний вид или поведение.</li>
                  <li><strong>Обозначение</strong>: Модификаторы обозначаются двойным дефиссом, например, <code>button--primary</code>.</li>
                </ul>
              `,
            },
            {
              title: "Преимущества BEM",
              type: "list",
              description: `
                <p>Основные преимущества методологии BEM:</p>
                <ul>
                  <li><strong>Читаемость</strong>: Структура именования делает код более понятным.</li>
                  <li><strong>Масштабируемость</strong>: Легко добавлять новые блоки и элементы без конфликтов.</li>
                  <li><strong>Поддерживаемость</strong>: Изменения в одном блоке не влияют на другие.</li>
                </ul>
              `,
            },
          ],
        },
        {
          title: "OOP",
          children: [
            {
              title:
                "Объектно-ориентированное программирование (ООП) — это парадигма программирования, основанная на концепции 'объектов', которые могут содержать данные и код. Основные принципы ООП:",
              type: "list",
              description: `
              <li>Инкапсуляция: Сокрытие состояния объекта и управление доступом к нему через методы. Это помогает защитить внутренние данные и предотвратить их неправильное использование.</li>
              <li>Наследование: Возможность создавать новые классы на основе существующих. Новый класс (потомок) наследует свойства и методы родительского класса, что позволяет повторно использовать и расширять код.</li>
              <li>Полиморфизм: Способность объектов разных классов обрабатывать данные через одинаковый интерфейс. Это позволяет использовать один и тот же метод для объектов разных типов, что увеличивает гибкость кода.</li>
              <li>Абстракция: Упрощение сложных систем путем определения общих интерфейсов и скрытия деталей реализации. Это помогает сосредоточиться на взаимодействии между объектами, не вникая в их внутренние механизмы.</li>
              <p>Эти принципы помогают создавать более структурированные, удобочитаемые и поддерживаемые приложения.</p>
              `,
            },
          ],
        },
        {
          title: "Принципы SOLID",
          children: [
            {
              title: "S - Single Responsibility Principle",
              type: "list",
              description: `
                <p>Принцип единственной ответственности:</p>
                <ul>
                  <li><strong>Определение</strong>: Каждый класс должен иметь одну единственную ответственность.</li>
                  <li><strong>Цель</strong>: Упрощение тестирования и модификации кода.</li>
                </ul>
              `,
            },
            {
              title: "O - Open/Closed Principle",
              type: "list",
              description: `
                <p>Принцип открытости/закрытости:</p>
                <ul>
                  <li><strong>Определение</strong>: Классы должны быть открыты для расширения, но закрыты для изменения.</li>
                  <li><strong>Цель</strong>: Позволяет добавлять новую функциональность без изменения существующего кода.</li>
                </ul>
              `,
            },
            {
              title: "L - Liskov Substitution Principle",
              type: "list",
              description: `
                <p>Принцип подстановки Лисков:</p>
                <ul>
                  <li><strong>Определение</strong>: Объекты подкласса должны быть взаимозаменяемыми с объектами суперкласса.</li>
                  <li><strong>Цель</strong>: Поддержание корректности программы при замене объектов.</li>
                </ul>
              `,
            },
            {
              title: "I - Interface Segregation Principle",
              type: "list",
              description: `
                <p>Принцип сегрегации интерфейсов:</p>
                <ul>
                  <li><strong>Определение</strong>: Клиенты не должны зависеть от интерфейсов, которые они не используют.</li>
                  <li><strong>Цель</strong>: Избежать ненужных зависимостей и создать узкоспециализированные интерфейсы.</li>
                </ul>
              `,
            },
            {
              title: "D - Dependency Inversion Principle",
              type: "list",
              description: `
                <p>Принцип инверсии зависимостей:</p>
                <ul>
                  <li><strong>Определение</strong>: Модули верхнего уровня не должны зависеть от модулей нижнего уровня; обе группы должны зависеть от абстракций.</li>
                  <li><strong>Цель</strong>: Уменьшение связанности между компонентами системы.</li>
                </ul>
              `,
            },
          ],
        },
        {
          title: "KISS",
          children: [
            {
              title: "",
              type: "list",
              description:
                "<strong>KISS (Keep It Simple, Stupid)</strong> - это принцип, который подразумевает, что системы следует проектировать максимально просто; избегать ненужной сложности.",
            },
          ]
        },
        {
          title: "DRY",
          children: [
            {
              title: "",
              type: "list",
              description:
                "<strong>DRY (Don't Repeat Yourself)</strong> - Принцип, согласно которому информация и логика не должны повторяться в коде, чтобы уменьшить дублирование и облегчить поддержку.",
            },
          ]
        },
        {
          title: "YAGNI",
          children: [
            {
              title: "",
              type: "list",
              description:
                "<strong>YAGNI (You Aren't Gonna Need It)</strong> - Принцип, который гласит, что не следует добавлять функциональности, пока не возникнет реальная необходимость, чтобы избежать излишней сложности.",
            },
          ]
        },
        {
          title: "Functional programming (Функциональное программирование)",
          children: [
            {
              title: "Определение",
              type: "text",
              description: `
                <p>Функциональное программирование — это парадигма программирования, в которой основное внимание уделяется использованию функций и избеганию изменения состояния и данных.</p>
              `,
            },
            {
              title: "Основные концепции",
              type: "list",
              description: `
                <p>Ключевые концепции функционального программирования:</p>
                <ul>
                  <li><strong>Чистые функции</strong>: функции, которые всегда возвращают один и тот же результат для одинаковых входных данных и не имеют побочных эффектов.</li>
                  <li><strong>Иммутабельность</strong>: состояние не изменяется, вместо этого создаются новые значения.</li>
                  <li><strong>Функции высшего порядка</strong>: функции, которые принимают другие функции в качестве аргументов или возвращают функции.</li>
                  <li><strong>Лямбда-функции</strong>: анонимные функции, которые могут быть определены и использованы непосредственно в коде.</li>
                </ul>
              `,
            },
            {
              title: "Преимущества",
              type: "text",
              description: `
                <p>Функциональное программирование предлагает множество преимуществ, включая:</p>
                <ul>
                  <li>Упрощение отладки и тестирования.</li>
                  <li>Лучшее управление состоянием.</li>
                  <li>Улучшение читаемости и поддержки кода.</li>
                </ul>
              `,
            },
            {
              title: "Пример чистой функции",
              type: "code",
              description: `
                <p>Пример чистой функции, которая вычисляет сумму двух чисел:</p>
              `,
              code: `
                function add(a, b) {
                  return a + b;
                }
              `,
            },
            {
              title: "Функции высшего порядка",
              type: "code",
              description: `
                <p>Пример функции высшего порядка, которая принимает другую функцию в качестве аргумента:</p>
              `,
              code: `
                function applyFunction(fn, value) {
                  return fn(value);
                }
        
                function double(x) {
                  return x * 2;
                }
        
                const result = applyFunction(double, 5); // 10
              `,
            },
            {
              title: "Заключение",
              type: "text",
              description: `
                <p>Функциональное программирование способствует созданию более предсказуемого и поддерживаемого кода, что делает его популярным выбором для разработки современного программного обеспечения.</p>
              `,
            },
          ],
        },
      ]
    },
    {
      title: "Interview",
      children: [
        {
          title: "Theme Frontend",
          children: [
            {
              title: "Common questions",
              children: [
                {
                  title: "Основные структуры данных и их организация",
                  children: [
                    {
                      title:
                        "В фронтенд-разработке используются различные структуры данных для организации и хранения информации",
                      type: "list",
                      description: `
                      <p>Вот некоторые из них:</p>
                        <li>Массивы (Arrays): Упорядоченные коллекции элементов, которые могут быть любого типа. Массивы позволяют хранить списки данных и обеспечивают доступ к элементам по индексу.</li>
                        <li>Объекты (Objects): Непорядочные коллекции пар "ключ-значение". Объекты используются для хранения связанных данных и представляют собой более сложные структуры, чем массивы.</li>
                        <li>Строки (Strings): Последовательности символов, которые используются для представления текстовой информации.</li>
                        <li>Множества (Sets): Коллекции уникальных значений. Множества полезны для хранения данных, когда важно избегать дубликатов.</li>
                        <li>Словари (Maps): Коллекции пар "ключ-значение", где ключи могут быть любого типа. Словари обеспечивают быстрый доступ к значениям по ключам.</li>
                        <p>Эти структуры данных могут быть организованы в более сложные структуры, такие как деревья и графы, в зависимости от требований приложения.</p>
                      `,
                    },
                  ],
                },
                {
                  title: "Двоичная система счисления",
                  children: [
                    {
                      title:
                        "Двоичная система счисления — это система, основанная на двух символах: 0 и 1",
                      type: "list",
                      description: `
                      <p>Она является основой для работы всех цифровых компьютеров, так как они используют двоичную логику для обработки данных. В двоичной системе каждое число представляется как последовательность битов (binary digits), где каждый бит может принимать значение 0 или 1.
                      Например, число 5 в десятичной системе представляется как 101 в двоичной системе:</p>
                        <li>1  2^2 (4) + 0  2^1 (0) + 1 * 2^0 (1) = 5</li>
                      <p>Двоичная система используется для представления данных, выполнения арифметических операций и управления логикой в компьютерах.</p>
                      `,
                    },
                  ],
                },
                {
                  title: "как работает браузер",
                  children: [
                    {
                      title:
                        "Браузер — это программа, которая выполняет следующие основные функции:",
                      type: "list",
                      description: `
                        <li>Запрос ресурсов: Браузер отправляет HTTP(S)-запросы к веб-серверу для получения HTML, CSS, JavaScript, изображений и других ресурсов.</li>
                        <li>Парсинг HTML: После получения ответа от сервера браузер начинает парсить HTML-код, создавая DOM (Document Object Model) — дерево объектов, представляющее структуру документа.</li>
                        <li>Парсинг CSS: Браузер обрабатывает CSS-файлы и создает CSSOM (CSS Object Model), который содержит правила стилей для элементов.</li>
                        <li>Создание страницы: Браузер объединяет DOM и CSSOM, чтобы создать Render Tree (дерево отображения), которое содержит только видимые элементы и их стили.</li>
                        <li>Рендеринг: Браузер вычисляет, как элементы должны быть отображены на экране (положение, размеры и так далее), и выполняет ученение — отрисовку страницы на экране устройства.</li>
                        <li>Обработка событий: Браузер отслеживает пользовательские действия (нажатия кнопок, движения мыши и т. д.) и обрабатывает события, вызывая соответствующий JavaScript-код.</li>
                      `,
                    },
                  ],
                },
                {
                  title: "Что такое DOM",
                  children: [
                    {
                      title:
                        "DOM (Document Object Model) — это программный интерфейс для классов документов HTML и XML. Он представляет структуру документа в виде дерева узлов, где каждый узел соответствует элементу или тексту на странице. DOM позволяет программно изменять структуру, содержимое и стиль документа.",
                      type: "list",
                      description: `
                      <p>С помощью DOM разработчики могут:</p>
                        <li>Добавлять, удалять и изменять элементы на странице.</li>
                        <li>Изменять атрибуты и стиль элементов.</li>
                        <li>Реагировать на события, происходящие в документе.</li>
                      <p>DOM позволяет языкам программирования, таким как JavaScript, эффективно взаимодействовать с HTML и динамически изменять пользовательский интерфейс без перезагрузки страницы.</p>
                      `,
                    },
                  ],
                },
                {
                  title: "Из чего состоит HTTP запрос",
                  children: [
                    {
                      title: "HTTP-запрос состоит из нескольких частей:",
                      type: "list",
                      description: `
                      <p>Метод: Указывает тип запроса, например:</p>
                        <li>GET: Запрос на получение данных.</li>
                        <li>POST: Отправка данных на сервер.</li>
                        <li>PUT, DELETE и другие методы.</li>
                        <li>URL (Uniform Resource Locator): Указывает адрес ресурса, к которому осуществляется обращение.</li>
                        <li>Версия протокола: Например, HTTP/1.1 или HTTP/2.</li>
                      <p>Заголовки (Headers): Дополнительные метаданные о запросе, которые могут включать:</p>
                        <li>Content-Type: Указывает формат передаваемых данных.</li>
                        <li>Authorization: Используется для передачи учетных данных и токенов.</li>
                        <li>Другие заголовки, определяющие поведение кэширования, управление сессиями и т.д.</li>
                        <li>Тело (Body): Опциональная часть запроса, которая содержит данные, отправляемые на сервер (обычно в запросах POST, PUT и PATCH).</li>
                      `,
                    },
                  ],
                },
                {
                  title: "Разница между cookie, sessionStorage и localStorage",
                  children: [
                    {
                      title: "Cookie",
                      type: "list",
                      description: `
                        <p>Основные характеристики cookie:</p>
                        <li><strong>Применение</strong>: Хранит данные на стороне клиента, отправляемые на сервер при каждом запросе.</li>
                        <li><strong>Размер</strong>: Ограничен примерно 4 КБ.</li>
                        <li><strong>Время жизни</strong>: Может иметь заданное время жизни и храниться до его истечения.</li>
                        <li><strong>Доступ</strong>: Доступен для сервера и клиента.</li>
                      `,
                    },
                    {
                      title: "sessionStorage",
                      type: "list",
                      description: `
                        <p>Основные характеристики sessionStorage:</p>
                        <li><strong>Применение</strong>: Хранит данные, специфичные для одной сессии.</li>
                        <li><strong>Размер</strong>: Обычно ограничен до 5-10 МБ.</li>
                        <li><strong>Время жизни</strong>: Данные существуют лишь в течение одной вкладки.</li>
                        <li><strong>Доступ</strong>: Доступен только из текущей вкладки.</li>
                      `,
                    },
                    {
                      title: "localStorage",
                      type: "list",
                      description: `
                        <p>Основные характеристики localStorage:</p>
                        <li><strong>Применение</strong>: Хранит данные, доступные между сессиями.</li>
                        <li><strong>Размер</strong>: Обычно ограничен до 5-10 МБ.</li>
                        <li><strong>Время жизни</strong>: Данные сохраняются до тех пор, пока пользователь их не удалит.</li>
                        <li><strong>Доступ</strong>: Доступен только для клиентских скриптов.</li>
                      `,
                    },
                  ],
                },
                {
                  title: "Основные события при построении HTML-страницы",
                  children: [
                    {
                      title: "Загрузка и парсинг HTML",
                      type: "list",
                      description: `
                        <p>Основные характеристики загрузки и парсинга HTML:</p>
                        <ul>
                          <li><strong>Событие</strong>: Браузер загружает HTML-документ и начинает его парсить.</li>
                          <li><strong>Результат</strong>: Создается дерево элементов (DOM — Document Object Model).</li>
                          <li><strong>Зависимости</strong>: В процессе могут обнаруживаться внешние ресурсы (CSS, JavaScript).</li>
                        </ul>
                      `,
                    },
                    {
                      title: "Загрузка и парсинг CSS",
                      type: "list",
                      description: `
                        <p>Основные характеристики загрузки и парсинга CSS:</p>
                        <ul>
                          <li><strong>Событие</strong>: Браузер загружает и парсит файлы CSS.</li>
                          <li><strong>Результат</strong>: Создается дерево стилей (CSSOM — CSS Object Model).</li>
                          <li><strong>Блокировка</strong>: Этот этап может блокировать рендеринг страницы.</li>
                        </ul>
                      `,
                    },
                    {
                      title: "Создание и рендеринг страницы",
                      type: "list",
                      description: `
                        <p>Основные характеристики создания и рендеринга страницы:</p>
                        <ul>
                          <li><strong>Событие</strong>: Браузер создает дерево рендеринга и отображает страницу.</li>
                          <li><strong>Результат</strong>: Объединение DOM и CSSOM для создания визуального представления.</li>
                          <li><strong>Влияние</strong>: Рендеринг зависит от порядка загрузки и выполнения JavaScript.</li>
                        </ul>
                      `,
                    },
                  ],
                },
                {
                  title: "Структура классического HTML-документа",
                  children: [
                    {
                      title: "<!DOCTYPE html>",
                      type: "list",
                      description: `
                        <p>Определяет тип документа и версию HTML.</p>
                        <ul>
                          <li><strong>Версия</strong>: HTML5.</li>
                        </ul>
                      `,
                    },
                    {
                      title: "<html>",
                      type: "list",
                      description: `
                        <p>Корневой элемент документа.</p>
                        <ul>
                          <li><strong>Атрибуты</strong>: может содержать атрибуты, такие как lang.</li>
                        </ul>
                      `,
                    },
                    {
                      title: "<head>",
                      type: "list",
                      description: `
                        <p>Содержит метаданные о документе.</p>
                        <ul>
                          <li><strong>meta charset="UTF-8"</strong>: Устанавливает кодировку документа.</li>
                          <li><strong>meta name="viewport"</strong>: Настройки для адаптивного дизайна.</li>
                          <li><strong>title </strong>: Заголовок, отображаемый в заголовке вкладки браузера.</li>
                          <li><strong>link </strong>: Подключение CSS-файлов.</li>
                          <li><strong>script </strong>: Подключение JavaScript-файлов.</li>
                        </ul>
                      `,
                    },
                    {
                      title: "<body>",
                      type: "list",
                      description: `
                        <p>Основное содержимое документа.</p>
                        <ul>
                          <li><strong>header</strong>: Заголовок сайта, может содержать навигацию.</li>
                          <li><strong>main</strong>: Основной контент страницы.</li>
                          <li><strong>footer</strong>: Нижний колонтитул, содержащий информацию о правами и другие ссылки.</li>
                        </ul>
                      `,
                    },
                  ],
                },
              ],
            },
            {
              title: "JS questions",
              children: [
                {
                  title: "Основные алгоритмы сортировки и поиска",
                  children: [
                    {
                      title: "Алгоритмы сортировки",
                      type: "list",
                      description: `
                        <p>Вот некоторые из основных алгоритмов сортировки:</p>
                        <li><strong>Пузырьковая сортировка (Bubble Sort)</strong>: Простейший алгоритм сортировки с временной сложностью O(n^2).</li>
                        <li><strong>Сортировка выбором (Selection Sort)</strong>: Делит массив на отсортированную и неотсортированную части, временная сложность O(n^2).</li>
                        <li><strong>Сортировка вставками (Insertion Sort)</strong>: Строит отсортированный массив по одному элементу, временная сложность O(n^2).</li>
                        <li><strong>Сортировка слиянием (Merge Sort)</strong>: Рекурсивный алгоритм с временной сложностью O(n log n).</li>
                        <li><strong>Быстрая сортировка (Quick Sort)</strong>: Делит массив на элементы меньше и больше опорного элемента, временная сложность O(n log n).</li>
                        <li><strong>Сортировка кучей (Heap Sort)</strong>: Использует структуру данных "куча", временная сложность O(n log n).</li>
                      `,
                    },
                    {
                      title: "Алгоритмы поиска",
                      type: "list",
                      description: `
                        <p>Вот некоторые из основных алгоритмов поиска:</p>
                        <li><strong>Линейный поиск (Linear Search)</strong>: Проходит по каждому элементу массива, временная сложность O(n).</li>
                        <li><strong>Бинарный поиск (Binary Search)</strong>: Работает на отсортированных массивах, временная сложность O(log n).</li>
                        <li><strong>Поиск с использованием хеш-таблиц</strong>: Использует хеширование для быстрого поиска, временная сложность O(1) в среднем.</li>
                      `,
                    },
                  ],
                },
                {
                  title: "Реализация простого алгоритма на JavaScript",
                  children: [
                    {
                      title: "Факториал числа",
                      type: "code",
                      description: `
                        <p>Задача: Реализовать функцию, вычисляющую факториал числа.</p>
                        <ul>
                          <li>Факториал числа n (обозначается n!) равен произведению всех положительных целых чисел от 1 до n.</li>
                          <li>Пример: 5! = 5 * 4 * 3 * 2 * 1 = 120</li>
                        </ul>
                      `,
                      code: `
  function factorial(n) {
    if (n < 0) return -1; // факториал не существует для отрицательных чисел
    if (n === 0) return 1; // 0! = 1
    return n * factorial(n - 1); // рекурсивный вызов
  }
                      `,
                    },
                  ],
                },
                {
                  title: "Основные методы объекта",
                  children: [
                    {
                      title: "1. Object.create()",
                      type: "code",
                      description: `
                        <p>Создает новый объект с указанным объектом в качестве прототипа.</p>
                      `,
                      code: `
  const proto = { greet() { console.log('Hello!'); } };
  const obj = Object.create(proto);
  obj.greet(); // 'Hello!'
                      `,
                    },
                    {
                      title: "2. Object.keys()",
                      type: "code",
                      description: `
                        <p>Возвращает массив имен собственных перечисляемых свойств объекта.</p>
                      `,
                      code: `
  const person = { name: 'Alice', age: 25 };
  console.log(Object.keys(person)); // ['name', 'age']
                      `,
                    },
                    {
                      title: "3. Object.values()",
                      type: "code",
                      description: `
                        <p>Возвращает массив значений собственных перечисляемых свойств объекта.</p>
                      `,
                      code: `
  const person = { name: 'Alice', age: 25 };
  console.log(Object.values(person)); // ['Alice', 25]
                      `,
                    },
                    {
                      title: "4. Object.entries()",
                      type: "code",
                      description: `
                        <p>Возвращает массив собственных перечисляемых свойств объекта в виде пар [ключ, значение].</p>
                      `,
                      code: `
  const person = { name: 'Alice', age: 25 };
  console.log(Object.entries(person)); // [['name', 'Alice'], ['age', 25]]
                      `,
                    },
                    {
                      title: "5. Object.assign()",
                      type: "code",
                      description: `
                        <p>Копирует значения всех собственных перечисляемых свойств из одного или нескольких источников в целевой объект.</p>
                      `,
                      code: `
  const target = { a: 1 };
  const source = { b: 2, c: 3 };
  const returnedTarget = Object.assign(target, source);
  console.log(returnedTarget); // { a: 1, b: 2, c: 3 }
                      `,
                    },
                    {
                      title: "6. Object.freeze()",
                      type: "code",
                      description: `
                        <p>Замораживает объект, делая его неизменяемым. Невозможно добавлять, удалять или изменять свойства.</p>
                      `,
                      code: `
  const obj = { name: 'Alice' };
  Object.freeze(obj);
  obj.name = 'Bob'; // не сработает
  console.log(obj.name); // 'Alice'
                      `,
                    },
                    {
                      title: "7. Object.seal()",
                      type: "code",
                      description: `
                        <p>Запечатывает объект, предотвращая добавление или удаление свойств, но позволяя изменять существующие.</p>
                      `,
                      code: `
  const obj = { name: 'Alice' };
  Object.seal(obj);
  obj.age = 25; // не сработает
  obj.name = 'Bob'; // сработает
  console.log(obj); // { name: 'Bob' }
                      `,
                    },
                    {
                      title: "8. Object.prototype.hasOwnProperty()",
                      type: "code",
                      description: `
                        <p>Возвращает булево значение, указывающее, является ли указанное свойство собственным свойством объекта.</p>
                      `,
                      code: `
  const obj = { name: 'Alice' };
  console.log(obj.hasOwnProperty('name')); // true
  console.log(obj.hasOwnProperty('age')); // false
                      `,
                    },
                  ],
                },
                {
                  title: "Дескрипторы объекта",
                  children: [
                    {
                      title: "Определение",
                      type: "list",
                      description: `
                        <p><strong>Дескрипторы объекта</strong> — это объекты, которые описывают свойства объекта, их поведение и характеристики. Они позволяют управлять тем, как свойства могут быть использованы и изменены.</p>
                      `,
                    },
                    {
                      title: "Типы дескрипторов",
                      type: "list",
                      description: `
                        <p>Существуют два типа дескрипторов:</p>
                        <ul>
                          <li><strong>Данные дескрипторы</strong>: Определяют свойство с конкретным значением.</li>
                          <li><strong>Accessor дескрипторы</strong>: Определяют свойство с помощью функций получения и установки (геттеров и сеттеров).</li>
                        </ul>
                      `,
                    },
                    {
                      title: "Пример данных дескриптора",
                      type: "code",
                      description: `
                        <p>Создание свойства с помощью данных дескриптора:</p>
                      `,
                      code: `
  const obj = {};
  Object.defineProperty(obj, 'name', {
    value: 'Alice',
    writable: true, // может быть изменено
    enumerable: true, // будет перечисляться в циклах
    configurable: true // может быть изменено или удалено
  });
  console.log(obj.name); // 'Alice'
                      `,
                    },
                    {
                      title: "Пример accessor дескриптора",
                      type: "code",
                      description: `
                        <p>Создание свойства с помощью accessor дескриптора:</p>
                      `,
                      code: `
  const obj = {
    firstName: 'Alice',
    lastName: 'Smith'
  };
  
  Object.defineProperty(obj, 'fullName', {
    get() {
      return \`\${this.firstName} \${this.lastName}\`;
    },
    set(value) {
      [this.firstName, this.lastName] = value.split(' ');
    },
    enumerable: true,
    configurable: true
  });
  
  console.log(obj.fullName); // 'Alice Smith'
  obj.fullName = 'Bob Johnson';
  console.log(obj.firstName); // 'Bob'
                      `,
                    },
                    {
                      title: "Свойства дескрипторов",
                      type: "list",
                      description: `
                        <p>Дескрипторы имеют следующие свойства:</p>
                        <ul>
                          <li><strong>value</strong>: значение свойства (для данных дескрипторов).</li>
                          <li><strong>writable</strong>: указывает, может ли значение быть изменено.</li>
                          <li><strong>enumerable</strong>: указывает, будет ли свойство перечисляться в циклах.</li>
                          <li><strong>configurable</strong>: указывает, может ли свойство быть удалено или изменено.</li>
                          <li><strong>get</strong>: функция, возвращающая текущее значение свойства (для accessor дескрипторов).</li>
                          <li><strong>set</strong>: функция, задающая новое значение свойства (для accessor дескрипторов).</li>
                        </ul>
                      `,
                    },
                  ],
                },
                {
                  title:
                    "Тернарные, нулевое объединение, необязательное связывание и логические операторы",
                  children: [
                    {
                      title:
                        "Использование тернарного оператора и логических операторов",
                      type: "code",
                      description: `
                        <p>В JavaScript есть несколько удобных операторов, которые помогают упростить код и избавиться от лишних проверок.</p>
                        <ul>
                          <li><strong>Тернарный оператор</strong>: Сокращенная форма if-else, позволяет записать условную логику в одной строке.</li>
                          <li><strong>Оператор нулевого объединения (??)</strong>: Позволяет вернуть правое значение, если левое значение равно null или undefined.</li>
                          <li><strong>Необязательное связывание (?.)</strong>: Позволяет безопасно получать доступ к вложенным свойствам объектов без необходимости проверки каждой промежуточной ссылки.</li>
                        </ul>
                      `,
                      code: `
  // Пример тернарного оператора
  const age = 18;
  const canVote = (age >= 18) ? "Да" : "Нет";
  console.log(canVote); // "Да"

  // Пример оператора нулевого объединения
  const userInput = null;
  const defaultValue = userInput ?? "Значение по умолчанию";
  console.log(defaultValue); // "Значение по умолчанию"

  // Пример необязательного связывания
  const user = {
    profile: {
      name: "Alice",
      age: 30,
    },
  };
  const userCity = user.profile?.city ?? "Город не указан";
  console.log(userCity); // "Город не указан" (поскольку city не существует)
  
  // Пример логического И (&&) и ИЛИ (||)
  const isAuthenticated = true;
  const userRole = isAuthenticated && "admin";
    // вернёт "admin", если isAuthenticated true
  const fallback = userRole || "guest"; // вернёт "guest", если userRole falsy
                      `,
                    },
                  ],
                },
                {
                  title:
                    "Случай переключателя — примеры, где это может быть полезно",
                  children: [
                    {
                      title: "Использование конструкции switch",
                      type: "code",
                      description: `
                      <p>Конструкция switch позволяет выполнять различные действия на основе значения выражения.</p>
                      <ul>
                        <li>Мы можем использовать switch вместо многочисленных if-else, когда нужно проверить одно значение на несколько возможных вариантов.</li>
                        <li>Это делает код более читаемым и поддерживаемым.</li>
                      </ul>
                      <p>Вот несколько примеров использования switch:</p>
                      `,
                      code: `
  // Пример 1: Определение дня недели
  const day = 3;
  let dayName;

  switch (day) {
    case 1:
      dayName = 'Понедельник';
      break;
    case 2:
      dayName = 'Вторник';
      break;
    case 3:
      dayName = 'Среда';
      break;
    case 4:
      dayName = 'Четверг';
      break;
    case 5:
      dayName = 'Пятница';
      break;
    case 6:
      dayName = 'Суббота';
      break;
    case 7:
      dayName = 'Воскресенье';
      break;
    default:
      dayName = 'Некорректный день';
  }

  console.log(dayName); // "Среда"


  // Пример 2: Использование switch с выражением
  const fruit = 'яблоко';
  let color;

  switch (fruit) {
    case 'банан':
      color = 'желтый';
      break;
    case 'яблоко':
      color = 'красный';
      break;
    case 'виноград':
      color = 'зеленый';
      break;
    default:
      color = 'неизвестный цвет';
  }

  console.log(color); // "красный"


  // Пример 3: Объединение случаев
  const grade = 'B';
  let message;

  switch (grade) {
    case 'A':
    case 'B':
      message = 'Отлично!';
      break;
    case 'C':
      message = 'Хорошо!';
      break;
    case 'D':
      message = 'Удовлетворительно!';
      break;
    case 'F':
      message = 'Неп satisfactoriously!';
      break;
    default:
      message = 'Некорректная оценка';
  }

  console.log(message); // "Отлично!"
                      `,
                    },
                  ],
                },
                {
                  title: "Циклы - for, while, do while",
                  children: [
                    {
                      title: "Использование циклов в JavaScript",
                      type: "code",
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
                  title: "Строгое сравнение",
                  children: [
                    {
                      title: "Использование строгого сравнения в JavaScript",
                      type: "code",
                      description: `
                        <p>В JavaScript есть два типа сравнения: нестрогое (==) и строгое (===).</p>
                        <ul>
                          <li><strong>Нестрогое сравнение (==)</strong>: Приводит операнды к одному типу перед сравнением.</li>
                          <li><strong>Строгое сравнение (===)</strong>: Сравнивает как значение, так и тип данных.</li>
                        </ul>
                        <p>Вот примеры использования строгого сравнения:</p>
                      `,
                      code: `
  // Пример нестрогого сравнения
  console.log(5 == '5'); // true
  console.log(null == undefined); // true

  // Пример строгого сравнения
  console.log(5 === '5'); // false
  console.log(null === undefined); // false

  // Строгое сравнение с разными типами
  console.log(1 === 1); // true
  console.log(true === 1); // false
                      `,
                    },
                  ],
                },
                {
                  title: "NaN (Not-a-Number)",
                  children: [
                    {
                      title: "Использование NaN в JavaScript",
                      type: "code",
                      description: `
                        <p>NaN (Not-a-Number) — специальное значение в JavaScript, которое представляет собой результат вычисления, не являющегося числом.</p>
                        <ul>
                          <li>NaN является единственным значением, которое не равно ни одному числу, включая само себя.</li>
                          <li>Для проверки на NaN в JavaScript следует использовать функцию <code>isNaN()</code> или <code>Number.isNaN()</code>.</li>
                        </ul>
                        <p>Вот примеры работы с NaN:</p>
                      `,
                      code: `
  // Примеры, когда результатом является NaN
  console.log(0 / 0); // NaN
  console.log(Math.sqrt(-1)); // NaN
  console.log(parseInt('abc')); // NaN

  // Проверка на NaN
  console.log(isNaN(NaN)); // true
  console.log(isNaN('abc')); // true
  console.log(isNaN(123)); // false

  // Использование Number.isNaN
  console.log(Number.isNaN(NaN)); // true
  console.log(Number.isNaN('abc')); // false
  console.log(Number.isNaN(undefined)); // false
                      `,
                    },
                  ],
                },
                {
                  title: "Отличие между null и undefined",
                  children: [
                    {
                      title: "Описание null и undefined",
                      type: "code",
                      description: `
                        <p><strong>null</strong>: Это специальное значение, указывающее на отсутствие какого-либо объектного значения. Оно явно назначается переменной, чтобы показать, что эта переменная не содержит ничего.</p>
                        <p><strong>undefined</strong>: Это значение автоматически назначается переменной, которая была объявлена, но не инициализирована. Также это происходит, если функция не возвращает значения.</p>
                        <ul>
                          <li>Оба значения представляют отсутствие значения, но в разных контекстах.</li>
                        </ul>
                      `,
                      code: `
  // Примеры null и undefined
  let a = null;      // Явно задано значение null
  let b;             // Не инициализирована, значение undefined

  console.log(a);   // null
  console.log(b);   // undefined

  // Проверка типов
  console.log(typeof a); // "object"
  console.log(typeof b); // "undefined"
                      `,
                    },
                    {
                      title: "Сравнение null и undefined",
                      type: "code",
                      description: `
                        <p>Важно понимать, что при нестрогом сравнении они равны друг другу:</p>
                      `,
                      code: `
  console.log(null == undefined); // true (нестрогое сравнение)
  console.log(null === undefined); // false (строгое сравнение)
                      `,
                    },
                  ],
                },
                {
                  title: "Как объекты превращаются в примитивы",
                  children: [
                    {
                      title: "Преобразование объектов в примитивы",
                      type: "code",
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
                      type: "code",
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
                      type: "code",
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
                      type: "code",
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
                      type: "code",
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
                },
                {
                  title: "Оператор typeof",
                  children: [
                    {
                      title: "Описание оператора typeof",
                      type: "code",
                      description: `
                        <p><strong>typeof</strong>: Это оператор в JavaScript, который используется для определения типа переменной или выражения. Он возвращает строку, описывающую тип аргумента.</p>
                        <ul>
                          <li>Примеры типов: "undefined", "boolean", "number", "string", "object", "function", "symbol".</li>
                        </ul>
                      `,
                      code: `
  // Примеры использования оператора typeof
  console.log(typeof undefined); // "undefined"
  console.log(typeof null);      // "object" (это известная ошибка в JavaScript)
  console.log(typeof 42);        // "number"
  console.log(typeof 'hello');   // "string"
  console.log(typeof {});         // "object"
  console.log(typeof [];          // "object"
  console.log(typeof function(){}); // "function"
                      `,
                    },
                    {
                      title: "Практическое применение",
                      type: "code",
                      description: `
                        <p>Оператор typeof часто используется для проверки типов переменных перед выполнением операций:</p>
                      `,
                      code: `
  let value;

  if (typeof value === 'undefined') {
    console.log('Переменная value не инициализирована.');
  }

  value = 10;

  if (typeof value === 'number') {
    console.log('value является числом.');
  }
                      `,
                    },
                    {
                      title: "Ограничения оператора typeof",
                      type: "code",
                      description: `
                        <p>Некоторые особенности и ограничения:</p>
                        <ul>
                          <li>Для объектов и массивов оператор возвращает "object".</li>
                          <li>Для null он также возвращает "object", что является известной особенностью JavaScript.</li>
                          <li>Для функций возвращает "function", но это подтип объекта.</li>
                        </ul>
                      `,
                      code: `
  console.log(typeof null);       // "object"
  console.log(typeof [1, 2, 3]);  // "object"
  console.log(typeof {};           // "object"
  console.log(typeof (() => {})); // "function"
                      `,
                    },
                    {
                      title: "Вывод",
                      type: "code",
                      description: `
                        <p>Оператор typeof является полезным инструментом в JavaScript для проверки типов данных и может помочь избежать ошибок при работе с переменными.</p>
                      `,
                      code: `
  let value = 'test';
  console.log(typeof value); // "string"
                      `,
                    },
                  ],
                },
                {
                  title: "Контекст this",
                  children: [
                    {
                      title: "Описание",
                      type: "list",
                      description:
                        "this – это специальное ключевое слово в JavaScript, которое ссылается на объект, который в данный момент выполняет код. Значение `this` определяется не тем, как функция была объявлена, а тем, как она была вызвана.",
                    },
                    {
                      title: "Контекст вызова",
                      type: "code",
                      description:
                        "Значение `this` зависит от контекста вызова функции. Вот основные правила:",
                      code: `
  // В глобальном контексте (вне функций) 'this' ссылается на глобальный объект (window в браузере).
  console.log(this); // window
  
  // В методе объекта 'this' ссылается на объект, в контексте которого был вызван метод:
  const obj = {
    name: 'Obj',
    method: function() {
      console.log(this.name);
    }
  };
  obj.method(); // 'Obj'
                      `,
                    },
                    {
                      title: "Значение this в функциях",
                      type: "code",
                      description:
                        "В обычной функции `this` ссылается на глобальный объект (или undefined в строгом режиме).",
                      code: `
  function showThis() {
    console.log(this);
  }
  
  showThis(); // window (или undefined в строгом режиме)
                      `,
                    },
                    {
                      title: "Классы и this",
                      type: "code",
                      description:
                        "В классах `this` ссылается на экземпляр класса, который был создан с помощью ключевого слова new.",
                      code: `
  class MyClass {
    constructor(value) {
      this.value = value;
    }
    showValue() {
      console.log(this.value);
    }
  }
  
  const instance = new MyClass(10);
  instance.showValue(); // 10
                      `,
                    },
                    {
                      title: "Стрелочные функции и this",
                      type: "code",
                      description:
                        "Стрелочные функции не имеют собственного `this` и наследуют его из родительского контекста, в котором они были созданы.",
                      code: `
  const obj = {
    value: 20,
    method: function() {
      const arrowFunction = () => {
        console.log(this.value);
      };
    arrowFunction();
  }};

  obj.method(); // 20
                      `,
                    },
                    {
                      title: "Способы контроля this",
                      type: "code",
                      description:
                        "Можно контролировать значение `this` в функции с помощью методов `.call()`, `.apply()` и `.bind()`.",
                      code: `
  function show() {  
    console.log(this.name);
    const obj = { name: 'Test' };
    show.call(obj);    // 'Test'
    show.apply(obj);   // 'Test'
    const boundShow = show.bind(obj);
    boundShow();       // 'Test'
  }
                      `,
                    },
                    {
                      title: "Вывод",
                      type: "list",
                      description:
                        "Контекст `this` в JavaScript может быть сложным для понимания. Важно понимать, как он работает в разных контекстах для избежания ошибок.",
                    },
                  ],
                },
                {
                  title: "function declaration and expression, arrow function",
                  children: [
                    {
                      title: "Описание объявлений и выражений функций",
                      type: "code",
                      description: `
                        <p><strong>Объявление функции</strong>: Это способ определения функции с использованием ключевого слова <code>function</code>. Функция может быть вызвана до ее определения (подъем).</p>
                        <p><strong>Выражение функции</strong>: Это определение функции, которое присваивается переменной. Функция не может быть вызвана до ее объявления.</p>
                      `,
                      code: `
  // Объявление функции
  function sayHello() {
    console.log("Hello!");
  }
  sayHello(); // "Hello!"

  // Выражение функции
  const greet = function() {
    console.log("Hi!");
  };
  greet(); // "Hi!"
                      `,
                    },
                    {
                      title: "Стрелочные функции",
                      type: "code",
                      description: `
                        <p><strong>Стрелочные функции</strong>: Это упрощенный синтаксис для объявления функций, введенный в ES6. Они не имеют собственного значения <code>this</code> и не могут быть использованы в качестве конструктора.</p>
                      `,
                      code: `
  const multiply = (x, y) => x * y;
  console.log(multiply(2, 3)); // 6

  const add = (a, b) => {
    return a + b;
  };
  console.log(add(2, 3)); // 5
                      `,
                    },
                    {
                      title: "Сравнение синтаксиса",
                      type: "code",
                      description: `
                        <p>Различия в синтаксисе между обычными и стрелочными функциями:</p>
                      `,
                      code: `
  // Обычная функция
  function square(x) {
    return x * x;
  }

  // Стрелочная функция
  const squareArrow = (x) => x * x;

  console.log(square(4)); // 16
  console.log(squareArrow(4)); // 16
                      `,
                    },
                    {
                      title: "Преимущества",
                      type: "code",
                      description: `
                        <p>Стрелочные функции обеспечивают более лаконичный синтаксис и удобнее работают с <code>this</code> в контексте методов, так как они наследуют <code>this</code> от родительской области видимости.</p>
                      `,
                      code: `
  const obj = {
    value: 100,
    regularFunction: function() {
      console.log(this.value);
    },
    arrowFunction: () => {
      console.log(this.value);
    },
  };

  obj.regularFunction(); // 100
  obj.arrowFunction();   // undefined (т.к. 'this' не ссылается на obj)
                      `,
                    },
                  ],
                },
                {
                  title: "Посредством чего в JS реализуются наследования?",
                  children: [
                    {
                      title: "Прототипное наследование",
                      type: "code",
                      description: `
                        <p><strong>Прототипное наследование</strong>: В JavaScript объекты могут наследовать свойства и методы от других объектов через механизм прототипов. Каждый объект имеет внутреннюю ссылку на свой прототип, который может содержать свойства и методы, доступные наследуемым объектам.</p>
                        <p>Это характерно для JavaScript и позволяет разработчикам расширять возможности объектов без необходимости использовать классы.</p>
                      `,
                      code: `
  // Создаем объект родитель
  const parent = {
    greet: function() {
      console.log("Hello from parent!");
    }
  };

  // Создаем объект child с наследованием от parent
  const child = Object.create(parent);
  child.greet(); // "Hello from parent!"
                      `,
                    },
                    {
                      title: "Классы ES6",
                      type: "code",
                      description: `
                        <p><strong>Классы ES6</strong>: С появлением ES6 в JavaScript появилась возможность использования классов. Классы предоставляют более удобный и понятный синтаксис для реализации наследования. Классы также используют механизм прототипов под капотом.</p>
                      `,
                      code: `
  class Parent {
    greet() {
      console.log("Hello from parent class!");
    }
  }

  class Child extends Parent {
    greet() {
      console.log("Hello from child class!");
    }
  }

  const childInstance = new Child();
  childInstance.greet(); // "Hello from child class!"
  const parentInstance = new Parent();
  parentInstance.greet(); // "Hello from parent class!"
                      `,
                    },
                    {
                      title:
                        "Наследование с использованием Object.setPrototypeOf",
                      type: "code",
                      description: `
                        <p><strong>Object.setPrototypeOf</strong>: Этот метод можно использовать для изменения прототипа существующего объекта. Это также позволяет реализовать наследование, но рекомендуется использовать в основном в особых случаях, т.к. может привести к ухудшению производительности.</p>
                      `,
                      code: `
  const parent = {
    greet: function() {
      console.log("Hello from parent!");
    }
  };

  const child = {};
  Object.setPrototypeOf(child, parent);
  child.greet(); // "Hello from parent!"
                      `,
                    },
                    {
                      title: "Сравнение различных способов наследования",
                      type: "code",
                      description: `
                        <p>Различные способы реализации наследования в JavaScript имеют свои преимущества и недостатки:</p>
                        <ul>
                          <li><strong>Прототипное наследование:</strong> Гибкость, но может быть сложнее для понимания начинающим.</li>
                          <li><strong>Классы ES6:</strong> Более читаемый и привычный синтаксис, похожий на другие языки программирования.</li>
                          <li><strong>Object.setPrototypeOf:</strong> Не рекомендуется для частого использования, так как имеет низкую производительность.</li>
                        </ul>
                      `,
                      code: `
  // Обзор методов
  console.log(Object.getPrototypeOf(child) === parent); // true
  console.log(child instanceof Child); // true
  console.log(child instanceof Parent); // true
                      `,
                    },
                  ],
                },
                {
                  title: "Что такое IIFE (Immediately Invoked Function Expression)?",
                  children: [
                    {
                      title: "Описание IIFE",
                      type: "code",
                      description: `
                        <p>
                          <strong>IIFE</strong>: Это функциональное выражение, которое выполняется сразу после его определения. Это позволяет создать локальную область видимости и изолировать переменные от глобальной области видимости.
                        </p>
                        <p>
                          IIFE часто используется для организации кода и предотвращения загрязнения глобального пространства имен.
                        </p>
                      `,
                      code: `
  (function() {
    var localVariable = 'I am local';
    console.log(localVariable); // 'I am local'
  })();
  
  // console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined
                      `,
                    },
                    {
                      title: "Синтаксис IIFE",
                      type: "code",
                      description: `
                        <p>Стандартный синтаксис включает в себя определение функции, заключенное в круглые скобки, и сразу же вызываемое с использованием дополнительных круглых скобок.</p>
                      `,
                      code: `
  (function() {
    // Код здесь
  })();
  
  // Или с использованием стрелочной функции
  (() => {
    // Код здесь
  })();
                      `,
                    },
                    {
                      title: "Преимущества использования IIFE",
                      type: "code",
                      description: `
                        <p>
                          <strong>Преимущества:</strong>
                          <ul>
                            <li>Изолированная область видимости для переменных.</li>
                            <li>Предотвращение конфликтов переменных с глобальной областью видимости.</li>
                            <li>Помогает безопасно избегать переменных, которые могут повлиять на другие скрипты.</li>
                          </ul>
                        </p>
                      `,
                      code: `
  (function() {
    var count = 0; // Локальная переменная, недоступная вне IIFE
    console.log(count); // 0
  })();
  
  // console.log(count); // Uncaught ReferenceError: count is not defined
                      `,
                    },
                  ],
                },
              ],
            },
            {
              title: "React questions",
              children: [],
            },
            {
              title: "typification questions",
              children: [

              ],
            },
            {
              title: "Темы интервью 📚",
              children: [
                {
                  title: "Общие вопросы",
                  type: "list",
                  description: `
                    <ul>
                      <li>- SOLID.</li>
                      <li>- как работает браузер.</li>
                      <li>- Что такое DOM.</li>
                      <li>- Из чего состоит HTTP запрос.</li>
                      <li>- Основы ООП.</li>
                      <li>- Основные структуры данных и их организация (массив, список, стек, очередь, дерево, хеш-таблица и т.д.).</li>
                      <li>- Основные алгоритмы сортировки и поиска.</li>
                      <li>- Двоичная система счисления.</li>
                      <li>- Разница между cookie, sessionStorage и localStorage.</li>
                      <li>- Что такое линтеры?</li>
                      <li>- Что такое Prettier?</li>
                    </ul>
                  `,
                },
                {
                  title: "HTML/CSS",
                  type: "list",
                  description: `
                    <ul>
                      <li><strong>Основные концепции</strong>
                        <ul>
                          <li>Состав базовой HTML-страницы</li>
                          <li>Способы подключения стилей в HTML</li>
                          <li>На что нужно обратить внимание при разработке мультиязычных сайтов?</li>
                        </ul>
                      </li>
                      <li><strong>CSS</strong>
                        <ul>
                          <li>Вес селектора или что такое специфичность в CSS.</li>
                          <li>Псевдоклассы и псевдоэлементы.</li>
                          <li>Коробчатая модель (box-sizing).</li>
                          <li>em против rem, относительные и абсолютные значения.</li>
                          <li>Разница между блочными и строчными элементами.</li>
                          <li>Флексбокс.</li>
                          <li>Сетка.</li>
                        </ul>
                      </li>
                      <li><strong>Семантика</strong>
                        <ul>
                          <li>Какие существуют принципы семантической верстки?</li>
                          <li>Что такое #shadow-root в инспекторе HTML-страницы?</li>
                        </ul>
                      </li>
                      <li><strong>Прочее</strong>
                        <ul>
                          <li>Что такое прогрессивная развертка?</li>
                          <li>Объясни разницу между script, script async и script defer.</li>
                          <li>Как изменить цвет в svg файле?</li>
                    </ul>
                  `,
                },
                {
                  title: "JS",
                  type: "list",
                  description: `  
                    <ul>
                      <li><strong>Основные концепции</strong>
                        <ul>
                          <li>Типы данных.</li>
                          <li>NaN.</li>
                          <li>Разница и схожесть между null и undefined.</li>
                          <li>Как объекты превращаются в примитивы?</li>
                          <li>Оператор typeof.</li>
                          <li>Преобразования типов данных.</li>
                          <li>Переменные let, const, var.</li>
                          <li>this.</li>
                        </ul>
                      </li>
                      <li><strong>Функции</strong>
                        <ul>
                          <li>Функция declaration and expression, arrow function.</li>
                          <li>Что такое функции высшего порядка.</li>
                          <li>Для чего используется директива «use strict».</li>
                          <li>Почему результатом сравнения двух похожих объектов является false.</li>
                          <li>Как создать объект, не имеющий прототипа.</li>
                        </ul>
                      </li>
                      <li><strong>Наследование и замыкания</strong>
                        <ul>
                          <li>Посредством чего в JS реализуются наследования?</li>
                          <li>Что такое замыкание (closure) и какие сценарии его использования?</li>
                          <li>Как определить наличие свойства в объекте.</li>
                        </ul>
                      </li>
                      <li><strong>Promise и колбэки</strong>
                        <ul>
                          <li>Promise.</li>
                          <li>Что такое async/await.</li>
                          <li>Как работают колбэки.</li>
                        </ul>
                      </li>
                      <li><strong>Структуры данных</strong>
                        <ul>
                          <li>Чем отличается Map от WeakMap.</li>
                          <li>Чем отличается Set от WeakSet.</li>
                          <li>Как работает сборщик мусора в JS.</li>
                        </ul>
                      </li>
                      <li><strong>Взаимодействие с DOM</strong>
                        <ul>
                          <li>Как получить доступ к элементу DOM?</li>
                          <li>Как отследить изменения поля объекта в функциональном компоненте?</li>
                          </ul>
                      </li>
                      <li><strong>Алгоритмы и модели</strong>
                        <ul>
                          <li>В чем разница между spread-оператором и rest-оператором?</li>
                          <li>Случай переключателя — примеры, где это может быть полезно.</li>
                          <li>Циклы - for, while, do while.</li>
                          <li>Строгое и нестрогое сравнение.</li>
                          <li>Тернарные, нулевое объединение, необязательное связывание и логические операторы – синтаксис и варианты использования.</li>
                        </ul>
                      </li>
                      <li><strong>Безопасность</strong>
                        <ul>
                          <li>Что такое XSS (Cross-Site Scripting)?</li>
                          <li>В чем разница между методами call, apply, bind?</li>
                        </ul>
                    </ul>
                  `,
                },
                {
                  title: "Network",
                  type: "list",
                  description: `
                  
                  `,
                },
                {
                  title: "React",
                  type: "list",
                  description: `
                    <ul>
                      <li><strong>Основные концепции</strong>
                        <ul>
                          <li>Что такое JSX?</li>
                          <li>Что такое JSX-компоненты?</li>
                          <li>Что такое виртуальный DOM?</li>
                          <li>Что такое реквизиты в React?</li>
                          <li>Что такое фрагмент React?</li>
                        </ul>
                      </li>
                      <li><strong>Компоненты</strong>
                        <ul>
                          <li>Что такое Portal</li>
                          <li>В чем разница между классовыми и функциональными компонентами?</li>
                          <li>Чем управляемые компоненты отличаются от неуправляемых?</li>
                          <li>Как выполнить рендеринг элементов массива?</li>
                          <li>Что такое методы жизненного цикла компонента?</li>
                          <li>Как работают условный рендеринг элементов?</li>
                          <li>Как отследить размонтирование функционального компонента?</li>
                          <li>Что такое пользовательский хук?</li>
                          <li>Перечислите правила создания пользовательского хука.</li>
                        </ul>
                      </li>
                      <li><strong>Хуки</strong>
                        <ul>
                          <li>Какие хуки вы знаете?</li>
                          <li>В чем заключаются особенности использования useState?</li>
                          <li>В чем заключаются особенности использования useEffect?</li>
                          <li>Для чего и как используется useMemo?</li>
                          <li>Для чего используется useCallback и как он работает?</li>
                          <li>В чем разница между useMemo и useCallback?</li>
                          <li>Для чего используется useRef и как он работает?</li>
                          <li>Для чего используется useContext и как он работает?</li>
                        </ul>
                      </li>
                      <li><strong>Состояние</strong>
                        <ul>
                          <li>Что такое менеджер состояний и с какими из них вы работали?</li>
                          <li>В каких случаях можно использовать локальное состояние, а когда следует использовать глобальное состояние?</li>
                          <li>Что такое reducer в Redux и какие параметры он принимает?</li>
                          <li>Какой паттерн реализует Redux?</li>
                          <li>Что такое Redux?</li>
                          <li>В чем разница между Redux и Mobx?</li>
                          <li>Что такое store?</li>
                          <li>Что такое action?</li>
                          <li>Что такое reducer?</li>
                          <li>Что такое middleware?</li>
                          <li>Что такое dispatch?</li>
                          <li>Что такое subscribe?</li>
                          <li>Что такое bindActionCreators?</li>
                          <li>Что такое действие и как можно изменить состояние в Redux?</li>
                        </ul>
                      </li>
                      <li><strong>Архитектура</strong>
                        <ul>
                          <li>Как бы вы построили хорошую архитектуру проекта на React?</li>
                          <li>Что такое Feature-Sliced Design?</li>
                          <li>Как выполняется валидация данных в React-приложении?</li>
                          <li>Какие архитектурные решения для React вы знаете?</li>
                          <li>Расскажи об основных библиотеках React, которые ты знаешь. Какие у них плюсы и минусы?</li>
                        </ul>
                      </li>
                      <li><strong>Другие аспекты</strong>
                        <ul>
                          <li>Как отследить изменения поля объекта в функциональном компоненте?</li>
                          <li>Как получить доступ к элементу DOM?</li>
                          <li>Как обрабатывать асинхронные действия в Redux Thunk?</li>
                          <li>Зачем нужны ключи в списках при использовании map()?</li>
                          <li>Что такое React.memo()?</li>
                          <li>Что такое React Reconciliation?</li>
                          <li>Что такое публичный API?</li>
                        </ul>
                      </li>
                    </ul>
                  `,
                },
                {
                  title: "TypeScript",
                  type: "list",
                  description: `
                  
                  `,
                },
              ],
            },
          ],
        },
        {
          title: "Theme Backend",
          children: [
            {
              title: "new topic",
              // type: "title",
            },
          ],
        },
        {
          title: "Definitions",
          children: [
            {
              title: "",
              type: "list",
              description: `<strong>Functional programming</strong> — это парадигма программирования, в которой основное внимание уделяется использованию функций и избеганию изменения состояния и данных.`
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Reducer</strong> - чистая функция, которая принимает старый 'state' и 'action', и возвращает новое модифицированное состояние если это нужно. По правилам иммутабельности работает лишь с копией state.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Actions</strong> - объект, который содержит тип и payload, которые передаются в reducer.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Thunk</strong> - функция, которая возвращает другую функцию.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Middleware</strong> - функция, которая принимает store и next и возвращает функцию, которая принимает action и вызывает next(action).",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Selectors</strong> - функция, которая принимает state и возвращает его часть.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>HOC</strong> - Higher Order Component - функция, которая принимает компонент и возвращает новый компонент.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Hooks</strong> - функции, которые позволяют использовать состояние и действия в функциональном компоненте.",
            },
            {
              title: "",
              type: "list",
              description:
                '<strong>Promise</strong> - объект, который представляет асинхронное выполнение. Он может быть в состояниях "pending", "fulfilled" и "rejected."',
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Callback</strong> - функция, которая вызывается после завершения асинхронного действия.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>BLL</strong> - Business Logic Layer (слой бизнес логики).",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>DAL</strong> - Data Access Layer (слой доступа к данным).",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>UI</strong> - User Interface (пользовательский интерфейс).",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>API</strong> - Application Programming Interface (интерфейс программного обеспечения).",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>REST API</strong> - Representational State Transfer API (REST API).",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Side Effects</strong> - эффекты, которые происходят в результате выполнения асинхронного действия.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>OOP</strong> - Объектно-ориентированное программирование.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Encapsulation</strong> - инкапсуляция, которая предотвращает доступ к необходимому коду извне.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Polymorphism</strong> - полиморфизм, который позволяет обрабатывать различные объекты в одном коде.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Inheritance</strong> - наследование, которое позволяет создавать новые классы на основе существующих.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Constructor</strong> - конструктор, который вызывается при создании объекта.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Super</strong> - ключевое слово, которое вызывается в конструкторе родительского класса.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>This</strong> - ключевое слово, которое ссылается на текущий объект.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Prototype</strong> - объект, который хранит ссылки на другие объекты.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Bind</strong> - метод, который привязывает функцию к объекту.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Component</strong> - это функциональный компонент React, который возвращает JSX.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>ComponentDidMount</strong> - это жизненный цикл компонента, который вызывается после его рендеринга.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>__proto__</strong> - это свойство объекта, которое хранит ссылки на другие объекты.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>SOLID</strong> - это принципы ООП, которые помогают разработчикам создавать простые и удобные программы.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>KISS (Keep It Simple, Stupid)</strong> - это принцип, который подразумевает, что системы следует проектировать максимально просто; избегать ненужной сложности.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>DRY (Don't Repeat Yourself)</strong> - Принцип, согласно которому информация и логика не должны повторяться в коде, чтобы уменьшить дублирование и облегчить поддержку.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>YAGNI (You Aren't Gonna Need It)</strong> - Принцип, который гласит, что не следует добавлять функциональности, пока не возникнет реальная необходимость, чтобы избежать излишней сложности.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Clean code</strong> - Это код, который легко читать, понимать и поддерживать. Он следует стандартам стиля, хорошо структурирован и документирован.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Continuous Integration (CI)</strong> -  Это практика разработки, при которой изменения в коде автоматически интегрируются и тестируются в основном репозитории, что позволяет выявлять и устранять ошибки на ранних стадиях.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Delivery (Continuous Delivery)</strong> - Это подход, при котором код всегда готов к выпуску в продакшн. Это позволяет быстро и предсказуемо разворачивать обновления.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Deployments</strong> - Этот процесс включает в себя развертывание приложения или обновлений на продуктивном сервере для его использования конечными пользователями.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Agile</strong> - Методология разработки программного обеспечения, ориентированная на гибкость и адаптивность, которая подчеркивает необходимость быстрой поставки частичных и готовых продуктов.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Scrum</strong> - Фреймворк для управления проектами в Agile, который организует команды в спринты для быстрой разработки, обратной связи и улучшения процессов.",
            },
            {
              title: "",
              type: "list",
              description:
                "<strong>Kanban</strong> - Метод управления, который использует визуальные доски и карточки для отслеживания и управления потоком работы, акцентируя внимание на оптимизации процессов и сокращении времени выполнения задач.",
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
  ],
};
