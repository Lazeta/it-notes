export default function Results ({results}) {
    return (
        <div>
            <h2>Результаты</h2>
            <p>Итоговый балл: {results.finalScore}</p>
            {results.results.map((result, index) => (
                <div key={index}>
                    <p>Вопрос: {result.question}</p>
                    <p>Ваш ответ: {result.userAnswer}</p>
                    <p>Оценка: {result.score}% ({result.points} баллов)</p>
                </div>
            ))}
        </div>
    )
} 