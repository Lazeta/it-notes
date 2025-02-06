export const Sets = {
  id: 162,
  title: "Set",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
            <p><code>Set</code> — это встроенный объект в JavaScript, который позволяет хранить коллекцию уникальных значений. Это означает, что в одном <code>Set</code> не может быть дубликатов. Значения могут быть любого типа, включая объекты и примитивы.</p>
          `,
    },
    {
      title: "Создание Set",
      type: "text",
      description: `
            <p>Создание нового <code>Set</code> осуществляется с помощью конструктора <code>Set()</code>.</p>
          `,
      code: `
const mySet = new Set();
          `,
    },
    {
      title: "Добавление значений",
      type: "text",
      description: `
            <p>Для добавления значений в <code>Set</code> используется метод <code>add()</code>.</p>
          `,
      code: `
mySet.add(1);
mySet.add(2);
mySet.add(2); // Дубликат не будет добавлен
console.log(mySet); // Вывод: Set { 1, 2 }
          `,
    },
    {
      title: "Основные методы Set",
      type: "text",
      description: `
            <p>Вот несколько основных методов, доступных для <code>Set</code>:</p>
            <ul>
              <li><strong>add(value)</strong>: Добавляет новое значение в <code>Set</code>.</li>
              <li><strong>delete(value)</strong>: Удаляет значение из <code>Set</code>. Возвращает <code>true</code>, если значение было удалено, и <code>false</code>, если его не было.</li>
              <li><strong>has(value)</strong>: Проверяет, присутствует ли значение в <code>Set</code>. Возвращает <code>true</code> или <code>false</code>.</li>
              <li><strong>clear()</strong>: Удаляет все значения из <code>Set</code>.</li>
              <li><strong>size</strong>: Свойство, возвращающее количество уникальных значений в <code>Set</code>.</li>
            </ul>
          `,
    },
    {
      title: "Пример использования Set",
      type: "text",
      description: `
            <p>Вот простой пример использования <code>Set</code>:</p>
          `,
      code: `
const numbers = new Set([1, 2, 3, 4, 5]);

// Добавление значений
numbers.add(6);
numbers.add(2); // Дубликат не добавится

console.log(numbers); // Вывод: Set { 1, 2, 3, 4, 5, 6 }

// Проверка наличия значения
console.log(numbers.has(3)); // Вывод: true
console.log(numbers.has(7)); // Вывод: false

// Удаление значения
numbers.delete(4);
console.log(numbers); // Вывод: Set { 1, 2, 3, 5, 6 }

// Размер Set
console.log(numbers.size); // Вывод: 5

// Очистка Set
numbers.clear();
console.log(numbers.size); // Вывод: 0
          `,
    },
    {
      title: "Преимущества использования Set",
      type: "text",
      description: `
            <p>Использование <code>Set</code> имеет несколько преимуществ:</p>
            <ul>
              <li>Уникальность значений: автоматически удаляет дубликаты.</li>
              <li>Быстрые операции: добавление, удаление и проверка наличия значений выполняется быстро.</li>
              <li>Поддержка любых типов данных, включая объекты.</li>
            </ul>
          `,
    },
  ],
};
