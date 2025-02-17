import { S } from "./Test.styles"
import { Test } from "./Test";

export const Tests = ({ testId }) => {
    console.log(testId)
    return (
        <S.TestWrapper>
            {testId.map((test) => (
                <Test key={test.id} test={test} />
            ))}
        </S.TestWrapper>
    )
}