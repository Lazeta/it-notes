import { CSSModule } from "./CSSModule/CSSModule";
import { SASSModule } from "./SASSModule/SASSModule";
import { SCSSModule } from "./SCSSModule/SCSSModule";
import { styledComponentsModule } from "./styledComponentsModule/styledComponentsModule";

export const Style = {
  id: 123,
  title: "Style",
  children: [
    CSSModule,
    SASSModule,
    SCSSModule,
    styledComponentsModule,
  ],
};