export const ModulesJavaScript = {
  id: 527,
  title: "Модули в JavaScript",
  children: [
    {
      title: "Что такое модули?",
      type: "text",
      description: `
          <p><strong>Модуль</strong> — это отдельный файл с кодом, который экспортирует (предоставляет) и импортирует (использует) функциональность.</p>
          
          <p><strong>Зачем нужны:</strong></p>
          <ul>
            <li>Разделение кода на логические части</li>
            <li>Изоляция областей видимости</li>
            <li>Упрощение поддержки и тестирования</li>
            <li>Возможность повторного использования кода</li>
          </ul>
          
          <p><strong>Типы модулей:</strong></p>
          <ul>
            <li><strong>ES-модули</strong> (стандарт, современный вариант)</li>
            <li><strong>CommonJS</strong> (используется в Node.js)</li>
            <li><strong>AMD/UMD</strong> (устаревшие, для браузеров)</li>
          </ul>
        `,
    },
    {
      title: "Синтаксис ES-модулей",
      type: "text",
      description: `
          <p><strong>Экспорт (export):</strong></p>
          <pre><code>// Именованный экспорт (много в файле)
  export const apiUrl = 'https://api.example.com';
  export function fetchData() { /* ... */ }
  
  // Экспорт по умолчанию (один в файле)
  export default class User { /* ... */ }</code></pre>
  
          <p><strong>Импорт (import):</strong></p>
          <pre><code>// Импорт именованных экспортов
  import { apiUrl, fetchData } from './utils.js';
  
  // Импорт экспорта по умолчанию
  import User from './models/User.js';
  
  // Импорт всего содержимого модуля
  import * as utils from './utils.js';</code></pre>
        `,
    },
    {
      title: "Особенности ES-модулей",
      type: "text",
      description: `
          <p><strong>1. Строгий режим по умолчанию</strong> (use strict)</p>
          <p><strong>2. Собственная область видимости</strong> (переменные не попадают в global)</p>
          <p><strong>3. Статический импорт/экспорт</strong> (импорты анализируются до выполнения кода)</p>
          <p><strong>4. Поддержка динамического импорта</strong> (ленивая загрузка)</p>
          
          <pre><code>// Динамический импорт
  button.addEventListener('click', async () => {
    const module = await import('./dialog.js');
    module.open();
  });</code></pre>
        `,
    },
    {
      title: "CommonJS (Node.js модули)",
      type: "text",
      description: `
          <p>Синтаксис, используемый в Node.js до появления ES-модулей:</p>
          
          <p><strong>Экспорт:</strong></p>
          <pre><code>// Экспорт объекта
  module.exports = {
    port: 3000,
    startServer() { /* ... */ }
  };
  
  // Альтернативный синтаксис
  exports.port = 3000;</code></pre>
  
          <p><strong>Импорт:</strong></p>
          <pre><code>const config = require('./config.js');
  const { port } = require('./config.js');</code></pre>
  
          <p><strong>Отличия от ES-модулей:</strong></p>
          <ul>
            <li>Загрузка синхронная</li>
            <li>Динамический require (можно вызывать в любом месте)</li>
            <li>Нет поддержки tree-shaking</li>
          </ul>
        `,
    },
    {
      title: "Практические примеры",
      type: "text",
      description: `
          <p><strong>1. Разделение кода на компоненты (React):</strong></p>
          <pre><code>// Button.jsx
  export default function Button({ children }) {
    return &lt;button className="btn"&gt;{children}&lt;/button&gt;;
  }
  
  // App.jsx
  import Button from './components/Button';</code></pre>
  
          <p><strong>2. Утилитарные функции:</strong></p>
          <pre><code>// math.js
  export const sum = (a, b) => a + b;
  export const PI = 3.1415;
  
  // main.js
  import { sum, PI } from './math.js';</code></pre>
  
          <p><strong>3. Конфигурация проекта:</strong></p>
          <pre><code>// config.js
  export default {
    apiKey: '12345',
    timeout: 5000
  };
  
  // api.js
  import config from './config.js';</code></pre>
        `,
    },
    {
      title: "Циклические зависимости",
      type: "text",
      description: `
          <p><strong>Проблема:</strong> Когда модуль A импортирует модуль B, который импортирует модуль A.</p>
          
          <p><strong>Пример:</strong></p>
          <pre><code>// a.js
  import { b } from './b.js';
  export const a = 'A';
  
  // b.js
  import { a } from './a.js'; // Будет undefined!
  export const b = 'B';</code></pre>
  
          <p><strong>Решение:</strong></p>
          <ul>
            <li>Реорганизовать код, чтобы избежать циклов</li>
            <li>Использовать динамический импорт</li>
            <li>Вынести общую логику в третий модуль</li>
          </ul>
        `,
    },
    {
      title: "Настройка модулей",
      type: "text",
      description: `
          <p><strong>1. В браузерах:</strong></p>
          <pre><code>&lt;script type="module" src="main.js"&gt;&lt;/script&gt;</code></pre>
  
          <p><strong>2. В Node.js:</strong></p>
          <ul>
            <li>Добавить <code>"type": "module"</code> в package.json</li>
            <li>Или использовать расширение <code>.mjs</code></li>
          </ul>
  
          <p><strong>3. В сборщиках (Webpack, Vite):</strong></p>
          <pre><code>// webpack.config.js
  module.exports = {
    experiments: {
      outputModule: true // Для ES-модулей
    }
  };</code></pre>
  
          <p><strong>Алиасы для путей:</strong></p>
          <pre><code>import Component from '@/components/Component'; // Вместо '../../components/Component'</code></pre>
        `,
    },
  ],
};
