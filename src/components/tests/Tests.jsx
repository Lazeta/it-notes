import { S } from "./Test.styles"
import { Test } from "./Test";
import { useState } from "react";

export const Tests = ({ testId }) => {
    const [currentTestId, setCurrentTestId] = useState(null);

    const handleTestClick = (test) => {
        // Сбрасываем состояние текущего теста, если выбран тот же тест
        setCurrentTestId(currentTestId === test.id ? null : test.id);
    }

    return (
        <S.TestWrapper>
            {testId.map((test) => (
                <S.Details key={test.id}>
                    <S.Summary onClick={() => handleTestClick(test)}>
                        {test.title}
                    </S.Summary>
                    {currentTestId === test.id && <Test test={test} />}
                </S.Details>
            ))}
        </S.TestWrapper>
    )
}