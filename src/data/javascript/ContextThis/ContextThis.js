import { thisAndCallApplyBind } from "./thisAndCallApplyBind/thisAndCallApplyBind";

export const ContextThis = {
  id: 133,
  title: "Context This (Контекст this)",
  children: [
    {
      title: "Описание",
      type: "text",
      description: `
        <p><strong>this</strong> — это специальное ключевое слово в JavaScript, которое ссылается на объект, который в данный момент выполняет код. Значение <code>this</code> определяется не тем, как функция была объявлена, а тем, как она была вызвана.</p>
        <p>Понимание контекста <code>this</code> важно для работы с объектами, классами, стрелочными функциями и методами управления контекстом (<code>.call()</code>, <code>.apply()</code>, <code>.bind()</code>).</p>
      `,
    },
    {
      title: "Контекст вызова",
      type: "text",
      description: `
        <p>Значение <code>this</code> зависит от контекста вызова функции. Вот основные правила:</p>
        <ul>
          <li><strong>Глобальный контекст:</strong> Вне функций <code>this</code> ссылается на глобальный объект (<code>window</code> в браузере или <code>global</code> в Node.js).</li>
          <li><strong>Метод объекта:</strong> Внутри метода объекта <code>this</code> ссылается на сам объект, в контексте которого был вызван метод.</li>
          <li><strong>Обычная функция:</strong> В обычной функции <code>this</code> ссылается на глобальный объект (или <code>undefined</code> в строгом режиме).</li>
          <li><strong>Стрелочные функции:</strong> Стрелочные функции не имеют собственного <code>this</code> и наследуют его из родительского контекста.</li>
          <li><strong>Классы:</strong> В классах <code>this</code> ссылается на экземпляр класса, созданный с помощью <code>new</code>.</li>
        </ul>
      `,
      code: `
// В глобальном контексте (вне функций) 'this' ссылается на глобальный объект (window в браузере).
console.log(this); // window

// В методе объекта 'this' ссылается на объект, в контексте которого был вызван метод:
const obj = {
  name: 'Obj',
  method: function() {
    console.log(this.name);
  }
};
obj.method(); // 'Obj'
      `,
    },
    {
      title: "Значение this в функциях",
      type: "text",
      description: `
        <p>В обычной функции <code>this</code> ссылается на глобальный объект (или <code>undefined</code> в строгом режиме). Это может привести к ошибкам, если контекст не контролируется явно.</p>
      `,
      code: `
function showThis() {
  console.log(this);
}

showThis(); // window (или undefined в строгом режиме)
      `,
    },
    {
      title: "Классы и this",
      type: "text",
      description: `
        <p>В классах <code>this</code> ссылается на экземпляр класса, созданный с помощью ключевого слова <code>new</code>. Это позволяет работать с состоянием объекта через <code>this</code>.</p>
      `,
      code: `
class MyClass {
  constructor(value) {
    this.value = value;
  }
  showValue() {
    console.log(this.value);
  }
}

const instance = new MyClass(10);
instance.showValue(); // 10
      `,
    },
    {
      title: "Стрелочные функции и this",
      type: "text",
      description: `
        <p>Стрелочные функции не имеют собственного <code>this</code> и наследуют его из родительского контекста, в котором они были созданы. Это делает их особенно полезными в обработчиках событий и колбэках.</p>
      `,
      code: `
const obj = {
  value: 20,
  method: function() {
    const arrowFunction = () => {
      console.log(this.value);
    };
    arrowFunction();
  }
};

obj.method(); // 20
      `,
    },
    {
      title: "Способы контроля this",
      type: "text",
      description: `
        <p>Можно явно контролировать значение <code>this</code> с помощью методов <code>.call()</code>, <code>.apply()</code> и <code>.bind()</code>:</p>
        <ul>
          <li><strong>.call(thisArg, arg1, arg2, ...):</strong> Вызывает функцию с указанным значением <code>this</code> и аргументами.</li>
          <li><strong>.apply(thisArg, [argsArray]):</strong> Аналогично <code>.call()</code>, но принимает массив аргументов.</li>
          <li><strong>.bind(thisArg):</strong> Создает новую функцию с фиксированным значением <code>this</code>.</li>
        </ul>
      `,
      code: `
function show() {  
  console.log(this.name);
}

const obj = { name: 'Test' };
show.call(obj);    // 'Test'
show.apply(obj);   // 'Test'
const boundShow = show.bind(obj);
boundShow();       // 'Test'
      `,
    },
    {
      title: "Пример ошибок с this",
      type: "text",
      description: `
        <p>Ошибки с <code>this</code> часто возникают, если контекст теряется, например, при передаче метода объекта как колбэка или в обработчиках событий.</p>
      `,
      code: `
const obj = {
  value: 42,
  method: function() {
    setTimeout(function() {
      console.log(this.value); // undefined (потерянный контекст)
    }, 100);
  }
};

obj.method();

// Решение: использование стрелочной функции или .bind()
const obj = {
  value: 42,
  method: function() {
    setTimeout(() => {
      console.log(this.value); // 42 (наследует this из родительского контекста)
    }, 100);
  }
};

obj.method();
      `,
    },
    {
      title: "Вывод",
      type: "text",
      description: `
        <p>Контекст <code>this</code> в JavaScript может быть сложным для понимания, но при правильном использовании он становится мощным инструментом. Важно понимать, как он работает в разных контекстах, чтобы избежать ошибок и писать надежный код.</p>
      `,
    },
    thisAndCallApplyBind,
  ],
};
