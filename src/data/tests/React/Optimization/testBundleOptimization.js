export const testBundleOptimization = {
  id: 103200,
  title: "Bundle Optimization (оптимизация сборки)",
  questions: [
    {
      id: 103201,
      question: "Что такое оптимизация бандла?",
      answer: `
**Оптимизация бандла:**
- Это процесс улучшения производительности и уменьшения размера конечного файла сборки (бандла).
- Основная цель — сократить время загрузки приложения и улучшить пользовательский опыт.

**Основные подходы:**
1. Уменьшение размера бандла.
2. Разделение кода (Code Splitting).
3. Ленивая загрузка (Lazy Loading).
4. Минификация и сжатие кода.

**Пример:**
\`\`\`javascript
// Использование Code Splitting:
const LazyComponent = React.lazy(() => import('./LazyComponent'));
\`\`\`
`,
    },
    {
      id: 103202,
      question: "Как работает Code Splitting?",
      answer: `
**Code Splitting:**
- Это техника разделения кода на более мелкие части, чтобы загружать только те части, которые нужны в данный момент.
- Реализуется через динамический импорт или инструменты сборки (например, Webpack).

**Пример:**
\`\`\`javascript
// Динамический импорт:
const Module = await import('./Module');

// Webpack Code Splitting:
const LazyComponent = React.lazy(() => import('./LazyComponent'));
\`\`\`
`,
    },
    {
      id: 103203,
      question:
        "Что такое Tree Shaking и как он помогает оптимизировать бандл?",
      answer: `
**Tree Shaking:**
- Это процесс удаления неиспользуемого (мёртвого) кода из бандла.
- Работает только с ES6 модулями (import/export).

**Пример:**
\`\`\`javascript
// Исходный код:
export const usedFunction = () => console.log('Used');
export const unusedFunction = () => console.log('Unused');

// В собранном бандле останется только \`usedFunction\`.
\`\`\`
`,
    },
    {
      id: 103204,
      question: "Как минифицировать код для оптимизации бандла?",
      answer: `
**Минификация:**
- Это процесс уменьшения размера кода за счет удаления пробелов, комментариев и переименования переменных.

**Инструменты:**
1. **Terser:** Популярный минификатор для JavaScript.
2. **CSSNano:** Для минификации CSS.
3. **Webpack/Babel:** Интегрируют минификацию в процесс сборки.

**Пример:**
\`\`\`javascript
// До минификации:
function greet(name) {
  console.log('Hello, ' + name);
}

// После минификации:
function g(n){console.log("Hello, "+n)}
\`\`\`
`,
    },
    {
      id: 103205,
      question: "Как использовать ленивую загрузку (Lazy Loading)?",
      answer: `
**Ленивая загрузка:**
- Техника загрузки кода только тогда, когда он действительно нужен.
- Реализуется через \`React.lazy\` и \`Suspense\`.

**Пример:**
\`\`\`javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
\`\`\`
`,
    },
    {
      id: 103206,
      question: "Как анализировать размер бандла?",
      answer: `
**Анализ размера бандла:**
- Используйте инструменты для анализа состава бандла.

**Инструменты:**
1. **Webpack Bundle Analyzer:**
   - Визуализирует размеры частей бандла.
2. **Source Map Explorer:**
   - Анализирует исходный код через source maps.

**Пример Webpack Bundle Analyzer:**
\`\`\`javascript
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  plugins: [new BundleAnalyzerPlugin()],
};
\`\`\`
`,
    },
    {
      id: 103207,
      question: "Какие есть стратегии оптимизации бандла?",
      answer: `
**Стратегии:**
1. **Code Splitting:**
   - Разделяйте код на части.
2. **Tree Shaking:**
   - Удаляйте неиспользуемый код.
3. **Ленивая загрузка:**
   - Загружайте код по требованию.
4. **Минификация:**
   - Сокращайте размер кода.
5. **Кэширование:**
   - Используйте долгосрочное кэширование для статических файлов.
6. **Compression:**
   - Сжимайте файлы с помощью Gzip или Brotli.

**Пример:**
\`\`\`javascript
// Compression с помощью Webpack:
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [new CompressionPlugin()],
};
\`\`\`
`,
    },
    {
      id: 103208,
      question: "Как использовать Gzip и Brotli для сжатия бандла?",
      answer: `
**Gzip и Brotli:**
- Алгоритмы сжатия, которые уменьшают размер файлов для передачи по сети.

**Настройка:**
1. **Gzip:**
   - Настройте сервер для сжатия файлов.
2. **Brotli:**
   - Современный алгоритм, который обеспечивает лучшее сжатие, чем Gzip.

**Пример с Webpack:**
\`\`\`javascript
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip', // или 'brotliCompress'
    }),
  ],
};
\`\`\`
`,
    },
    {
      id: 103209,
      question: "Как использовать кэширование для оптимизации бандла?",
      answer: `
**Кэширование:**
- Это техника сохранения статических файлов в браузере пользователя для ускорения повторной загрузки.

**Подходы:**
1. **Именование файлов хешами:**
   - Добавьте уникальные хеши к именам файлов для долгосрочного кэширования.
2. **Service Workers:**
   - Используйте для управления кэшированием.

**Пример Webpack:**
\`\`\`javascript
output: {
  filename: '[name].[contenthash].js',
},
\`\`\`
`,
    },
    {
      id: 103210,
      question: "Какие инструменты помогают оптимизировать бандл?",
      answer: `
**Инструменты:**
1. **Webpack:**
   - Настройка Code Splitting, минификации и Tree Shaking.
2. **Vite/Rollup:**
   - Быстрая сборка с нативными ES модулями.
3. **Parcel:**
   - Автоматическая оптимизация без конфигурации.
4. **ESLint/Prettier:**
   - Анализ и форматирование кода.
5. **Lighthouse:**
   - Аудит производительности.

**Пример Lighthouse:**
- Запустите аудит в Chrome DevTools, чтобы проверить производительность.
`,
    },
  ],
};
