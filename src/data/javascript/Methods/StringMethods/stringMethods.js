import { StringAdditionalMethods } from "./StringAdditionalMethods/StringAdditionalMethods";
import { stringReplace } from "./StringReplace/stringReplace";
import { StringReplaceChar } from "./StringReplaceChar/StringReplaceChar";
import { StringSearchMethods } from "./StringSearchMethods/StringSearchMethods";
import { StringSliceMethods } from "./StringSliceMethods/StringSliceMethods";
import { StringSplitJoinMethods } from "./StringSplitJoinMethods/StringSplitJoinMethods";
import { StringTransformationsMethods } from "./StringTransformationsMethods/StringTransformationsMethods";

export const stringMethods = {
  id: 506,
  title: "Strings Methods",
  children: [
    StringTransformationsMethods,
    StringSearchMethods,
    StringSplitJoinMethods,
    StringSliceMethods,
    StringAdditionalMethods,
    stringReplace,
    StringReplaceChar,
    {
      id: 2559,
      title: "8. Полезные ссылки",
      children: [
        {
          title: "",
          type: "text",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
          link: "Learn more about string methods"
        },
        {
          title: "",
          type: "text",
          url: "https://javascript.info/string",
          link: "Interactive examples of string methods"
        },
      ],
    },
  ],
};
