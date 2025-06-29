import { CI_CD_CD } from "./CI_CD_CD/CI_CD_CD";
import { CleanCode } from "./CleanCode/CleanCode";
import { DesignPatterns } from "./DesignPatterns/DesignPatterns";
import { DIALOG_MODAL_PATTERN } from "./DialogPattern/DialogPattern";
import { DRY } from "./DRY/DRY";
import { EventDelegation } from "./EventDelegation/EventDelegation";
import { FunctionalProgramming } from "./FunctionalProgramming/FunctionalProgramming";
import { ImperativeAndDeclarativeProgramming } from "./ImperativeAndDeclarativeProgramming/ImperativeAndDeclarativeProgramming";
import { KISS } from "./KISS/KISS";
import { MethodologyAgile } from "./MethodologyAgile/MethodologyAgile";
import { MethodologyBEM } from "./MethodologyBEM/MethodologyBEM";
import { MethodologyKanban } from "./MethodologyKanban/MethodologyKanban";
import { MethodologyScrum } from "./MethodologyScrum/MethodologyScrum";
import { OOP } from "./OOP/OOP";
import { SOLID } from "./SOLID/SOLID";
import { YAGNI } from "./YAGNI/YAGNI";

export const Patterns = {
  id: 16,
  title: "Patterns, principles, methodologies",
  children: [
    CleanCode,
    CI_CD_CD,
    DesignPatterns,
    DIALOG_MODAL_PATTERN,
    DRY,
    EventDelegation,
    FunctionalProgramming,
    ImperativeAndDeclarativeProgramming,
    KISS,
    MethodologyAgile,
    MethodologyBEM,
    MethodologyKanban,
    MethodologyScrum,
    OOP,
    SOLID,
    YAGNI,
  ],
};
