export const LivingAndNonlivingCollections = {
  id: 152,
  title: "Living and nonliving collections",
  children: [
    {
      title: "1. Что такое коллекции в JavaScript?",
      type: "text",
      description: `
            <p>Коллекции в JavaScript - это объекты, которые хранят группы элементов. Они могут быть живыми или неживыми в зависимости от их поведения при изменении DOM.</p>
          `,
    },
    {
      title: "2. Живые коллекции",
      type: "text",
      description: `
            <p>Живые коллекции автоматически обновляются при изменении DOM. Примеры:</p>
            <ul>
              <li><code>document.getElementsByTagName()</code></li>
              <li><code>document.getElementsByClassName()</code></li>
              <li><code>document.childNodes</code></li>
            </ul>
            <p>При добавлении или удалении элементов, живые коллекции будут отражать эти изменения.</p>
          `,
    },
    {
      title: "3. Неживые коллекции",
      type: "text",
      description: `
            <p>Неживые коллекции не обновляются при изменении DOM. Примеры:</p>
            <ul>
              <li><code>document.querySelectorAll()</code></li>
              <li><code>Array.from()</code> (при преобразовании живых коллекций)</li>
            </ul>
            <p>Эти коллекции сохраняют состояние на момент их создания и не реагируют на изменения в DOM.</p>
          `,
    },
    {
      title: "4. Пример работы с живыми коллекциями",
      type: "text",
      description: `
            <p>Пример использования живой коллекции:</p>
          `,
      code: `
    const elements = document.getElementsByClassName('example');
    console.log(elements.length); // Выводит количество элементов с классом 'example'
    
    // Добавим новый элемент с классом 'example'
    const newElement = document.createElement('div');
    newElement.className = 'example';
    document.body.appendChild(newElement);
    
    console.log(elements.length); // Теперь длина коллекции увеличилась
          `,
    },
    {
      title: "5. Пример работы с неживыми коллекциями",
      type: "text",
      description: `
            <p>Пример использования неживой коллекции:</p>
          `,
      code: `
    const staticElements = document.querySelectorAll('.example');
    console.log(staticElements.length); // Выводит количество элементов с классом 'example'
    
    // Добавим новый элемент с классом 'example'
    const newStaticElement = document.createElement('div');
    newStaticElement.className = 'example';
    document.body.appendChild(newStaticElement);
    
    console.log(staticElements.length); // Длина коллекции не изменилась
          `,
    },
  ],
};
