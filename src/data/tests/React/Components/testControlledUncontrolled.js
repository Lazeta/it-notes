export const testControlledUncontrolled = {
  id: 102900,
  title:
    "Controlled vs Uncontrolled Components (управляемые и неуправляемые компоненты)",
  questions: [
    {
      id: 102901,
      question: "Что такое управляемые компоненты (Controlled Components)?",
      answer: `
**Управляемые компоненты:**
- Это компоненты, значения которых управляются через состояние React.
- Значение элемента ввода синхронизируется с состоянием.

**Пример:**
\`\`\`javascript
import { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
\`\`\`
`,
    },
    {
      id: 102902,
      question: "Что такое неуправляемые компоненты (Uncontrolled Components)?",
      answer: `
**Неуправляемые компоненты:**
- Это компоненты, значения которых управляются DOM.
- Для доступа к значению используется \`ref\`.

**Пример:**
\`\`\`javascript
import { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102903,
      question:
        "Какие основные различия между управляемыми и неуправляемыми компонентами?",
      answer: `
**Основные различия:**
1. **Управление данными:**
   - Управляемые: Данные хранятся в состоянии React.
   - Неуправляемые: Данные хранятся в DOM.
2. **Синхронизация:**
   - Управляемые: Значения синхронизируются с состоянием.
   - Неуправляемые: Значения извлекаются через \`ref\`.
3. **Использование:**
   - Управляемые: Подходят для форм с валидацией или динамическими изменениями.
   - Неуправляемые: Проще для простых форм без сложной логики.

**Пример управляемого компонента:**
\`\`\`javascript
function ControlledForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

**Пример неуправляемого компонента:**
\`\`\`javascript
function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102904,
      question: "Когда лучше использовать управляемые компоненты?",
      answer: `
**Когда использовать управляемые компоненты:**
1. **Формы с валидацией:**
   - Легко реализовать проверку данных на лету.
2. **Динамические формы:**
   - Значения полей зависят от других полей или состояния.
3. **Управление состоянием:**
   - Требуется централизованное управление данными.

**Пример:**
\`\`\`javascript
function DynamicForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button disabled={!email || !password}>Submit</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102905,
      question: "Когда лучше использовать неуправляемые компоненты?",
      answer: `
**Когда использовать неуправляемые компоненты:**
1. **Простые формы:**
   - Формы без необходимости валидации или сложной логики.
2. **Интеграция с библиотеками:**
   - Библиотеки, которые работают напрямую с DOM.
3. **Минимизация кода:**
   - Меньше кода для управления состоянием.

**Пример:**
\`\`\`javascript
function SimpleForm() {
  const fileInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected file:', fileInput.current.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={fileInput} />
      <button type="submit">Upload</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102906,
      question: "Как комбинировать управляемые и неуправляемые компоненты?",
      answer: `
**Комбинирование компонентов:**
- Используйте управляемые компоненты для полей с логикой и неуправляемые для простых полей.

**Пример:**
\`\`\`javascript
function MixedForm() {
  const [name, setName] = useState('');
  const fileInput = useRef(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('File:', fileInput.current.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <input type="file" ref={fileInput} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102907,
      question: "Какие преимущества у управляемых компонентов?",
      answer: `
**Преимущества управляемых компонентов:**
1. **Полный контроль:**
   - Все данные находятся в состоянии React.
2. **Валидация:**
   - Легко реализовать проверку данных.
3. **Синхронизация:**
   - Легко обновлять состояние нескольких полей одновременно.
4. **Переиспользование:**
   - Логика может быть вынесена в пользовательские хуки.

**Пример:**
\`\`\`javascript
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return { values, handleChange };
}

function Form() {
  const { values, handleChange } = useForm({ name: '', email: '' });

  return (
    <form>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button>Submit</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102908,
      question: "Какие недостатки у неуправляемых компонентов?",
      answer: `
**Недостатки неуправляемых компонентов:**
1. **Меньший контроль:**
   - Данные находятся вне состояния React.
2. **Сложность тестирования:**
   - Тестирование требует работы с реальным DOM.
3. **Ограниченная функциональность:**
   - Сложно реализовать валидацию или динамическое поведение.

**Пример проблемы:**
\`\`\`javascript
function ProblematicForm() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputRef.current.value.trim()) {
      console.error('Field is empty');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102909,
      question: "Как выбрать между управляемыми и неуправляемыми компонентами?",
      answer: `
**Как выбрать:**
1. **Управляемые компоненты:**
   - Если нужна валидация, динамическое поведение или управление состоянием.
2. **Неуправляемые компоненты:**
   - Если форма простая или требуется минимальное управление данными.

**Правило:**
- Начните с управляемых компонентов, если нет веских причин использовать неуправляемые.
`,
    },
  ],
};
