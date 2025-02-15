async function evaluateAnswer(question, userAnswer) {
    const prompt = `Оцени ответ на вопрос "${question}". Ответ: "${userAnswer}". Оцени корректность ответа от 0% 
        до 100%, где 0% - полностью неверный ответ, а 100% - идеальный ответ. Верни только число от 0 до 100 
        соответствующее проценту соответствия ответа.`;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}` // Используйте переменную окружения
        },
        body: JSON.stringify({
            model: "gpt-4o-mini", // Используйте корректное название модели
            // store: true,
            // prompt: prompt,
            messages: [
                { role: "system", content: "You are a helpful assistant that evaluates answers to questions." },
                { role: "user", content: prompt },
              ],
            max_tokens: 5, // Ограничиваем количество токенов в ответе
        }),
    });
    const data = await response.json();

    // извлекаем ответ из message.content
    const scoreText = data.choices[0].message.content.trim();
    const score = parseInt(scoreText);

    // Проверяем, что score является числом
    if (isNaN(score)) {
        throw new Error("Не удалось получить оценку от OpenAI.")
    }

    return score;
}

async function evaluateAnswers(test, answers) {
    const results = [];
    let totalScore = 0;

    for (const question of test.questions) {
        const userAnswer = answers[question.id] || "";
        const score = await evaluateAnswer(question.text, userAnswer);
        const points = (score / 100) * 10; // Переводим % в баллы (0-10)
        totalScore += points;
        results.push({ question: question.text, userAnswer, score, points });
    }

    const finalScore = (totalScore / test.questions.length).toFixed(1); // Итоговый результат от 0 до 100
    return { results, finalScore }
}

export default evaluateAnswers;