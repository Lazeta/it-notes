export const gitFlow = {
  id: 209,
  title: "Git Flow",
  children: [
    {
      title: "Основное понятие Git Flow",
      type: "text",
      description: `
            <ul>
              <li>Git Flow — это стратегия ветвления для Git, которая помогает организовать процесс разработки, выпуска и поддержки проектов.</li>
              <li>Она была предложена Винсентом Дриссеном и стала популярной благодаря своей простоте и эффективности.</li>
              <li>Git Flow использует две основные ветки: <code>main</code> (или <code>master</code>) и <code>develop</code>, а также вспомогательные ветки для фич, релизов и исправлений.</li>
            </ul>
          `,
    },
    {
      title: "Основные ветки в Git Flow",
      type: "text",
      description: `
            <ul>
              <li><strong>main (master)</strong> — ветка, содержащая стабильную версию кода, готовая к релизу.</li>
              <li><strong>develop</strong> — ветка для текущей разработки, куда сливаются все завершённые фичи.</li>
              <li><strong>feature/*</strong> — ветки для разработки новых функциональностей. Создаются от <code>develop</code> и сливаются обратно в неё.</li>
              <li><strong>release/*</strong> — ветки для подготовки релиза. Создаются от <code>develop</code> и сливаются в <code>main</code> и <code>develop</code>.</li>
              <li><strong>hotfix/*</strong> — ветки для срочных исправлений в <code>main</code>. Создаются от <code>main</code> и сливаются в <code>main</code> и <code>develop</code>.</li>
            </ul>
          `,
    },
    {
      title: "Процесс работы с Git Flow",
      type: "text",
      description: `
            <ul>
              <li><strong>Инициализация Git Flow</strong>: Используйте команду <code>git flow init</code>, чтобы настроить ветки <code>main</code> и <code>develop</code>.</li>
              <li><strong>Разработка фич</strong>:
                <ul>
                  <li>Создайте ветку для фичи: <code>git flow feature start &lt;имя_фичи&gt;</code>.</li>
                  <li>Завершите разработку фичи: <code>git flow feature finish &lt;имя_фичи&gt;</code>.</li>
                </ul>
              </li>
              <li><strong>Подготовка релиза</strong>:
                <ul>
                  <li>Создайте ветку для релиза: <code>git flow release start &lt;версия&gt;</code>.</li>
                  <li>Завершите релиз: <code>git flow release finish &lt;версия&gt;</code>.</li>
                </ul>
              </li>
              <li><strong>Исправление багов</strong>:
                <ul>
                  <li>Создайте ветку для исправления: <code>git flow hotfix start &lt;имя_исправления&gt;</code>.</li>
                  <li>Завершите исправление: <code>git flow hotfix finish &lt;имя_исправления&gt;</code>.</li>
                </ul>
              </li>
            </ul>
          `,
    },
    {
      title: "Преимущества Git Flow",
      type: "text",
      description: `
            <ul>
              <li>Чёткая структура веток, которая упрощает управление проектом.</li>
              <li>Подходит для проектов с регулярными релизами.</li>
              <li>Позволяет параллельно разрабатывать новые фичи и поддерживать стабильную версию.</li>
            </ul>
          `,
    },
    {
      title: "Недостатки Git Flow",
      type: "text",
      description: `
            <ul>
              <li>Может быть избыточным для небольших проектов или команд.</li>
              <li>Требует строгого соблюдения процесса, что может замедлять разработку.</li>
              <li>Сложнее управлять в проектах с непрерывной доставкой (Continuous Delivery).</li>
            </ul>
          `,
    },
    {
      title: "Альтернативы Git Flow",
      type: "text",
      description: `
            <ul>
              <li><strong>GitHub Flow</strong> — более простая стратегия, ориентированная на непрерывную доставку.</li>
              <li><strong>GitLab Flow</strong> — стратегия, которая сочетает в себе элементы Git Flow и Continuous Delivery.</li>
              <li><strong>Trunk-Based Development</strong> — стратегия, при которой разработка ведётся в одной основной ветке.</li>
            </ul>
          `,
    },
  ],
};
