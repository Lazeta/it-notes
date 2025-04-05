export const CSSModule = {
  id: 501,
  title: "CSS",
  children: [
    {
      title: "Способы подключения стилей в HTML",
      id: 2500,
      children: [
        {
          title: "1. Внешний стиль (External CSS)",
          type: "text",
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
          type: "text",
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
          type: "text",
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
      id: 2501,
      children: [
        {
          title:
            "Специфичность в CSS определяет, какой стиль применяется к элементу при наличии множества правил. Она рассчитывается на основе различных типов селекторов:",
          type: "text",
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
      id: 2502,
      children: [
        {
          title:
            "Псевдоклассы и псевдоэлементы позволяют стилизовать элементы на основе их состояния или позиции:",
          type: "text",
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
      id: 2503,
      children: [
        {
          title:
            "Коробчатая модель описывает пространство, занимаемое элементом",
          type: "text",
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
        {
          title: "Зачем нужен box-sizing?",
          type: "text",
          description: `
            <p>Свойство <code>box-sizing</code> определяет, как рассчитывается ширина и высота элемента. Оно позволяет избежать путаницы с размерами элементов, особенно когда используются отступы и границы. Без <code>box-sizing: border-box</code>, добавление <strong>padding</strong> и <strong>border</strong> увеличивает фактические размеры элемента, что может привести к нежелательным эффектам, особенно в макетах на основе сеток.</p>
            <p>С помощью <code>box-sizing: border-box</code> вы можете установить ширину и высоту элемента так, чтобы они включали в себя <strong>padding</strong> и <strong>border</strong>, что делает управление размерами более предсказуемым.</p>
          `,
        },
        {
          title: "Пример использования box-sizing",
          type: "text",
          description: `
            <p>Пример применения свойства <code>box-sizing</code>:</p>
          `,
          code: `
    * {
      box-sizing: border-box;
    }
    
    div {
      margin: 10px;
      border: 1px solid black;
      padding: 5px;
      width: 100px; // Включает в себя padding и border
    }
          `,
        },
      ],
    },
    {
      title: "em против rem, относительные и абсолютные значения",
      id: 2504,
      children: [
        {
          title:
            "<code>em</code> и <code>rem</code> - это относительные единицы измерения, используемые в CSS:",
          type: "text",
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
      id: 2505,
      children: [
        {
          title:
            "Позиционирование в CSS управляет размещением элементов на странице:",
          type: "text",
          description: `
            <ul>
              <li><strong>position: static</strong>: Обычное потоковое позиционирование.</li>
              <li><strong>position: relative</strong>: Относительное позиционирование, элемент сдвигается относительно своего обычного положения.</li>
              <li><strong>position: absolute</strong>: Абсолютное позиционирование относительно ближайшего родительского элемента.</li>
              <li><strong>position: fixed</strong>: Фиксированное позиционирование относительно окна браузера.</li>
              <li><strong>position: sticky</strong>: Элемент ведет себя как <code>relative</code> до определенной точки, после чего становится <code>fixed</code>.</li>
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
          type: "text",
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
          type: "text",
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
          type: "text",
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
          type: "text",
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
      id: 2506,
      children: [
        {
          title:
            "Флексбокс - это метод расположения элементов в одной строке или колонке с возможностью изменения их размеров:",
          type: "text",
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
      id: 2507,
      children: [
        {
          title: "CSS Grid",
          type: "text",
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
      id: 2508,
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
          type: "text",
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
      ],
    },
    {
      title: "Разница между блочными и строчными элементами",
      id: 2509,
      children: [
        {
          title: "Блочные элементы",
          type: "text",
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
          type: "text",
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
          type: "text",
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
      id: 2510,
      children: [
        {
          title: "",
          type: "video",
          url: "https://www.youtube.com/embed/gVxyTOPPEPc",
        },
      ],
    },
    {
      title: "Принципы семантической верстки",
      id: 2511,
      children: [
        {
          title: "Принципы семантической верстки включают:",
          type: "text",
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
      id: 2512,
      children: [
        {
          title:
            "Shadow DOM позволяет создавать отдельные области DOM, чтобы избежать конфликтов стилей",
          type: "text",
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
      id: 2513,
      children: [
        {
          title: "Существует несколько популярных CSS-методологий:",
          type: "text",
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
      id: 2514,
      children: [
        {
          title: "Изменение цвета",
          type: "text",
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
};
