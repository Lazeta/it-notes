import { data } from "../../data/Data";
import Categories from "../categories/Categories";
import "./Body.module.css";

export const Body = () => {
  return (
    <div className="body">
      <Categories data={data} />
    </div>
  );
};
