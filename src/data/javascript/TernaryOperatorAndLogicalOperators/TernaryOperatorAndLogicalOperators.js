export const TernaryOperatorAndLogicalOperators = {
  title: "Ternary operator and logical operators",
  children: [
    {
      title: "Использование тернарного оператора и логических операторов",
      type: "text",
      description: `
            <p>В JavaScript есть несколько удобных операторов, которые помогают упростить код и избавиться от лишних проверок.</p>
            <ul>
              <li><strong>Тернарный оператор</strong>: Сокращенная форма if-else, позволяет записать условную логику в одной строке.</li>
              <li><strong>Оператор нулевого объединения (??)</strong>: Позволяет вернуть правое значение, если левое значение равно null или undefined.</li>
              <li><strong>Необязательное связывание (?.)</strong>: Позволяет безопасно получать доступ к вложенным свойствам объектов без необходимости проверки каждой промежуточной ссылки.</li>
            </ul>
          `,
      code: `
// Пример тернарного оператора
const age = 18;
const canVote = (age >= 18) ? "Да" : "Нет";
console.log(canVote); // "Да"

// Пример оператора нулевого объединения
const userInput = null;
const defaultValue = userInput ?? "Значение по умолчанию";
console.log(defaultValue); // "Значение по умолчанию"

// Пример необязательного связывания
const user = {
profile: {
name: "Alice",
age: 30,
},
};
const userCity = user.profile?.city ?? "Город не указан";
console.log(userCity); // "Город не указан" (поскольку city не существует)

// Пример логического И (&&) и ИЛИ (||)
const isAuthenticated = true;
const userRole = isAuthenticated && "admin";
// вернёт "admin", если isAuthenticated true
const fallback = userRole || "guest"; // вернёт "guest", если userRole falsy
          `,
    },
  ],
};
