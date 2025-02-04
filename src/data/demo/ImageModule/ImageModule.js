export const ImageModule = {
  title: "картинки",
  children: [
    {
      title: "Заголовок картинки",
      type: "image",
      url: "https://i.pinimg.com/enabled_hi/564x/54/e9/87/54e98761c2348545244bf25487c5be23.jpg",
    },
    {
      title: "", // можем оставить поле заголовка пустым
      type: "image",
      url: "https://i.pinimg.com/enabled_hi/564x/54/e9/87/54e98761c2348545244bf25487c5be23.jpg",
    },
    {
      title: "Заголовок картинки",
      type: "image",
      url: "", // если адрес не корректный или мы вовсе в объекте не указали url,
      // то возвращает alt атрибут и его содержимое ({data.title})
    },
  ],
};
