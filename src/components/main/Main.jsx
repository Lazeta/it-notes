import { data } from "../../data/Data";
import ParentComponent from "../categories/ParentComponent";
import { Tests } from "../tests/Tests";
import { S } from "./Main.styles";

export const Main = () => {
  return (
    <S.Main>
      <ParentComponent data={data} />
      <Tests />
    </S.Main>
  );
};
