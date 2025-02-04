export const FunctionLevenshtein = {
  title: "Function Levenshtein / Функция Левенштейна",
  children: [
    {
      title: "Function Levenshtein or Levenshtein Distance",
      type: "text",
      description: `
            <p>Функция Левенштейна, или расстояние Левенштейна, измеряет различие между двумя строками, 
            определяя минимальное количество операций, необходимых для преобразования одной строки в другую.
            </p>
            <ul>Операциями могут быть:
              <li>Замена: Заменить один символ на другой;</li>
              <li>Удаление: Удалить символ из строки;</li>
              <li>Вставка: Вставить символ в строку;</li>
            </ul>
            <p>Суть и применение</p>
            <ul>
              <li>Сравнение строк: Функция используется для нахождения «похожести» строк. Чем меньше расстояние Левенштейна, тем более похожи строки.</li>
              <li>Поиск и исправление ошибок: Часто применяется в системах проверки правописания, для поиска похожих слов и исправления ошибок.</li>
              <li>Обработка естественного языка: Используется в алгоритмах для сравнения слов и предложений, что может быть полезно в чат-ботах, поисковых системах и других NLP приложениях.</li>
            </ul>
                        `,
      code: `
function levenshtein(a, b) {
if (a.length === 0) return b.length;
if (b.length === 0) return a.length;
const matrix = [];
for (let i = 0; i <= b.length; matrix[i] = [i]) i++;
for (let j = 0; j <= a.length; matrix[0][j] = j++) j++;
for (let i = 1; i <= b.length; i++) {
for (let j = 1; j <= a.length; j++) {
  matrix[i][j] = b[i - 1] === a[j - 1]
    ? matrix[i - 1][j - 1]
    : Math.min(
      matrix[i - 1][j - 1] + 1,
      Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
    );
}
}
return matrix[b.length][a.length];
}
`,
    },
  ],
};
