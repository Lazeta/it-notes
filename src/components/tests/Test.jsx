import { useState } from "react";
import { S } from "./Test.styles";
import Results from "../results/Results";
import evaluateAnswers from "../../utils/evaluateAnswers";

export const Test = ({ test }) => {
    console.log("Test mounted", test && { id: test.id, title: test.title, questionsLen: test.questions?.length });

    const [userAnswers, setUserAnswers] = useState({});
    const [results, setResults] = useState(null);

    const handleAnswerChange = (questionId, answer) => {
        setUserAnswers((prev) => ({ ...prev, [questionId]: answer }))
    }

    const handleSubmit = async () => {
        const results = await evaluateAnswers(test, userAnswers);
        setResults(results);
    }

    const isTestComplete = test.questions.every(
        (question) => userAnswers[question.id]?.trim() !== ""
    );

    return (
        <S.Tests>
            {results ? (<Results results={results} />
            ) : (
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
                    <button
                        onClick={handleSubmit}
                        disabled={!isTestComplete}>
                        Завершить тест
                    </button>
                </S.Test>
            )}
        </S.Tests>
    )
}