export const testWorkingWithFormsReact = {
  id: 102650,
  title: "Working with Forms in React",
  questions: [
    {
      id: 102651,
      question: "Как работать с формами в React?",
      answer: `
**Работа с формами в React:**
- В React формы управляются через состояние компонента.
- Для управления вводом данных используются контролируемые компоненты (controlled components).

**Пример контролируемой формы:**
\`\`\`javascript
import React, { useState } from 'react';

function Form() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправленное значение:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Отправить</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102652,
      question: "Что такое контролируемые компоненты (Controlled Components)?",
      answer: `
**Контролируемые компоненты:**
- Это элементы формы, значения которых управляются через состояние React.
- Каждое изменение в поле ввода обновляет состояние.

**Пример:**
\`\`\`javascript
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
      id: 102653,
      question:
        "Что такое неконтролируемые компоненты (Uncontrolled Components)?",
      answer: `
**Неконтролируемые компоненты:**
- Это элементы формы, значения которых управляются DOM, а не React.
- Для доступа к значению используется \`ref\`.

**Пример:**
\`\`\`javascript
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log('Значение:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Отправить</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102654,
      question: "Как обрабатывать события ввода в React?",
      answer: `
**Обработка событий ввода:**
- Используйте обработчики событий, такие как \`onChange\`, для отслеживания изменений в полях ввода.

**Пример:**
\`\`\`javascript
function InputExample() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Текущее значение: {value}</p>
    </div>
  );
}
\`\`\`
`,
    },
    {
      id: 102655,
      question: "Как валидировать данные формы в React?",
      answer: `
**Валидация данных:**
- Выполняйте проверку данных перед отправкой формы.
- Используйте состояние для отображения ошибок.

**Пример:**
\`\`\`javascript
function FormValidation() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === '') {
      setError('Поле не может быть пустым');
    } else {
      setError('');
      console.log('Отправленное значение:', value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Отправить</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102656,
      question: "Как работать с множественными полями ввода?",
      answer: `
**Работа с несколькими полями:**
- Используйте объект состояния для хранения значений всех полей.

**Пример:**
\`\`\`javascript
function MultiFieldForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправленные данные:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Имя"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Отправить</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102657,
      question: "Как очистить форму после отправки?",
      answer: `
**Очистка формы:**
- Сбросьте состояние формы после отправки.

**Пример:**
\`\`\`javascript
function ClearForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправленное значение:', value);
    setValue(''); // Очистка формы
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Отправить</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102658,
      question: "Как использовать библиотеку Formik для работы с формами?",
      answer: `
**Formik:**
- Популярная библиотека для управления формами в React.
- Упрощает управление состоянием, валидацию и отправку данных.

**Пример:**
\`\`\`javascript
import { useFormik } from 'formik';

function FormikExample() {
  const formik = useFormik({
    initialValues: { name: '', email: '' },
    onSubmit: (values) => {
      console.log('Отправленные данные:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="Имя"
      />
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="Email"
      />
      <button type="submit">Отправить</button>
    </form>
  );
}
\`\`\`
`,
    },
    {
      id: 102659,
      question: "Как добавить маску ввода для полей формы?",
      answer: `
**Маска ввода:**
- Используйте сторонние библиотеки, такие как \`react-input-mask\`, для добавления маски.

**Пример:**
\`\`\`javascript
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

function MaskedInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <InputMask mask="+7 (999) 999-99-99" value={value} onChange={handleChange}>
      {(inputProps) => <input {...inputProps} placeholder="Телефон" />}
    </InputMask>
  );
}
\`\`\`
`,
    },
    {
      id: 102660,
      question: "Как отправить данные формы на сервер?",
      answer: `
**Отправка данных:**
- Используйте \`fetch\` или \`axios\` для отправки данных на сервер.

**Пример:**
\`\`\`javascript
function SubmitForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://api.example.com/submit ', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log('Ответ сервера:', result);
    } catch (error) {
      console.error('Ошибка при отправке:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Имя"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Отправить</button>
    </form>
  );
}
\`\`\`
`,
    },
  ],
};
