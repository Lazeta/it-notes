export const ProgressiveScan = {
  title: "Что такое прогрессивная развертка",
  children: [
    {
      title:
        "Прогрессивная развертка - это подход к разработке страниц, при котором отображение контента происходит по мере его загрузки",
      type: "text",
      description: `
    <ul>
      <li>Сначала загружается основной контент</li>
      <li>Второстепенный контент загружается позже</li>
    </ul>
    <p>Пример:</p>
    `,
      code: `
// Пример с использованием JavaScript для прогрессивной загрузки
fetch('/api/content')
.then(response => response.json())
.then(data => {
document.getElementById('content').innerHTML = data.content;
});
    `,
    },
  ],
};
