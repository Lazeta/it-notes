import { CSSModule } from "./CSSModule/CSSModule";
import { SASSModule } from "./SASSModule/SASSModule";
import { SCSSModule } from "./SCSSModule/SCSSModule";
import { styledComponentsModule } from "./styledComponentsModule/styledComponentsModule";

export const Style = {
  title: "Style",
  children: [
    CSSModule,
    SASSModule,
    SCSSModule,
    styledComponentsModule,
  ],
};