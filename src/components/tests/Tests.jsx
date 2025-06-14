import { S } from "./Test.styles"
import { Test } from "./Test";

export const Tests = ({ testId }) => {
    return (
        <S.TestWrapper>
            {testId.map((test) => (
                <S.Details key={test}>
                    <S.Summary>{test.title}</S.Summary>
                    <Test test={test} />
                </S.Details>
            ))}
        </S.TestWrapper>
    )
}