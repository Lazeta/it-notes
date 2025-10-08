export const testEnum = {
  id: 102025,
  title: "Enum",
  questions: [
    {
      id: 102026,
      question: "Что такое enum?",
      answer: `
**Enum (перечисление):**
- Это специальный тип данных в TypeScript, который позволяет определить набор именованных констант.
- Enum помогает сделать код более читаемым и поддерживаемым, предоставляя четкие имена для фиксированного набора значений.

**Пример:**
\`\`\`typescript
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

console.log(Colors.Red); // "RED"
\`\`\`
`,
    },
    {
      id: 102027,
      question: "Какие бывают типы enum?",
      answer: `
**Типы enum:**
1. **Числовые enum (numeric enums):**
   - Значения автоматически присваиваются числами, начиная с 0.
   \`\`\`typescript
   enum Directions {
     Up, // 0
     Down, // 1
     Left, // 2
     Right, // 3
   }
   console.log(Directions.Up); // 0
   \`\`\`

2. **Строковые enum (string enums):**
   - Значения явно задаются строками.
   \`\`\`typescript
   enum Status {
     Active = "ACTIVE",
     Inactive = "INACTIVE",
     Pending = "PENDING",
   }
   console.log(Status.Active); // "ACTIVE"
   \`\`\`

3. **Смешанные enum (heterogeneous enums):**
   - Может содержать как числовые, так и строковые значения.
   \`\`\`typescript
   enum Mixed {
     No = 0,
     Yes = "YES",
   }
   console.log(Mixed.No); // 0
   console.log(Mixed.Yes); // "YES"
   \`\`\`
`,
    },
    {
      id: 102028,
      question: "Зачем использовать enum?",
      answer: `
**Преимущества enum:**
1. **Читаемость:** Именованные константы делают код более понятным.
2. **Безопасность типов:** TypeScript проверяет, что используются только допустимые значения.
3. **Удобство поддержки:** Изменение значений в одном месте (в enum) автоматически отразится во всем коде.

**Пример использования:**
\`\`\`typescript
enum Roles {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

function checkAccess(role: Roles): void {
  if (role === Roles.Admin) {
    console.log("Full access granted");
  } else {
    console.log("Limited access");
  }
}

checkAccess(Roles.Admin); // "Full access granted"
\`\`\`
`,
    },
    {
      id: 102029,
      question: "Как получить значение из enum по ключу?",
      answer: `
**Получение значения по ключу:**
- Можно получить значение enum, используя ключ.

**Пример:**
\`\`\`typescript
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

console.log(Colors["Red"]); // "RED"
\`\`\`
`,
    },
    {
      id: 102030,
      question: "Как получить ключ из enum по значению?",
      answer: `
**Получение ключа по значению:**
- Можно получить ключ enum, используя значение.

**Пример:**
\`\`\`typescript
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

const key = Object.keys(Colors).find((k) => Colors[k as keyof typeof Colors] === "RED");
console.log(key); // "Red"
\`\`\`
`,
    },
    {
      id: 102031,
      question: "Как работает обратное отображение в числовых enum?",
      answer: `
**Обратное отображение:**
- В числовых enum можно получить ключ по значению благодаря автоматическому обратному отображению.

**Пример:**
\`\`\`typescript
enum Directions {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Directions[1]); // "Up"
console.log(Directions[2]); // "Down"
\`\`\`
`,
    },
    {
      id: 102032,
      question: "Можно ли использовать функции внутри enum?",
      answer: `
**Нет, нельзя:**
- Enum не поддерживают использование функций или вычисляемых значений напрямую.
- Однако можно использовать выражения, которые вычисляются на этапе компиляции.

**Пример:**
\`\`\`typescript
enum Calculation {
  A = 10,
  B = A * 2, // Допустимо
}
console.log(Calculation.B); // 20
\`\`\`
`,
    },
    {
      id: 102033,
      question: "Как преобразовать enum в массив?",
      answer: `
**Преобразование enum в массив:**
- Для строковых enum можно использовать \`Object.keys()\` или \`Object.values()\`.

**Пример:**
\`\`\`typescript
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

const keys = Object.keys(Colors);
const values = Object.values(Colors);

console.log(keys); // ["Red", "Green", "Blue"]
console.log(values); // ["RED", "GREEN", "BLUE"]
\`\`\`
`,
    },
    {
      id: 102034,
      question: "Как использовать enum в switch-case?",
      answer: `
**Использование enum в switch-case:**
- Enum удобно использовать в конструкции \`switch-case\`, чтобы обрабатывать различные варианты.

**Пример:**
\`\`\`typescript
enum Actions {
  Start = "START",
  Stop = "STOP",
  Pause = "PAUSE",
}

function handleAction(action: Actions): void {
  switch (action) {
    case Actions.Start:
      console.log("Action: Start");
      break;
    case Actions.Stop:
      console.log("Action: Stop");
      break;
    case Actions.Pause:
      console.log("Action: Pause");
      break;
    default:
      console.log("Unknown action");
  }
}

handleAction(Actions.Start); // "Action: Start"
\`\`\`
`,
    },
    {
      id: 102035,
      question: "Какой альтернативой может быть enum?",
      answer: `
**Альтернативы enum:**
1. **Объекты:**
   - Можно использовать обычные объекты для хранения констант.
   \`\`\`typescript
   const Colors = {
     Red: "RED",
     Green: "GREEN",
     Blue: "BLUE",
   } as const;

   console.log(Colors.Red); // "RED"
   \`\`\`

2. **Union Types:**
   - Можно использовать объединение литеральных типов.
   \`\`\`typescript
   type Colors = "RED" | "GREEN" | "BLUE";

   function setColor(color: Colors): void {
     console.log(color);
   }

   setColor("RED"); // "RED"
   \`\`\`
`,
    },
  ],
};
