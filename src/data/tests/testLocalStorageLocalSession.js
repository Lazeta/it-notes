export const testLocalStorageLocalSession = {
  id: 100725,
  title: "LocalStorage, SessionStorage",
  questions: [
    {
      id: 100726,
      question: "Что такое LocalStorage и SessionStorage в JavaScript и для чего они используются?",
      answer: `
LocalStorage:
Применение: Хранит данные, доступные между сессиями.
Размер: Обычно ограничен до 5-10 МБ.
Время жизни: Данные сохраняются до тех пор, пока пользователь их не удалит.
Доступ: Доступен только для клиентских скриптов.

SessionStorage:
Применение: Хранит данные, специфичные для одной сессии.
Размер: Обычно ограничен до 5-10 МБ.
Время жизни: Данные существуют лишь в течение одной вкладки.
Доступ: Доступен только из текущей вкладки.
      `,
    },
    {
      id: 100727,
      question: "Как можно использовать JSON для хранения сложных объектов в LocalStorage? Приведите пример.",
      answer: `
LocalStorage может сохранять только строки, поэтому для работы с объектами, массивами и другими сложными структурами данных используется сериализация в JSON (преобразование в строку) и парсинг (восстановление из строки).
Сериализация(запись):
const data = { name: "Alice", age: 25, hobbies: ["coding", "music"] };
localStorage.setItem('userData', JSON.stringify(data));

Парсинг(чтение):
const savedData = JSON.parse(localStorage.getItem('userData'));
console.log(savedData); // { name: "Alice", age: 25, hobbies: ["coding", "music"] }
      `,
    },
    {
      id: 100728,
      question: "Как можно использовать паттерн обсервер для отслеживания изменений в данных, хранящихся в LocalStorage?",
      answer: `
Паттерн Наблюдатель позволяет отслеживать изменения данных в LocalStorage и автоматически уведомлять подписанные компоненты.      
      `,
    }
  ],
};
