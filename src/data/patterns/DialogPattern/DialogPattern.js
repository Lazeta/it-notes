export const DIALOG_MODAL_PATTERN = {
  id: 211,
  title: "Dialog (Modal) Pattern",
  children: [
    {
      title: "Определение",
      type: "text",
      description: `
          <p><strong>Модальное окно (Dialog/Modal)</strong> — это UI-компонент, который временно блокирует взаимодействие с основным интерфейсом, требуя от пользователя выполнить действие или принять решение.</p>
          <p>Используется для:</p>
          <ul>
            <li>Отображения критически важной информации.</li>
            <li>Подтверждения действий (например, удаления данных).</li>
            <li>Ввода данных (формы, настройки).</li>
            <li>Ограничения потока работы до завершения задачи.</li>
          </ul>
        `,
    },
    {
      title: "Ключевые характеристики",
      type: "text",
      description: `
          <ul>
            <li><strong>Фокус:</strong> Пользователь не может взаимодействовать с фоном, пока модальное окно открыто.</li>
            <li><strong>Контекст:</strong> Связано с текущей задачей (не должно появляться "просто так").</li>
            <li><strong>Закрытие:</strong> Должно быть явное действие пользователя (кнопка, крестик) или клавиша <code>Esc</code>.</li>
            <li><strong>Доступность:</strong> Важно учитывать ARIA-атрибуты (например, <code>role="dialog"</code>, <code>aria-modal="true"</code>).</li>
          </ul>
        `,
    },
    {
      title: "Типы модальных окон",
      type: "text",
      description: `
          <ul>
            <li><strong>Alert Dialog:</strong> Информирует пользователя (например, об ошибке). Часто имеет только кнопку "OK".</li>
            <li><strong>Confirmation Dialog:</strong> Запрашивает подтверждение (например, "Вы уверены, что хотите удалить?").</li>
            <li><strong>Form Dialog:</strong> Содержит поля для ввода данных (регистрация, настройки).</li>
            <li><strong>Full-screen Modal:</strong> Занимает весь экран (используется для сложных задач, например, выбор даты).</li>
          </ul>
        `,
    },
    {
      title: "Правила использования",
      type: "text",
      description: `
          <ul>
            <li><strong>Избегайте избыточности:</strong> Не злоупотребляйте модальными окнами — они прерывают пользователя.</li>
            <li><strong>Четкий заголовок:</strong> Ясно указывайте цель окна (например, "Удалить файл?" вместо "Внимание!").</li>
            <li><strong>Простота действий:</strong> Максимум 2-3 кнопки (например, "Отмена" и "Подтвердить").</li>
            <li><strong>Анимация:</strong> Плавное появление/исчезновение помогает пользователю отследить контекст.</li>
          </ul>
        `,
    },
    {
      title: "Примеры кода",
      type: "text",
      description: `
          <p><strong>HTML (простой модальный диалог):</strong></p>
          <pre><code>&lt;div class="modal" role="dialog" aria-modal="true"&gt;
    &lt;h2&gt;Подтвердите действие&lt;/h2&gt;
    &lt;p&gt;Вы уверены, что хотите удалить этот элемент?&lt;/p&gt;
    &lt;button onclick="closeModal()"&gt;Отмена&lt;/button&gt;
    &lt;button onclick="deleteItem()"&gt;Удалить&lt;/button&gt;
  &lt;/div&gt;</code></pre>
  
          <p><strong>React (использование библиотеки):</strong></p>
          <pre><code>import { Modal } from 'antd';
  
  const ConfirmModal = () => (
    &lt;Modal
      title="Удаление"
      visible={true}
      onOk={deleteItem}
      onCancel={closeModal}
    &gt;
      &lt;p&gt;Вы уверены?&lt;/p&gt;
    &lt;/Modal&gt;
  );</code></pre>
        `,
    },
    {
      title: "Инструменты и библиотеки",
      type: "text",
      description: `
          <ul>
            <li><strong>Vanilla JS:</strong> <code>dialog</code> (нативный HTML-элемент, но ограниченная кастомизация).</li>
            <li><strong>React:</strong> Material-UI Modal, Ant Design Modal, Chakra UI.</li>
            <li><strong>Vue:</strong> Vuetify Dialogs, Quasar Dialog.</li>
            <li><strong>Доступность:</strong> Библиотеки <code>react-aria-modal</code>, <code>focus-trap-react</code>.</li>
          </ul>
        `,
    },
  ],
};
