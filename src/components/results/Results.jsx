import { S } from "./Results.styles";

export default function Results ({results}) {
    return (
        <S.Results>
            <h2>Результаты</h2>
            <p>Итоговый балл: {results.finalScore}</p>
            {results.results.map((result, index) => (
                <div key={index}>
                    <h3>Вопрос: {result.question}</h3>
                    <p>Ваш ответ: {result.userAnswer}</p>
                    <p>Правильный ответ: {result.correctAnswer}</p>
                    <p>Оценка: {result.score}% ({result.points} баллов)</p>
                </div>
            ))}
        </S.Results>
    )
} 