export const arrayMethods = {
  id: 505,
  title: "Array Methods",
  children: [
    {
      title: "",
      type: "text",
      description: "1. pop() => removes the last element from an array.",
    },
    {
      title: "",
      type: "text",
      description: "2.shift() => удаляет элемент в начале массива",
    },
    {
      title: "",
      type: "text",
      description:
        "3.push() => добавляется несколько элементов в конец массива",
    },
    {
      title: "",
      type: "text",
      description:
        "4.unshift() => добавляет несколько элементов в начало массива",
    },
    {
      title: "",
      type: "text",
      description: "5.length => получаем число элементов массива",
    },
    {
      title: "",
      type: "text",
      description: `6.splice() => добавление нескольких элементов в массив; 
            первый аргумент указывает где начать вставку элементов по индексу; 
            второй аргумент указывает сколько элементов нужно удалить, если аргумент не указать, то удаления не будет, просто добавится новый элемент в массиве; самые новые элементы указываются в скобках данного метода в кавычках,`,
    },
    {
      title: "",
      type: "text",
      description: `7.slice() => вырезает один или несколько элементов массива
            через указатель аргумента начала вырезания и второй аргумент где закончить срез;
            принимает отрицательные значения.`,
    },
    {
      title: "",
      type: "text",
      description: "8.concat() => конкатенация двух массивов",
    },
    {
      title: "",
      type: "text",
      description: `9.map() => принимает массив и применяет указанную функцию для
            всех элементов массива; возвращает новый массив.`,
    },
    {
      title: "",
      type: "text",
      description: `10.every() => проверяет, соответствуют ли все элементы указанному
            массиву определённому условию; если все элементы соответствуют условию, то возвращает
            метод true, в противном случае вернёт false.`,
    },
    {
      title: "",
      type: "text",
      description: `11.includes() => проверяет на наличие в массиве элемента; если
            элемент найден, то возвращает true.`,
    },
    {
      title: "",
      type: "text",
      description: `12.spread() => превращает массив в строки с помощью специальных
            разделителей … сохраняет между ними границу или по умолчанию между строками образуются
            пробелы.`,
    },
    {
      title: "",
      type: "text",
      description: `13.filter() => возвращает новый массив из всех элементов соответствующих
            заданному условию.`,
    },
    {
      title: "",
      type: "text",
      description: `14.reduce(function (previousValue, item, index, array) { … }, [initial]); => сводит массив к одному значению.`,
    },
    {
      title: "",
      type: "text",
      description:
        "15.reduceRight() => сводит массив к одному значение с права на лево.",
    },
    {
      title: "",
      type: "text",
      description: `16.indexOf() => возвращает первый индекс по которому может быть найден
            элемент в массиве и -1 если такого элемента нет; это не тоже самое что и Boolean values,
            мы можем получать 2 и более индекса совпадений по массиву.`,
    },
    {
      title: "",
      type: "text",
      description: `17.sort() => возвращает отсортированный массив; если compareFunction
            предоставлена, то массив сортируется в соответствиями с этими условиями.`,
    },
    {
      title: "",
      type: "text",
      description: `18.find() => возвращает значение первого найденного в массиве элемента,
            который удовлетворяет условию указанных в функции, в противном случае возвращает undefined.`,
    },
    {
      title: "",
      type: "text",
      description: `19.findIndex() => возвращает индекс в массиве, если элемент удовлетворяет
            условиям проверяющей функции, в противном случае вернёт -1.`,
    },
    {
      title: "",
      type: "text",
      description: `20.forEach(function (item, index, array) { … } => выполняет указанную
            функцию один раз для каждого элемента в массиве.`,
    },
    {
      title: "",
      type: "text",
      description:
        "21.join(‘, ’) => преобразовывает массив в строку с заданным разделителем.",
    },
    {
      title: "",
      type: "text",
      description: `22.isArray() => проверяем массив ли этот объект или нет.`,
    },
    {
      title: "",
      type: "text",
      link: "Learn more about array methods.",
      url: "https://learn.javascript.ru/array-methods",
    },
    {
      title: "",
      type: "text",
      link: "Visual representation of array methods.",
      url: "https://medium.com/@sewolpe/visualizing-javascript-array-methods-7babf560f7be",
    },
  ],
};
