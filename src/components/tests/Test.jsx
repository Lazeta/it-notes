import { useState } from "react";
import { test } from "../../data/tests/test1"
// import Button from "../buttons/Button"
import { S } from "./Test.styles";
import Results from "../results/Results";
import evaluateAnswers from "../../utils/evaluateAnswers";

// const test1 = {
//     id: 1,
//     title: "Тест по Agile",
//     questions: [
//         {
//             id: 1,
//             text: "Что такое Agile?",
//             answer: "Agile — это гибкий подход к управлению проектами и разработке продуктов, который фокусируется на итеративности, сотрудничестве с заказчиком и быстрой адаптации к изменениям.",
//         },
//         {
//             id: 2,
//             text: "Назови основные принципы Agile",
//             answer: "1.Люди и взаимодействие важнее процессов и инструментов. 2.Работающий продукт важнее исчерпывающей документации. 3.Сотрудничество с заказчиком важнее согласования условий контракта. 4.Готовность к изменениям важнее следования первоначальному плану."
//         },
//         {
//             id: 3,
//             text: "Назови методы Agile",
//             answer: "Scrum, Kanban, Extreme Programming (XP), Lean, Crystal, Dynamic System Development Method (DSDM)."
//         },
//         {
//             id: 4,
//             text: "Какие преимущества есть у Agile?",
//             answer: "1.Быстрая адаптация к изменениям. 2.Улучшенное взаимодействие с заказчиком. 3.Раннее выявление проблем. 4.Постоянное улучшение продукта."
//         },
//         {
//             id: 5,
//             text: "Расскажи подробнее о Scrum, что это?",
//             answer: "Scrum — это фреймворк Agile, который используется для управления проектами и разработки продуктов. Он основан на итерациях (спринтах), ролях (Scrum Master, Product Owner, Developers) и артефактах (бэклог продукта, бэклог спринта, инкремент)."
//         },
//         {
//             id: 6,
//             text: "Какие есть этапы в Scrum?",
//             answer: "1.Планирование спринта. 2.Ежедневные стендапы (Daily Scrum). 3.Разработка в течение спринта. 4. Обзор спринта (Sprint Review). 5.Ретроспектива спринта (Sprint Retrospective)."
//         },
//         {
//             id: 7,
//             text: "Какие преимущества Scrum?",
//             answer: "1.Прозрачность процесса разработки. 2.Быстрая обратная связь от заказчика. 3.Гибкость в управлении изменениями. 4.Улучшенное взаимодействие в команде."
//         },
//         {
//             id: 8,
//             text: "Что такое Kanban?",
//             answer: "Kanban — это метод управления задачами, который визуализирует рабочий процесс на доске с колонками (например, 'Сделать', 'В процессе', 'Готово')."
//         },
//         {
//             id: 9,
//             text: "Какие есть принципы Kanban?",
//             answer: "1.Визуализация рабочего процесса. 2.Ограничение количества задач в работе (WIP). 3.Управление потоком задач. 4.Постоянное улучшение процесса (Kaizen). Он помогает ограничивать количество задач в работе (WIP) и улучшает поток задач."
//         },
//         {
//             id: 10,
//             text: "Подробнее о Kanban доске",
//             answer: "Kanban доска — это инструмент визуализации рабочего процесса. Она состоит из колонок (например, 'Сделать', 'В процессе', 'Готово'), в которые перемещаются задачи. (карточки). Это помогает команде видеть статус задач и улучшать процесс."
//         },
//         {
//             id: 11,
//             text: "Какие преимущества Kanban?",
//             answer: "1.Улучшенная визуализация рабочего процесса. 2.Снижение количества задач в работе (WIP). 3.Улучшенный поток задач. 4.Гибкость и адаптивность."
//         },
//         {
//             id: 12,
//             text: "Какие ещё есть методологии помимо Agile?",
//             answer: "1.Waterfall (каскадная модель). 2.Spiral (спиральная модель). 3.V-Model (V-образная модель). 4.DevOps. 5.Feature-Driven Development (FDD)."
//         },
//     ],
// };

export const Test = () => {
    // const [showQuest, setShowQuest] = useState([]);
    // const [showAnswer, setShowAnswer] = useState({});

    // --------------------------
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers((prev) => ({ ...prev, [questionId]: answer }))
    }

    const handleSubmit = async () => {
        const results = await evaluateAnswers(test, answers);
        setResults(results);
    }
    // // --------------------------
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

    //     const handleShowAnswerClick = (id) => {
    //         setShowAnswer(prev => ({
    //             ...prev,
    //             [id]: !prev[id], // Переключаем отображение ответа для конкретного вопроса
    //         }));
    //     };

    return (
        <S.Tests>
            {/* даём название тесту */}
            <h1>{test.title}</h1>
            {/* <Button title={"Show questions"} onClick={handleShowQuestionClick}></Button> */}

            {/* отображаем вопросы */}
            <S.Test key={test.id}>
                {test.questions.map((question) => (
                    <div key={question.id}>
                        {/* <h3>{question.text}</h3> */}
                        <p>{question.text}</p>
                        <textarea rows="4"
                            value={answers[question.id] || ""}
                            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        ></textarea>

                        <button onClick={handleSubmit}>Завершить тест</button>
                        {results && <Results results={results} />}

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
                    </div>
                ))}
            </S.Test>
        </S.Tests>
    )
}