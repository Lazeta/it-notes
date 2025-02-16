async function evaluateAnswer(question, userAnswer) {
  const prompt = `Оцени ответ на вопрос "${question.question}". Правильный ответ: "${question.answer}". Ответ пользователя: "${userAnswer}". Оцени корректность ответа от 0% до 100%, где 0% - полностью неверный ответ, а 100% - идеальный ответ. Верни только число от 0 до 100, соответствующее проценту соответствия ответа.`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4", // Используйте актуальную модель
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that evaluates answers to questions.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 5,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Ошибка при запросе к OpenAI");
    }

    const scoreText = data.choices[0].message.content.trim();
    const score = parseInt(scoreText);

    if (isNaN(score)) {
      throw new Error("Не удалось получить оценку от OpenAI.");
    }

    return score;
  } catch (error) {
    console.error("Ошибка при оценке ответа:", error);
    return 0; // Возвращаем 0 в случае ошибки
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
