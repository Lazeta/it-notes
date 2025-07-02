export const testLibrary = {
  id: 101450,
  title: "Библиотеки",
  questions: [
    {
      id: 101451,
      question: "Что такое библиотека в программировании?",
      answer: `
      **Библиотека:**
      - Это набор готовых функций, классов или модулей, которые можно использовать для решения определенных задач.
      - Библиотеки помогают ускорить разработку, предоставляя готовые решения для распространенных проблем.

      **Примеры:**
      - \`Lodash\`: Утилиты для работы с массивами, объектами и строками.
      - \`Moment.js\`: Работа с датами и временем.
      - \`Axios\`: HTTP-запросы к серверу.
      `,
    },
    {
      id: 101452,
      question: "Какие популярные JavaScript-библиотеки вы знаете?",
      answer: `
      **Популярные JavaScript-библиотеки:**
      1. **React:** Библиотека для создания пользовательских интерфейсов.
      2. **Lodash:** Утилиты для работы с массивами, объектами и другими структурами данных.
      3. **Axios:** Для выполнения HTTP-запросов.
      4. **Moment.js (Luxon):** Для работы с датами и временем.
      5. **jQuery:** Упрощает работу с DOM и AJAX.
      6. **Three.js:** Для работы с 3D-графикой.
      7. **Chart.js:** Для создания графиков и диаграмм.

      **Пример использования Axios:**
      \`\`\`javascript
      axios.get('https://api.example.com/data ')
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
      \`\`\`
      `,
    },
    {
      id: 101453,
      question: "Что такое Lodash и зачем она нужна?",
      answer: `
      **Lodash:**
      - Это популярная библиотека JavaScript, которая предоставляет множество утилит для работы с массивами, объектами, строками и другими типами данных.
      - Она упрощает написание кода и делает его более читаемым.

      **Примеры использования:**
      \`\`\`javascript
      // Глубокое клонирование объекта
      const clone = _.cloneDeep({ a: { b: 2 } });

      // Фильтрация массива
      const filtered = _.filter([1, 2, 3, 4], n => n % 2 === 0);

      // Группировка по ключу
      const grouped = _.groupBy(['one', 'two', 'three'], 'length');
      console.log(grouped); // { 3: ['one', 'two'], 5: ['three'] }
      \`\`\`
      `,
    },
    {
      id: 101454,
      question: "Что такое Axios и как он используется?",
      answer: `
      **Axios:**
      - Это библиотека для выполнения HTTP-запросов (GET, POST, PUT, DELETE и т.д.).
      - Она поддерживает обещания (Promises) и работает как в браузере, так и на сервере (Node.js).

      **Пример использования:**
      \`\`\`javascript
      // GET-запрос
      axios.get('https://api.example.com/users ')
        .then(response => console.log(response.data))
        .catch(error => console.error(error));

      // POST-запрос
      axios.post('https://api.example.com/users ', { name: 'Alice' })
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
      \`\`\`
      `,
    },
    {
      id: 101455,
      question: "Что такое Moment.js и какие альтернативы существуют?",
      answer: `
      **Moment.js:**
      - Это библиотека для работы с датами и временем в JavaScript.
      - Она позволяет форматировать, парсить, манипулировать и отображать даты.

      **Пример использования:**
      \`\`\`javascript
      const now = moment();
      console.log(now.format('YYYY-MM-DD')); // Текущая дата в формате 'ГГГГ-ММ-ДД'
      \`\`\`

      **Альтернативы:**
      1. **Luxon:** Современная альтернатива Moment.js с поддержкой временных зон.
      2. **date-fns:** Легковесная библиотека с функциями для работы с датами.
      3. **Day.js:** Минималистичная версия Moment.js.

      **Пример Day.js:**
      \`\`\`javascript
      const formattedDate = dayjs().format('YYYY-MM-DD');
      console.log(formattedDate);
      \`\`\`
      `,
    },
    {
      id: 101456,
      question: "Что такое jQuery и почему её использование уменьшилось?",
      answer: `
      **jQuery:**
      - Это библиотека JavaScript, которая упрощает работу с DOM, событиями, анимациями и AJAX-запросами.
      - Она была особенно популярна в эпоху старых браузеров, где приходилось писать много кросс-браузерного кода.

      **Причины снижения популярности:**
      1. **Современные API браузеров:**
         - Нативные методы (например, \`querySelector\`, \`fetch\`) заменяют многие функции jQuery.
      2. **Легковесные фреймворки:**
         - React, Vue и другие фреймворки предоставляют более современные способы работы с интерфейсом.
      3. **Производительность:**
         - jQuery может быть избыточной для простых задач.

      **Пример использования:**
      \`\`\`javascript
      // Выбор элемента и изменение текста
      $('.my-element').text('Hello, jQuery!');
      \`\`\`
      `,
    },
    {
      id: 101457,
      question: "Как добавить библиотеку в проект?",
      answer: `
      **Добавление библиотеки:**
      1. **Через CDN:**
         - Включите ссылку на библиотеку в HTML-файл.
         \`\`\`html
         <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js "></script>
         \`\`\`
      2. **Через npm/yarn:**
         - Установите библиотеку в проект.
         \`\`\`bash
         npm install axios
         \`\`\`
         - Импортируйте её в коде:
         \`\`\`javascript
         import axios from 'axios';
         \`\`\`
      3. **Локально:**
         - Скачайте файл библиотеки и подключите его локально.
         \`\`\`html
         <script src="/path/to/library.js"></script>
         \`\`\`
      `,
    },
    {
      id: 101458,
      question: "Что такое Three.js и для чего она используется?",
      answer: `
      **Three.js:**
      - Это библиотека для работы с 3D-графикой в браузере.
      - Она использует WebGL для рендеринга сложных 3D-сцен.

      **Применение:**
      - Создание игр.
      - Визуализация данных.
      - Интерактивные 3D-модели.

      **Пример использования:**
      \`\`\`javascript
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      }

      animate();
      \`\`\`
      `,
    },
    {
      id: 101459,
      question: "Что такое Chart.js и как создать график?",
      answer: `
      **Chart.js:**
      - Это библиотека для создания графиков и диаграмм в браузере.
      - Она поддерживает различные типы графиков: линейные, столбчатые, круговые и т.д.

      **Пример создания графика:**
      \`\`\`html
      <canvas id="myChart" width="400" height="200"></canvas>
      <script src="https://cdn.jsdelivr.net/npm/chart.js "></script>
      <script>
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Январь', 'Февраль', 'Март', 'Апрель'],
            datasets: [{
              label: 'Продажи',
              data: [12, 19, 3, 5],
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      </script>
      \`\`\`
      `,
    },
    {
      id: 101460,
      question: "Как выбрать библиотеку для проекта?",
      answer: `
      **Критерии выбора библиотеки:**
      1. **Задачи проекта:**
         - Выберите библиотеку, которая решает именно вашу задачу.
      2. **Популярность:**
         - Проверьте количество скачиваний и активность сообщества.
      3. **Документация:**
         - Хорошая документация упрощает использование библиотеки.
      4. **Размер:**
         - Убедитесь, что библиотека не слишком тяжелая для вашего проекта.
      5. **Поддержка:**
         - Проверьте, активно ли поддерживаются обновления и исправления ошибок.

      **Пример:**
      - Для работы с HTTP-запросами выберите \`Axios\`.
      - Для работы с датами — \`Luxon\` или \`date-fns\`.
      `,
    },
  ],
};
