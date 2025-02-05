export const CodeModule = {
  id: 806,
  title: "код",
  children: [
    {
      title: "Код с описанием и заголовком",
      type: "text",
      description: `
            <p>Пример добавления обработчика события клика:</p>
          `,
      code: `
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
console.log('Кнопка нажата!');
}, {
capture: false,
once: true
});
          `,
    },
    {
      title: "Код с заголовком без описания",
      type: "text",
      code: `
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
console.log('Кнопка нажата!');
}, {
capture: false,
once: true
});
          `,
    },
    {
      title: "", // Код без заголовка и описания
      type: "text",
      code: `
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
console.log('Кнопка нажата!');
}, {
capture: false,
once: true
});
          `,
    },
    {
      title:
        "Код с заголовком, описанием в виде списков и каких других структур текста",
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
    {
      title: "Код с заголовком без описания с ссылкой и телом ссылки",
      type: "text",
      code: `
const button = document.getElementById('myButton');

button.addEventListener('click', function(event) {
console.log('Кнопка нажата!');
}, {
capture: false,
once: true
});
          `,
      link: "ссылка",
      url: "https://learn.javascript.ru/promise-basics",
    },
    {
      title: "Код с заголовком без описания с неправильной ссылкой",
      type: "text",
      code: `
button.addEventListener('click', function(event) {
console.log('Кнопка нажата!');
}              
          `,
      link: "ссылка",
      url: "http:",
    },
    {
      title: "Код с заголовком без описания с пустой ссылкой",
      type: "text",
      code: `
button.addEventListener('click', function(event) {
console.log('Кнопка нажата!');
}              
          `,
      link: "ссылка",
      url: "",
    },
  ],
};
