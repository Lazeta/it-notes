import { useState } from "react";
import { S } from "./Test.styles";
import Results from "../results/Results";
import evaluateAnswers from "../../utils/evaluateAnswers";

export const Test = ({ test }) => {
    const [userAnswers, setUserAnswers] = useState({});
    const [results, setResults] = useState(null);
    const [showAnswer, setShowAnswer] = useState({});

    // Обработчик изменения ответа
    const handleAnswerChange = (questionId, answer) => {
        setUserAnswers((prev) => ({ ...prev, [questionId]: answer }))
    }

    // Обработчик завершения теста
    const handleSubmit = async () => {
        const results = await evaluateAnswers(test, userAnswers);
        setResults(results);
    }

    const handleShowAnswerClick = (id) => {
        setShowAnswer(prev => ({
            ...prev,
            [id]: !prev[id], // Переключаем отображение ответа для конкретного вопроса
        }));
    };

    // Проверяем ответил ли пользователь на все вопросы
    const isTestComplete = test.questions.every(
        (question) => userAnswers[question.id]?.trim() !== ""
    );

    return (
        <S.Tests>
            <h1>{test.title}</h1>
            <S.Test key={test.id}>
                {test.questions.map((question) => (
                    <div key={question.id}>
                        <h3>{question.question}</h3>
                        <textarea
                            rows="4"
                            value={userAnswers[question.id] || ""}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            placeholder="Введите ваш ответ"
                        ></textarea>
                    </div>
                ))}
                <button onClick={handleSubmit} disabled={!isTestComplete}>Завершить тест</button>
                {results && <Results results={results} />}
            </S.Test>
        </S.Tests>
    )
}




// const [showQuest, setShowQuest] = useState([]);
// const [showAnswer, setShowAnswer] = useState({});

//     const handleShowQuestionClick = () => {
//         const mapQuestions = test.questions.map((quest) => {
//             return {
//                 id: quest.id,
//                 text: quest.text,
//                 answer: quest.answer,
//             }
//         })
//         setShowQuest(mapQuestions);
//     }



{/* <Button title={"Show questions"} onClick={handleShowQuestionClick}></Button> */ }

{/* отправляем ответ на анализ
                        <button onClick={()=> {
                            // делает API запрос на сервер AI
                        }}>Send answer</button> *
                        {/* кнопка для показа ответа
                        <button onClick={() => handleShowAnswerClick(question.id)}>
                            {showAnswer[question.id] ? "Скрыть ответ" : "Показать ответ"}
                        </button>
                        {/* Отображение ответа
                        {showAnswer[question.id] && <p>{question.answer}</p>} */}