export const ContextThis = {
  id: 133,
  title: "Context this",
  children: [
    {
      title: "Описание",
      type: "text",
      description:
        "this – это специальное ключевое слово в JavaScript, которое ссылается на объект, который в данный момент выполняет код. Значение `this` определяется не тем, как функция была объявлена, а тем, как она была вызвана.",
    },
    {
      title: "Контекст вызова",
      type: "text",
      description: `Значение "this" зависит от контекста вызова функции. Вот основные правила:`,
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
      description:
        "В обычной функции `this` ссылается на глобальный объект (или undefined в строгом режиме).",
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
      description:
        "В классах `this` ссылается на экземпляр класса, который был создан с помощью ключевого слова new.",
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
      description:
        "Стрелочные функции не имеют собственного `this` и наследуют его из родительского контекста, в котором они были созданы.",
      code: `
const obj = {
value: 20,
method: function() {
const arrowFunction = () => {
  console.log(this.value);
};
arrowFunction();
}
}

obj.method(); // 20
          `,
    },
    {
      title: "Способы контроля this",
      type: "text",
      description:
        "Можно контролировать значение `this` в функции с помощью методов `.call()`, `.apply()` и `.bind()`.",
      code: `
function show() {  
console.log(this.name);
const obj = { name: 'Test' };
show.call(obj);    // 'Test'
show.apply(obj);   // 'Test'
const boundShow = show.bind(obj);
boundShow();       // 'Test'
}
          `,
    },
    {
      title: "Вывод",
      type: "text",
      description:
        "Контекст `this` в JavaScript может быть сложным для понимания. Важно понимать, как он работает в разных контекстах для избежания ошибок.",
    },
  ],
};
