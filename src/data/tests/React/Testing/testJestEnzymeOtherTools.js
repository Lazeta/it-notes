export const testJestEnzymeOtherTools = {
  id: 102125,
  title: "Другие инструменты",
  questions: [
    {
      id: 102126,
      question: "Что такое Enzyme?",
      answer: `
**Enzyme:**
- Это JavaScript-библиотека для тестирования React-компонентов.
- Предоставляет удобные методы для рендеринга, обхода и взаимодействия с компонентами, что упрощает написание юнит-тестов.

**Основные возможности:**
1. **Shallow Rendering (поверхностный рендеринг):**
   - Рендерит только сам компонент, не затрагивая дочерние компоненты.
   \`\`\`javascript
   import { shallow } from 'enzyme';

   const wrapper = shallow(<MyComponent />);
   expect(wrapper.find('.my-class').length).toBe(1);
   \`\`\`

2. **Full Rendering (полный рендеринг):**
   - Рендерит компонент вместе с его дочерними элементами.
   \`\`\`javascript
   import { mount } from 'enzyme';

   const wrapper = mount(<MyComponent />);
   expect(wrapper.text()).toContain('Hello World');
   \`\`\`

3. **Static Rendering:**
   - Преобразует компонент в HTML-строку для анализа.
   \`\`\`javascript
   import { render } from 'enzyme';

   const wrapper = render(<MyComponent />);
   expect(wrapper.text()).toContain('Hello World');
   \`\`\`

4. **Поиск элементов:**
   - Используйте методы \`find\`, \`contains\`, \`exists\` для проверки структуры компонента.
   \`\`\`javascript
   const button = wrapper.find('button');
   expect(button.exists()).toBe(true);
   \`\`\`

5. **Имитация событий:**
   - Метод \`simulate\` позволяет имитировать события, такие как клики или изменения.
   \`\`\`javascript
   const button = wrapper.find('button');
   button.simulate('click');
   expect(onClickMock).toHaveBeenCalled();
   \`\`\`

**Преимущества:**
- Удобный API для работы с React-компонентами.
- Поддержка поверхностного и полного рендеринга.
- Хорошо интегрируется с Jest.

**Недостатки:**
- Не поддерживается в современных версиях React (начиная с React 18).
- Заменяется на более современные библиотеки, такие как React Testing Library.
`,
    },
    {
      id: 102127,
      question: "В чем разница между Enzyme и React Testing Library?",
      answer: `
**Разница между Enzyme и React Testing Library:**

1. **Философия:**
   - **Enzyme:** Фокусируется на тестировании внутренней реализации компонента (например, состояние, пропсы, дочерние элементы).
   - **React Testing Library:** Фокусируется на тестировании поведения компонента с точки зрения пользователя (что видит пользователь).

2. **API:**
   - **Enzyme:** Предоставляет методы для манипуляции DOM и состоянием компонента (\`setState\`, \`instance\`).
   - **React Testing Library:** Предоставляет методы для взаимодействия с компонентом через DOM (\`getByText\`, \`fireEvent\`).

3. **Поддержка:**
   - **Enzyme:** Не поддерживается в React 18 и выше.
   - **React Testing Library:** Активно поддерживается и рекомендуется командой React.

4. **Пример теста в Enzyme:**
   \`\`\`javascript
   import { shallow } from 'enzyme';

   const wrapper = shallow(<MyComponent />);
   expect(wrapper.find('.my-class').length).toBe(1);
   \`\`\`

5. **Пример теста в React Testing Library:**
   \`\`\`javascript
   import { render, screen } from '@testing-library/react';

   render(<MyComponent />);
   expect(screen.getByText('Hello World')).toBeInTheDocument();
   \`\`\`
`,
    },
    {
      id: 102128,
      question: "Какие основные методы предоставляет Enzyme?",
      answer: `
**Основные методы Enzyme:**

1. **shallow():**
   - Поверхностный рендеринг компонента.
   \`\`\`javascript
   const wrapper = shallow(<MyComponent />);
   \`\`\`

2. **mount():**
   - Полный рендеринг компонента, включая дочерние элементы.
   \`\`\`javascript
   const wrapper = mount(<MyComponent />);
   \`\`\`

3. **render():**
   - Статический рендеринг компонента в HTML-строку.
   \`\`\`javascript
   const wrapper = render(<MyComponent />);
   \`\`\`

4. **find(selector):**
   - Поиск элементов по селектору.
   \`\`\`javascript
   const element = wrapper.find('.my-class');
   \`\`\`

5. **simulate(event):**
   - Имитация событий (например, кликов или изменений).
   \`\`\`javascript
   const button = wrapper.find('button');
   button.simulate('click');
   \`\`\`

6. **props():**
   - Получение пропсов компонента.
   \`\`\`javascript
   const props = wrapper.props();
   \`\`\`

7. **state():**
   - Получение состояния компонента.
   \`\`\`javascript
   const state = wrapper.state();
   \`\`\`

8. **setState(newState):**
   - Изменение состояния компонента.
   \`\`\`javascript
   wrapper.setState({ active: true });
   \`\`\`

9. **text():**
   - Получение текстового содержимого компонента.
   \`\`\`javascript
   const text = wrapper.text();
   \`\`\`
`,
    },
    {
      id: 102129,
      question: "Как настроить Jest для тестирования React-приложений?",
      answer: `
**Настройка Jest для React:**

1. **Установка зависимостей:**
   - Установите Jest и необходимые библиотеки:
   \`\`\`bash
   npm install --save-dev jest babel-jest @testing-library/react @testing-library/jest-dom
   \`\`\`

2. **Настройка Babel:**
   - Создайте файл \`babel.config.js\`:
   \`\`\`javascript
   module.exports = {
     presets: ['@babel/preset-env', '@babel/preset-react'],
   };
   \`\`\`

3. **Настройка Jest:**
   - Создайте файл \`jest.config.js\`:
   \`\`\`javascript
   module.exports = {
     setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
     testEnvironment: 'jsdom',
   };
   \`\`\`

4. **Создание тестов:**
   - Создайте файл \`*.test.js\` или \`*.spec.js\`:
   \`\`\`javascript
   import { render, screen } from '@testing-library/react';
   import MyComponent from './MyComponent';

   test('renders component', () => {
     render(<MyComponent />);
     expect(screen.getByText('Hello World')).toBeInTheDocument();
   });
   \`\`\`

5. **Запуск тестов:**
   - Добавьте скрипт в \`package.json\`:
   \`\`\`json
   "scripts": {
     "test": "jest"
   }
   \`\`\`
   - Запустите тесты:
   \`\`\`bash
   npm test
   \`\`\`
`,
    },
    {
      id: 102130,
      question: "Как использовать snapshot-тестирование в Jest?",
      answer: `
**Snapshot-тестирование:**
- Это метод тестирования, при котором сохраняется "снимок" (snapshot) текущего состояния компонента.
- При последующих запусках тестов Jest сравнивает текущее состояние с сохраненным снимком.

**Пример использования:**
1. Создайте тест:
   \`\`\`javascript
   import { render } from '@testing-library/react';
   import MyComponent from './MyComponent';

   test('renders correctly', () => {
     const { asFragment } = render(<MyComponent />);
     expect(asFragment()).toMatchSnapshot();
   });
   \`\`\`

2. Первый запуск теста:
   - Jest создаст файл \`__snapshots__/MyComponent.test.js.snap\`.

3. Последующие запуски:
   - Jest сравнит текущее состояние с сохраненным снимком.
   - Если состояние изменилось, тест завершится ошибкой.

4. Обновление снимков:
   - Если изменения допустимы, обновите снимки:
   \`\`\`bash
   npm test -- -u
   \`\`\`
`,
    },
  ],
};
