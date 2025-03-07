export const ForAttribute = {
  id: 130,
  title: "Атрибут For",
  children: [
    {
      title: ``,
      type: "text",
      description: `
    Он связывает элемент <label> с соответствующим полем < input >, позволяя пользователям 
    кликать по тексту метки для выбора или фокуса на связанном элементе управления.
    p.s. Значение атрибута for должно совпадать с id связанного элемента, что 
    улучшает доступность и удобство взаимодействия с формами.
    `,
      code: `
<label for="Number">Ваше любимое число:</label>
<input id="number">`,
    },
  ],
};
