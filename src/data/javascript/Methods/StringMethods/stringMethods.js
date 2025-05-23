import { stringReplace } from "./StringReplace/stringReplace";

export const stringMethods = {
  id: 506,
  title: "Strings Methods",
  children: [
    {
      title: "",
      type: "text",
      description: "1.toUpperCase() => перевод строки в верхний регистр",
    },
    {
      title: "",
      type: "text",
      description: "2.toLowerCase() => перевод строки в нижний регистр",
    },
    {
      title: "",
      type: "text",
      description: "3.trim() => удаляет пробелы в начале и конце строки",
    },
    {
      title: "",
      type: "text",
      description: "4.length => получаем длину строки",
    },
    {
      title: "",
      type: "text",
      description: `5.includes() => проверяет на наличие в строке элемента; если элемент найден, то возвращает true.`,
    },
    {
      title: "",
      type: "text",
      description: `6.spread() => превращает массив в строки с помощью специальных разделителей ... сохраняет между ними границу или по умолчанию между строками образуются пробелы.`,
    },
    {
      title: "",
      type: "text",
      description: `7.repeat() => повторяет строку указанное количество раз.`,
    },
    {
      title: "",
      type: "text",
      description: `8.split() => разбивает строку на массив подстроки по указанному разделителю. Возвращает новый массив, который содержит подстроки полученные в ходе разбиения.`,
    },
    {
      title: "",
      type: "text",
      description:
        "9.startsWith() => проверяет на наличие в начале строки указанного элемента. Возвращает true или false",
    },
    {
      title: ``,
      type: "text",
      description:
        "10.endsWith() => проверяет на наличие в конце строки указанного элемента. Возвращает true или false",
    },
    {
      title: ``,
      type: "text",
      description:
        "11.str.substr(0, 2) => возвращает часть этой строки, начиная с указанного индекса и продолжая заданное количество символов после него. P.S.Deprecate",
    },
    {
      title: ``,
      type: "text",
      description:
        "12.str.slice(0, -2) => вырезает один или несколько элементов внутри строки через указатель аргумента начала вырезания и второй аргумент где закончить срез; принимает отрицательные значения.",
    },
    {
      title: ``,
      type: "text",
      description:
        "13.substring() => возвращает вырезанную часть строки, но не принимает отрицательные числа в качестве аргументов.",
    },
    {
      title: ``,
      type: "text",
      description:
        "14.concat() => конкатенация между собой строк в одну строку",
    },
    {
      title: ``,
      type: "text",
      description: "15.charCodeAt() => возвращает значение символа по Юникод.",
    },
    {
      title: ``,
      type: "text",
      description: "16.charAt() => возвращает символ по Юникод.",
    },
    {
      title: ``,
      type: "text",
      description: "17.trimStart() => удаляет пробелы в начале строки.",
    },
    {
      title: ``,
      type: "text",
      description: "18.trimEnd() => удаляет пробелы в конце строки.",
    },
    {
      title: ``,
      type: "text",
      description:
        "19.padStart() => добавляет символы в начале строки, чтобы результирующая строка получила указанную длину; по умолчанию метод возвращает пустую строку до указанной длины, но может принимать и другие символы указанные во втором аргументе.",
    },
    {
      title: ``,
      type: "text",
      description:
        "20.padEnd() => добавляет символы в конце строки, чтобы результирующая строка получила указанную длину.",
    },
    {
      title: ``,
      type: "text",
      description:
        "21.indexOf() => возвращает индекс первого вхождения указанного элемента в строку. Если элемент не найден, возвращает -1.",
    },
    {
      title: ``,
      type: "text",
      description:
        "22.at(-1) или at() => получает последний символ строки или символ согласно индексу слева на право, так же как при отрицательном значении принимает символ с право на лево.",
    },
    {
      title: `23.search()`,
      type: "text",
      description: `search() => возвращает индекс первого вхождения подстроки в строке.`,
      code: `console.log(str.search('World')); // 9`,
    },
    stringReplace,
  ],
};
