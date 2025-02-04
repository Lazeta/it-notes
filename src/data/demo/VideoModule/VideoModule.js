export const VideoModule = {
  title: "видео",
  children: [
    {
      title: "Заголовок видео",
      type: "video",
      url: "https://www.youtube.com/embed/gVxyTOPPEPc",
    },
    {
      title: "", // если не требуется заголовок видео, то выводим лишь само видео
      type: "video",
      url: "https://www.youtube.com/embed/gVxyTOPPEPc",
    },
    {
      title: "Заголовок видео",
      type: "video",
      description: "Описание видео", // {/* нужно ли описание к видео??? */}
      url: "https://www.youtube.com/embed/gVxyTOPPEPc",
    },
    {
      title: "Заголовок видео",
      type: "video",
      url: "", // если нет свойства url или нет адреса в объекте или он не верен,
      // то возвращаем сообщение об ошибке в виде параграфа
    },
  ],
};
