export const gitCommands = {
  id: 210,
  title: "методы Git",
  children: [
    {
      title: "Основные команды Git",
      type: "text",
      description: `
            <ul>
              <li><code>git init</code> — инициализация нового репозитория.</li>
              <li><code>git clone</code> — клонирование удалённого репозитория.</li>
              <li><code>git add</code> — добавление изменений в индекс.</li>
              <li><code>git commit</code> — создание нового коммита.</li>
              <li><code>git push</code> — отправка изменений в удалённый репозиторий.</li>
              <li><code>git pull</code> — получение изменений из удалённого репозитория.</li>
              <li><code>git branch</code> — управление ветками.</li>
              <li><code>git merge</code> — слияние веток.</li>
              <li><code>git rebase</code> — копирование истории из одной ветки в другую.</li>
              <li><code>git cherry-pick</code> — перенос выбранных коммитов по хэшу из одной ветки в другую.</li>
            </ul>
          `,
      link: `Подробнее о методах Git`,
      url: `https://docs.google.com/spreadsheets/d/17ze48FSKuw9B9qVtrFa5O_iWgAo5-Lvv5vPRpCYiVNI/edit?usp=sharing`,
    },
    {
      title: "Ветвление в Git",
      type: "text",
      description: `
            <ul>
              <li>Ветвление позволяет работать над разными версиями проекта одновременно.</li>
              <li>Основная ветка обычно называется <code>main</code> или <code>master</code>.</li>
              <li>Для создания новой ветки используется команда <code>git branch &lt;имя_ветки&gt;</code>.</li>
              <li>Для переключения между ветками — <code>git checkout &lt;имя_ветки&gt;</code>.</li>
            </ul>
          `,
    },
    {
      title: "Работа с удалёнными репозиториями",
      type: "text",
      description: `
            <ul>
              <li>Удалённый репозиторий — это версия проекта, хранящаяся на сервере (например, GitHub, GitLab, Bitbucket).</li>
              <li>Команда <code>git remote add origin &lt;URL&gt;</code> добавляет удалённый репозиторий.</li>
              <li>Команда <code>git fetch</code> загружает изменения из удалённого репозитория без слияния.</li>
              <li>Команда <code>git pull</code> загружает изменения и сразу объединяет их с текущей веткой.</li>
            </ul>
          `,
    },
    {
      title: "Конфликты и их разрешение",
      type: "text",
      description: `
            <ul>
              <li>Конфликты возникают, когда Git не может автоматически объединить изменения из разных веток.</li>
              <li>Для разрешения конфликтов нужно вручную отредактировать файлы, указать изменения и выполнить <code>git add</code>.</li>
              <li>После разрешения конфликтов необходимо завершить слияние командой <code>git commit</code>.</li>
            </ul>
          `,
    },
    {
      title: "Прогрессивная развертка",
      type: "text",
      description: `
            <ul>
              <li>Прогрессивная развертка — это подход к разработке страниц, при котором отображение контента происходит по мере его загрузки.</li>
              <li>Сначала загружается основной контент.</li>
              <li>Второстепенный контент загружается позже.</li>
            </ul>
          `,
    },
  ],
};
