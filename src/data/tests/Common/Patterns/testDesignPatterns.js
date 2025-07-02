export const testDesignPatterns = {
  id: 101900,
  title: "Тест по паттернам проектирования",
  questions: [
    {
      id: 101901,
      question: "Что такое паттерны проектирования?",
      answer: `
      **Паттерны проектирования:**
      - Это проверенные решения типовых задач, возникающих при разработке программного обеспечения.
      - Они помогают улучшить структуру кода, сделать его более читаемым, поддерживаемым и масштабируемым.

      **Основные категории:**
      1. **Порождающие (Creational):** Отвечают за создание объектов.
      2. **Структурные (Structural):** Определяют способы построения связей между объектами.
      3. **Поведенческие (Behavioral):** Описывают взаимодействие между объектами.

      **Примеры:**
      - Singleton (порождающий).
      - Adapter (структурный).
      - Observer (поведенческий).
      `,
    },
    {
      id: 101902,
      question: "Что такое Singleton и как он используется?",
      answer: `
      **Singleton:**
      - Это порождающий паттерн, который гарантирует, что у класса есть только один экземпляр, и предоставляет глобальную точку доступа к нему.

      **Пример использования:**
      \`\`\`javascript
      class Singleton {
        constructor() {
          if (!Singleton.instance) {
            Singleton.instance = this;
          }
          return Singleton.instance;
        }

        log() {
          console.log('This is a singleton instance');
        }
      }

      const instance1 = new Singleton();
      const instance2 = new Singleton();

      console.log(instance1 === instance2); // true
      \`\`\`
      `,
    },
    {
      id: 101903,
      question: "Что такое Factory Method и как он работает?",
      answer: `
      **Factory Method:**
      - Это порождающий паттерн, который определяет общий интерфейс для создания объектов в суперклассе, позволяя подклассам изменять тип создаваемых объектов.

      **Пример:**
      \`\`\`javascript
      class Creator {
        createProduct() {
          throw new Error('You must implement the createProduct method');
        }
      }

      class ConcreteCreatorA extends Creator {
        createProduct() {
          return new ProductA();
        }
      }

      class ConcreteCreatorB extends Creator {
        createProduct() {
          return new ProductB();
        }
      }

      class ProductA {
        use() {
          console.log('Using Product A');
        }
      }

      class ProductB {
        use() {
          console.log('Using Product B');
        }
      }

      const creatorA = new ConcreteCreatorA();
      const productA = creatorA.createProduct();
      productA.use(); // Using Product A
      \`\`\`
      `,
    },
    {
      id: 101904,
      question: "Что такое Observer и как он применяется?",
      answer: `
      **Observer:**
      - Это поведенческий паттерн, который позволяет объектам подписываться на события друг друга и получать уведомления о происходящих изменениях.

      **Пример:**
      \`\`\`javascript
      class Subject {
        constructor() {
          this.observers = [];
        }

        subscribe(observer) {
          this.observers.push(observer);
        }

        unsubscribe(observer) {
          this.observers = this.observers.filter(obs => obs !== observer);
        }

        notify(data) {
          this.observers.forEach(observer => observer.update(data));
        }
      }

      class Observer {
        update(data) {
          console.log(\`Received data: \${data}\`);
        }
      }

      const subject = new Subject();
      const observer1 = new Observer();
      const observer2 = new Observer();

      subject.subscribe(observer1);
      subject.subscribe(observer2);

      subject.notify('Hello Observers!');
      // Received data: Hello Observers!
      // Received data: Hello Observers!
      \`\`\`
      `,
    },
    {
      id: 101905,
      question: "Что такое Adapter и зачем он нужен?",
      answer: `
      **Adapter:**
      - Это структурный паттерн, который позволяет объектам с несовместимыми интерфейсами работать вместе.

      **Пример:**
      \`\`\`javascript
      class OldSystem {
        request() {
          return 'Old request';
        }
      }

      class NewSystem {
        specificRequest() {
          return 'New specific request';
        }
      }

      class Adapter {
        constructor(newSystem) {
          this.newSystem = newSystem;
        }

        request() {
          return \`Adapter: \${this.newSystem.specificRequest()}\`;
        }
      }

      const oldSystem = new OldSystem();
      const newSystem = new NewSystem();
      const adapter = new Adapter(newSystem);

      console.log(oldSystem.request()); // Old request
      console.log(adapter.request()); // Adapter: New specific request
      \`\`\`
      `,
    },
    {
      id: 101906,
      question: "Что такое Decorator и как он используется?",
      answer: `
      **Decorator:**
      - Это структурный паттерн, который позволяет динамически добавлять объектам новые свойства или поведение, не меняя их код.

      **Пример:**
      \`\`\`javascript
      class Component {
        operation() {
          return 'Base operation';
        }
      }

      class Decorator {
        constructor(component) {
          this.component = component;
        }

        operation() {
          return \`Decorated (\${this.component.operation()})\`;
        }
      }

      const baseComponent = new Component();
      const decoratedComponent = new Decorator(baseComponent);

      console.log(baseComponent.operation()); // Base operation
      console.log(decoratedComponent.operation()); // Decorated (Base operation)
      \`\`\`
      `,
    },
    {
      id: 101907,
      question: "Что такое Command и как он работает?",
      answer: `
      **Command:**
      - Это поведенческий паттерн, который превращает запросы в объекты, позволяя передавать их как аргументы, ставить в очередь или сохранять.

      **Пример:**
      \`\`\`javascript
      class Receiver {
        execute() {
          console.log('Receiver executing command');
        }
      }

      class Command {
        constructor(receiver) {
          this.receiver = receiver;
        }

        execute() {
          this.receiver.execute();
        }
      }

      class Invoker {
        setCommand(command) {
          this.command = command;
        }

        executeCommand() {
          this.command.execute();
        }
      }

      const receiver = new Receiver();
      const command = new Command(receiver);
      const invoker = new Invoker();

      invoker.setCommand(command);
      invoker.executeCommand(); // Receiver executing command
      \`\`\`
      `,
    },
    {
      id: 101908,
      question: "Что такое Strategy и как он применяется?",
      answer: `
      **Strategy:**
      - Это поведенческий паттерн, который позволяет выбирать алгоритм во время выполнения программы.

      **Пример:**
      \`\`\`javascript
      class Context {
        constructor(strategy) {
          this.strategy = strategy;
        }

        setStrategy(strategy) {
          this.strategy = strategy;
        }

        executeStrategy() {
          return this.strategy.execute();
        }
      }

      class StrategyA {
        execute() {
          return 'Executing Strategy A';
        }
      }

      class StrategyB {
        execute() {
          return 'Executing Strategy B';
        }
      }

      const context = new Context(new StrategyA());
      console.log(context.executeStrategy()); // Executing Strategy A

      context.setStrategy(new StrategyB());
      console.log(context.executeStrategy()); // Executing Strategy B
      \`\`\`
      `,
    },
  ],
};
