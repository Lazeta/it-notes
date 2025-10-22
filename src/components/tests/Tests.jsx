import { List } from "react-window";
import { S } from "./Test.styles"
import { Test } from "./Test";
import { useState } from "react";

export const Tests = ({ testId }) => {
    const [currentTestId, setCurrentTestId] = useState(null);

    const handleTestClick = (test) => {
        // Сбрасываем состояние текущего теста, если выбран тот же тест
        setCurrentTestId(currentTestId === test.id ? null : test.id);
    }

    const validTests = Array.isArray(testId) ? testId.filter(Boolean) : [];

    const RowComponent = ({ index, style, tests }) => {
        const test = tests[index];
        if (!test) return null;

        return (
            <div style={style}>
                <S.Details>
                    <S.Summary onClick={() => handleTestClick(test)}>
                        {test.title || "Без названия теста"}
                    </S.Summary>
                    {currentTestId === test.id &&
                        Array.isArray(test.questions) &&
                        <Test test={test} />}
                </S.Details>
            </div>
        )
    }


    return (
        <S.TestWrapper style={{ height: 600 }}>
            <List
                rowComponent={RowComponent}
                rowCount={validTests.length}
                rowHeight={60}
                rowProps={{ tests: validTests }}
            >
            </List>
        </S.TestWrapper>
    )
}