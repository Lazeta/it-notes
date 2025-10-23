import { data } from "../../data/Data";
import ParentComponent from "../categories/ParentComponent";
import { Line } from "../line/Line";
import { Tests } from "../tests/Tests";
import { S } from "./Main.styles";
import { testList } from "../../data/tests/testList"; 

export const Main = () => {
  return (
    <S.Main>
      <ParentComponent data={data} />
      <Line/>
      <S.Details>
        <S.Summary>Тесты</S.Summary>
        <Tests testId={testList}/>
      </S.Details>
    </S.Main>
  );
};
