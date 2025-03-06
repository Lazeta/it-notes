import { data } from "../../data/Data";
import { test } from "../../data/tests/test";
import ParentComponent from "../categories/ParentComponent";
import { Line } from "../line/Line";
import { Tests } from "../tests/Tests";
import { S } from "./Main.styles";

export const Main = () => {
  return (
    <S.Main>
      <ParentComponent data={data} />
      <Line/>
      <S.Details>
        <S.Summary>Тесты</S.Summary>
        <Tests testId={test}/>
      </S.Details>
    </S.Main>
  );
};
