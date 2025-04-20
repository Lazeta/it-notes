export const PortalsReact = {
  id: 516,
  title: "Portals в React",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
          <p><strong>Порталы (Portals)</strong> — это механизм в React, позволяющий рендерить дочерние элементы <strong>вне родительского DOM-дерева</strong>, но с сохранением всех преимуществ React-компонентов (пропсы, контекст, события).</p>
          <p>Основное применение:</p>
          <ul>
            <li>Модальные окна, тултипы, уведомления.</li>
            <li>Виджеты, которые должны "всплывать" над основным интерфейсом.</li>
            <li>Интеграция с внешними DOM-элементами (например, встраивание в тело документа).</li>
          </ul>
        `,
    },
    {
      title: "Зачем использовать?",
      type: "text",
      description: `
          <ul>
            <li><strong>Обход ограничений z-index:</strong> Позволяет избежать проблем с наложением элементов (например, модалка внутри контейнера с <code>overflow: hidden</code>).</li>
            <li><strong>Семантический DOM:</strong> Критически важные элементы (модалки) можно размещать прямо в <code>&lt;body&gt;</code>.</li>
            <li><strong>Изоляция стилей:</strong> Порталы помогают управлять CSS-каскадом (например, для библиотек компонентов).</li>
          </ul>
        `,
    },
    {
      title: "Синтаксис",
      type: "text",
      description: `
          <p>Используется метод <code>ReactDOM.createPortal()</code>:</p>
          <pre><code>import ReactDOM from 'react-dom';
  
  function Modal({ children }) {
    return ReactDOM.createPortal(
      &lt;div className="modal"&gt;{children}&lt;/div&gt;,
      document.getElementById('portal-root') // Целевой DOM-элемент
    );
  }</code></pre>
          <p><strong>Важно:</strong> Порталы <u>не влияют</u> на контекст и поведение React-компонентов — события всплывают через Virtual DOM как обычно!</p>
        `,
    },
    {
      title: "Пример использования",
      type: "text",
      description: `
          <p><strong>1. Подготовка HTML:</strong></p>
          <pre><code>&lt;!-- index.html --&gt;
  &lt;body&gt;
    &lt;div id="root"&gt;&lt;/div&gt;
    &lt;div id="portal-root"&gt;&lt;/div&gt; &lt;!-- Контейнер для порталов --&gt;
  &lt;/body&gt;</code></pre>
  
          <p><strong>2. Компонент с порталом:</strong></p>
          <pre><code>function App() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      &lt;div&gt;
        &lt;button onClick={() => setIsOpen(true)}&gt;Открыть модалку&lt;/button&gt;
        {isOpen && (
          &lt;Modal onClose={() => setIsOpen(false)}&gt;
            &lt;h2&gt;Заголовок&lt;/h2&gt;
            &lt;p&gt;Контент модального окна!&lt;/p&gt;
          &lt;/Modal&gt;
        )}
      &lt;/div&gt;
    );
  }</code></pre>
        `,
    },
    {
      title: "Лучшие практики",
      type: "text",
      description: `
          <ul>
            <li><strong>Доступность:</strong> Добавляйте ARIA-атрибуты для модалок (<code>role="dialog"</code>, <code>aria-modal="true"</code>).</li>
            <li><strong>Управление фокусом:</strong> Используйте <code>useRef</code> и хук <code>useEffect</code> для фокусировки на портале при открытии.</li>
            <li><strong>Очистка:</strong> Удаляйте порталы при анмаунте (React делает это автоматически).</li>
            <li><strong>Тестирование:</strong> В Jest используйте <code>screen.getByRole</code> для поиска элементов в портале.</li>
          </ul>
        `,
    },
    {
      title: "Ограничения",
      type: "text",
      description: `
          <ul>
            <li><strong>SSR:</strong> На сервере порталы не работают — нужна проверка на <code>typeof window !== 'undefined'</code>.</li>
            <li><strong>События:</strong> Клики вне портала (например, закрытие по оверлею) требуют обработки вручную.</li>
            <li><strong>Интеграция:</strong> Не все библиотеки (например, для анимаций) корректно работают с порталами.</li>
          </ul>
        `,
    },
  ],
};
