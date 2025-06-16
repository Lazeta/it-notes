export const ReadMoreAboutMemoryLeaksClosures = {
  id: 515,
  title: "Подробнее о производительности и утечках памяти Замыкания",
  children: [
    {
      title: "Способы улучшить работу с замыканиями",
      type: "text",
      description: `
        <p>Чтобы избежать утечек памяти при использовании замыканий (closures) в JavaScript, важно правильно освобождать ссылки на внешние переменные, которые больше не нужны. Вот основные способы:</p>
        <ul>
          <li><strong>Явный сброс ссылок:</strong> Освобождение ссылок на замыкания, когда они больше не нужны.</li>
          <li><strong>Осторожность с DOM-элементами:</strong> Избегание сохранения ссылок на DOM-узлы, которые могут быть удалены.</li>
          <li><strong>Использование WeakMap и WeakSet:</strong> Эти структуры данных позволяют создавать слабые ссылки, которые не мешают сборке мусора.</li>
          <li><strong>Избегание ненужных замыканий:</strong> Минимизация создания лишних замыканий, особенно в циклах или обработчиках событий.</li>
          <li><strong>Инструменты для отладки утечек памяти:</strong> Использование инструментов разработчика для анализа памяти.</li>
        </ul>
      `,
    },
    {
      title: "Явный сброс ссылок",
      type: "text",
      description: `
        <p>Если замыкание сохраняется (например, в переменной или объекте), можно явно обнулить ссылку, когда она больше не нужна. Это позволяет сборщику мусора (Garbage Collector, GC) очистить память.</p>
      `,
      code: `
function createHeavyClosure() {
  const bigData = new Array(1000000).fill("Данные"); // Большие данные
  return () => {
    console.log(bigData.length);
  };
}

const closure = createHeavyClosure();
closure(); // Используем замыкание

// Когда замыкание больше не нужно:
closure = null; // ✅ Сбрасываем ссылку, разрешая сборку мусора (GC)
      `,
    },
    {
      title: "Осторожность с DOM-элементами",
      type: "text",
      description: `
        <p>Замыкания, ссылающиеся на DOM-узлы, могут вызывать утечки памяти, особенно если элемент удаляется со страницы, но остаётся в памяти из-за замыкания. Решение — использовать слабые ссылки (WeakRef) или явно удалять обработчики событий.</p>
      `,
      code: `
function setupButton() {
  const button = document.getElementById('myButton');
  
  const onClick = () => {
    console.log(button.id); // Замыкание хранит ссылку на 'button'
  };

  button.addEventListener('click', onClick);

  // При удалении кнопки:
  button.removeEventListener('click', onClick); // ✅ Важно для GC
}
      `,
      explanation: `
        <p>Альтернативное решение — использование <code>WeakRef</code>, чтобы избежать сильных ссылок на DOM-узлы:</p>
      `,
      alternativeCode: `
function setupButton() {
  const button = document.getElementById('myButton');
  const weakButton = new WeakRef(button); // Слабая ссылка

  const onClick = () => {
    const button = weakButton.deref();
    if (button) {
      console.log(button.id);
    }
  };

  button.addEventListener('click', onClick);

  // При удалении кнопки:
  button.removeEventListener('click', onClick); // ✅ Удаление обработчика
}
      `,
    },
    {
      title: "Использование WeakMap и WeakSet",
      type: "text",
      description: `
        <p><strong>WeakMap</strong> и <strong>WeakSet</strong> — это структуры данных, которые позволяют создавать слабые ссылки на объекты. Они не препятствуют сборке мусора для своих ключей/значений, что делает их полезными для управления памятью.</p>
      `,
      code: `
const weakMap = new WeakMap();

function createClosure() {
  const key = {}; // Объект как ключ
  const bigData = new Array(1000000).fill("Данные");

  weakMap.set(key, bigData); // Слабая ссылка на bigData

  return () => {
    console.log(weakMap.get(key));
  };
}

const closure = createClosure();
closure();

// Когда key удаляется (например, выходит из scope), bigData тоже может быть собрана GC.
      `,
    },
    {
      title: "Избегание ненужных замыканий",
      type: "text",
      description: `
        <p>Иногда замыкания создаются случайно, например, в циклах или при обработке событий. Это может привести к ошибкам или утечкам памяти. Вот пример проблемы и её решения:</p>
      `,
      code: `
// Проблема:
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 100); // Все таймеры выводят 10 (из-за замыкания на общую 'i')
}

// Решение:
// Используйте let вместо var (блочная область видимости)
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 100); // ✅ 0, 1, 2, ..., 9
}

// Или с явным созданием scope:
for (var i = 0; i < 10; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100); // ✅ Каждое замыкание получает свою копию 'j'
  })(i);
}
      `,
    },
    {
      title: "Инструменты для отладки утечек памяти",
      type: "text",
      description: `
        <p>Для диагностики утечек памяти можно использовать следующие инструменты:</p>
        <ul>
          <li><strong>Chrome DevTools:</strong> Вкладка <strong>Memory</strong> позволяет делать снимки памяти (<strong>Heap Snapshots</strong>) и анализировать их.</li>
          <li><strong>WeakRef и FinalizationRegistry (ES2021):</strong> Позволяют отслеживать сборку мусора для объектов.</li>
        </ul>
      `,
      code: `
const registry = new FinalizationRegistry((heldValue) => {
  console.log(\`Объект \${heldValue} был удалён GC\`);
});

function trackObject(obj) {
  registry.register(obj, obj.name);
}

// Пример использования:
const obj = { name: 'Example' };
trackObject(obj);

obj = null; // ✅ После этого GC удалит объект, и будет вызван коллбэк из FinalizationRegistry
      `,
    },
  ],
};
