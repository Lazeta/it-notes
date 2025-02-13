import { useState } from "react";
import { test1 } from "../../data/tests/test1"
import Button from "../buttons/Button"
import { S } from "./Tests.styles";
import { Line } from "../line/Line";



export const Tests = () => {
    const [showQuest, setShowQuest] = useState([]);
    const [showAnswer, setShowAnswer] = useState({});

    const handleShowQuestionClick = () => {
        const mapQuestions = test1.questions.map((quest) => {
            return {
                id: quest.id,
                text: quest.text,
                answer: quest.answer,
            }
        })
        setShowQuest(mapQuestions);
    }

    const handleShowAnswerClick = (id) => {
        setShowAnswer(prev => ({
            ...prev,
            [id]: !prev[id], // Переключаем отображение ответа для конкретного вопроса
        }));
    };

    return (
        <S.Tests>
            {/* даём название тесту */}
            <h1>{test1.title}</h1>
            <Button title={"Show questions"} onClick={handleShowQuestionClick}></Button>

            {/* отображаем вопросы */}
            <S.Test>
                {showQuest.map((question) => (
                    <div key={question.id}>
                        <h3>{question.text}</h3>
                        <textarea name={question.id} id={question.id} rows="4"></textarea>

                        {/* отправляем ответ на анализ */}

                        {/* кнопка для показа ответа */}
                        <button onClick={() => handleShowAnswerClick(question.id)}>
                            {showAnswer[question.id] ? "Скрыть ответ" : "Показать ответ"}
                        </button>
                        {/* Отображение ответа */}
                        {showAnswer[question.id] && <p>{question.answer}</p>}
                    </div>
                ))}
            </S.Test>
        </S.Tests>
    )
}

// мапим все тесты
// мапим каждый отдельный тест
// инициализируем вопросы по id