const express = require('express');
const proxy = require('express-http-proxy');
const bodyParser = require('body-parser');
const cors = require('cors');
const zlib = require('zlib'); // Добавляем модуль для работы с gzip

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use(
  '/api/chatgpt',
  proxy('https://api.openai.com', {
    proxyReqPathResolver: (req) => {
      return `/v1/chat/completions`;
    },
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
      proxyReqOpts.headers['Authorization'] = `Bearer ${OPENAI_API_KEY}`;
      proxyReqOpts.headers['Content-Type'] = 'application/json';
      return proxyReqOpts;
    },
    proxyReqBodyDecorator: (bodyContent, srcReq) => {
      const { question, userAnswer } = srcReq.body;
      const prompt = `Оцени ответ на вопрос "${question}". Ответ: "${userAnswer}". Оцени корректность ответа от 0% до 100%, где 0% — полностью неверный ответ, а 100% — идеальный ответ. Верни только число от 0 до 100.`;
      return JSON.stringify({
        model: "gpt-4-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that evaluates answers to questions.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 5,
      });
    },
    userResDecorator: (proxyRes, proxyResData, userReq, userRes) => {
      return new Promise((resolve, reject) => {
        // Проверяем, сжат ли ответ
        if (proxyRes.headers['content-encoding'] === 'gzip') {
          // Распаковываем gzip-сжатые данные
          zlib.gunzip(proxyResData, (err, decompressedData) => {
            if (err) {
              console.error("Ошибка при распаковке gzip:", err);
              reject(err);
            } else {
              try {
                const text = decompressedData.toString('utf8');
                console.log("Ответ от OpenAI (распакованный):", text);
                const data = JSON.parse(text);
                const scoreText = data.choices[0].message.content.trim();
                const score = parseInt(scoreText);
                resolve({ score });
              } catch (error) {
                console.error("Ошибка при парсинге ответа от OpenAI:", error);
                reject(error);
              }
            }
          });
        } else {
          // Если ответ не сжат, обрабатываем как текст
          try {
            const text = proxyResData.toString('utf8');
            console.log("Ответ от OpenAI:", text);
            const data = JSON.parse(text);
            const scoreText = data.choices[0].message.content.trim();
            const score = parseInt(scoreText);
            resolve({ score });
          } catch (error) {
            console.error("Ошибка при парсинге ответа от OpenAI:", error);
            reject(error);
          }
        }
      });
    },
    proxyErrorHandler: (err, res, next) => {
      console.error("Ошибка прокси:", err);
      res.status(500).json({ error: 'Ошибка при обработке запроса' });
    },
    timeout: 5000,
  })
);

app.listen(PORT, () => {
  console.log(`Прокси-сервер запущен на http://localhost:3000`);
});
