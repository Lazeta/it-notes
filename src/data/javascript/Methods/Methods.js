import { arrayMethods } from "./ArrayMethods/arrayMethods";
import { stringMethods } from "./StringMethods/stringMethods";
import { numberMethods } from "./NumberMethods/numberMethods";
import { objectMethods } from "./ObjectMethods/objectMethods";
import { cycleMethod } from "./Cycle/CycleMethod";
import { Json } from "./JSON/json";
import { regularExpression } from "./RegularExpression/regularExpression";

export const Methods = {
  id: 154,
  title: "Methods",
  children: [
    arrayMethods,
    stringMethods,
    numberMethods,
    objectMethods,
    cycleMethod,
    Json,
    regularExpression,
  ],
};
