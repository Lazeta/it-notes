export const TemporalDeadZone = {
  title: "Temporal Dead Zone / Временная мертвая зона",
  children: [
    {
      title: "1. Определение Temporal Dead Zone",
      type: "text",
      description: `
            <p>Temporal Dead Zone (TDZ) - это область кода в JavaScript, где переменная не может быть доступна, даже если она была объявлена. Это происходит до момента, когда она инициализирована.</p>
            <p>TDZ применяется к переменным, объявленным с помощью <code>let</code> и <code>const</code>.</p>
          `,
    },
    {
      title: "2. Как работает Temporal Dead Zone?",
      type: "text",
      description: `
            <p>Когда вы пытаетесь получить доступ к переменной, объявленной с помощью <code>let</code> или <code>const</code>, до её инициализации, JavaScript выбросит ошибку ReferenceError.</p>
          `,
    },
    {
      title: "3. Пример Temporal Dead Zone",
      type: "text",
      description: `
            <p>Пример, демонстрирующий TDZ:</p>
          `,
      code: `
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
          `,
    },
    {
      title: "4. Важность понимания TDZ",
      type: "text",
      description: `
            <p>Понимание TDZ важно для предотвращения ошибок в коде:</p>
            <ul>
              <li>Помогает избежать неожиданных ошибок при доступе к переменным.</li>
              <li>Способствует лучшему пониманию области видимости и инициализации переменных.</li>
            </ul>
          `,
    },
    {
      title: "5. Сравнение с var",
      type: "text",
      description: `
            <p>В отличие от <code>let</code> и <code>const</code>, переменные, объявленные с помощью <code>var</code>, имеют всплытие (hoisting) и могут быть доступны до их объявления, хотя инициализированы они будут только в момент выполнения кода:</p>
          `,
    },
    {
      title: "6. Пример с var",
      type: "text",
      description: `
            <p>Пример, показывающий поведение <code>var</code>:</p>
          `,
      code: `
console.log(b); // undefined
var b = 10;
          `,
    },
  ],
};
