export const ReadMoreAboutMemoryLeaksClosures = {
  id: 515,
  title: "Подробнее о производительности и утечках памяти Замыкания",
  children: [
    {
      title: "способы улучшить замыкания",
      type: "text",
      description: `
              <p>Чтобы избежать утечек памяти при использовании замыканий (closures) в JavaScript, важно правильно освобождать ссылки на внешние переменные, которые больше не нужны. Вот основные способы:</p>
              <ul>
                <li>1.Явный сброс ссылок на замыкания</li>
                <li>2.Осторожность с DOM-элементами</li>
                <li>3.Использование WeakMap и WeakSet</li>
                <li>4.Избегание ненужных замыканий</li>
                <li>5.Инструменты для отладки утечек памяти</li>
              </ul>
            `,
    },
    {
      title: "Явный сброс ссылок",
      type: "text",
      description: `
              <p>Если замыкание сохраняется (например, в переменной или объекте), можно вручную обнулить ссылку, когда она больше не нужна.</p>
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
              <p>Замыкания, ссылающиеся на DOM-узлы, могут вызывать утечки, особенно если элемент удаляется со страницы, но остаётся в памяти из-за замыкания.</p>
            `,
      code: `
function setupButton() {
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log(button.id); // Замыкание хранит ссылку на 'button'
});
}

// Даже если удалить кнопку через button.remove(), замыкание внутри обработчика сохранит ссылку на неё.
// Решение:
// Используйте слабые ссылки (WeakRef в современных браузерах).
// Удаляйте обработчики событий явно.

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
button.removeEventListener('click', onClick); // ✅ Важно для GC
}
        `,
    },
    {
      title: "Использование WeakMap и WeakSet",
      type: "text",
      description: `
              <p>Эти структуры не препятствуют сборке мусора для своих ключей/значений.</p>
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
              <p>Иногда замыкание создаётся случайно, например, в циклах или при обработке событий.</p>
            `,
      code: `
// Проблема:
for (var i = 0; i < 10; i++) {
setTimeout(() => console.log(i), 100); // Все таймеры выводят 10 (из-за замыкания на общую 'i')
}

// Решение:
// Используйте let вместо var (блочная область видимости)
// Создавайте новые scope для каждой итерации цикла
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
      title: "Инструменты для отладки утечек",
      type: "text",
      description: `
          <ul>
            <li><strong>Chrome DevTools</strong> → вкладка <strong>Memory</strong></li>
            <ul>
            <li>Снимайте <strong>Heap Snapshots</strong> и сравнивайте их.</li>
            <li>Ищите «отцепленные» DOM-узлы или неочищенные замыкания.</li>
            </ul>
          </ul>

              <ul>
                <li><strong>WeakRef и FinalizationRegistry</strong> (ES2021):</li>
                <ul>
                  <li>Позволяют отслеживать сборку мусора.</li>
                </ul>
              </ul>
            `,
      code: `
const registry = new FinalizationRegistry((heldValue) => {
console.log(\`Объект \${heldValue} был удалён GC\`);
});

function trackObject(obj) {
registry.register(obj, obj.name);
}
        `,
    },
  ],
};
