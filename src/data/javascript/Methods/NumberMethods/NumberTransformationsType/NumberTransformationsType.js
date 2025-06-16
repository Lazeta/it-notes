export const NumberTransformationsType = {
  id: 2561,
  title: "2. Преобразование типов",
  children: [
    {
      title: "Number(value)",
      type: "text",
      description: `
            <p><strong>Number(value)</strong>: Преобразует значение в числовой тип данных. Если преобразование невозможно, возвращает <code>NaN</code>.</p>
          `,
      code: `
console.log(Number("123")); // 123
console.log(Number("12.34")); // 12.34
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
          `,
    },
    {
      title: "parseFloat(string)",
      type: "text",
      description: `
            <p><strong>parseFloat(string)</strong>: Преобразует строку в число с плавающей точкой. Игнорирует всё после первого нечислового символа.</p>
          `,
      code: `
console.log(parseFloat("12.34")); // 12.34
console.log(parseFloat("12.34abc")); // 12.34
console.log(parseFloat("abc12.34")); // NaN
          `,
    },
    {
      title: "parseInt(string, radix)",
      type: "text",
      description: `
            <p><strong>parseInt(string, radix)</strong>: Преобразует строку в целое число в соответствии с указанной системой счисления (<code>radix</code>). По умолчанию <code>radix = 10</code>.</p>
          `,
      code: `
console.log(parseInt("10", 10)); // 10 (десятичная система)
console.log(parseInt("10", 2)); // 2 (двоичная система)
console.log(parseInt("FF", 16)); // 255 (шестнадцатеричная система)
console.log(parseInt("12.34")); // 12 (дробная часть игнорируется)
          `,
    },
  ],
};
