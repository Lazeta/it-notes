export const addEventListenerFunction = {
  id: 131,
  title: "addEventListener() method arguments",
  children: [
    {
      title: "1. event",
      type: "text",
      description: `
            <p>Название события, которое вы хотите отслеживать (например, <code>'click'</code>, <code>'keyup'</code>, <code>'load'</code>).</p>
          `,
    },
    {
      title: "2. handler",
      type: "text",
      description: `
            <p>Функция, которая будет вызвана при возникновении события. Она принимает объект события в качестве первого аргумента.</p>
          `,
    },
    {
      title: "3. options",
      type: "text",
      description: `
            <p>Опциональный аргумент, который может быть:</p>
            <ul>
              <li><strong>boolean:</strong> Если <code>true</code>, обработчик будет вызван на фазе захвата.</li>
              <li><strong>object:</strong> Объект с параметрами:</li>
              <ul>
                <li><code>capture</code>: Если <code>true</code>, обработчик срабатывает на фазе захвата.</li>
                <li><code>once</code>: Если <code>true</code>, обработчик вызовется только один раз.</li>
                <li><code>passive</code>: Если <code>true</code>, обработчик не вызовет <code>preventDefault()</code>.</li>
              </ul>
            </ul>
          `,
    },
    {
      title: "Пример использования",
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
  ],
};
