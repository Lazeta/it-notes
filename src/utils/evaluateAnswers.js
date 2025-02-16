async function evaluateAnswer(question, userAnswer) {
  try {
    const response = await fetch("http://localhost:3000/api/chatgpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question.question,
        userAnswer: userAnswer,
      }),
    });

    const text = await response.text(); // Сначала читаем ответ как текст
    console.log("Ответ от сервера:", text); // Логируем ответ

    const data = JSON.parse(text); // Пытаемся распарсить JSON

    if (!response.ok) {
      throw new Error(data.error?.message || "Ошибка при запросе к прокси-серверу");
    }

    const score = data.score;
    if (isNaN(score)) {
      throw new Error("Не удалось получить оценку от прокси-сервера.");
    }

    return score;
  } catch (error) {
    console.error("Ошибка при оценке ответа:", error);
    return 0;
  }
}

async function evaluateAnswers(test, userAnswers) {
  const results = [];
  let totalScore = 0;

  for (const question of test.questions) {
    const userAnswer = userAnswers[question.id] || "";
    const score = await evaluateAnswer(question, userAnswer);
    const points = (score / 100) * 10; // Переводим % в баллы (0-10)
    totalScore += points;
    results.push({
      question: question.question,
      userAnswer,
      correctAnswer: question.answer,
      score,
      points,
    });
  }

  const finalScore = (totalScore / test.questions.length).toFixed(1); // Итоговый результат от 0 до 100
  return { results, finalScore };
}

export default evaluateAnswers;