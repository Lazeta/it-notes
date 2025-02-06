export const SOLID = {
  id: 193,
  title: "SOLID",
  children: [
    {
      title: "S - Single Responsibility Principle",
      type: "text",
      description: `
            <p>Принцип единственной ответственности:</p>
            <ul>
              <li><strong>Определение</strong>: Каждый класс должен иметь одну единственную ответственность.</li>
              <li><strong>Цель</strong>: Упрощение тестирования и модификации кода.</li>
            </ul>
          `,
    },
    {
      title: "O - Open/Closed Principle",
      type: "text",
      description: `
            <p>Принцип открытости/закрытости:</p>
            <ul>
              <li><strong>Определение</strong>: Классы должны быть открыты для расширения, но закрыты для изменения.</li>
              <li><strong>Цель</strong>: Позволяет добавлять новую функциональность без изменения существующего кода.</li>
            </ul>
          `,
    },
    {
      title: "L - Liskov Substitution Principle",
      type: "text",
      description: `
            <p>Принцип подстановки Лисков:</p>
            <ul>
              <li><strong>Определение</strong>: Объекты подкласса должны быть взаимозаменяемыми с объектами суперкласса.</li>
              <li><strong>Цель</strong>: Поддержание корректности программы при замене объектов.</li>
            </ul>
          `,
    },
    {
      title: "I - Interface Segregation Principle",
      type: "text",
      description: `
            <p>Принцип сегрегации интерфейсов:</p>
            <ul>
              <li><strong>Определение</strong>: Клиенты не должны зависеть от интерфейсов, которые они не используют.</li>
              <li><strong>Цель</strong>: Избежать ненужных зависимостей и создать узкоспециализированные интерфейсы.</li>
            </ul>
          `,
    },
    {
      title: "D - Dependency Inversion Principle",
      type: "text",
      description: `
            <p>Принцип инверсии зависимостей:</p>
            <ul>
              <li><strong>Определение</strong>: Модули верхнего уровня не должны зависеть от модулей нижнего уровня; обе группы должны зависеть от абстракций.</li>
              <li><strong>Цель</strong>: Уменьшение связанности между компонентами системы.</li>
            </ul>
          `,
    },
  ],
};
