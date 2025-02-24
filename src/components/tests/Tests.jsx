import { S } from "./Test.styles"
import { Test } from "./Test";
import Button from "../buttons/Button";

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