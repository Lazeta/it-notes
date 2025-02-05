import { CI_CD_CD } from "./CI_CD_CD/CI_CD_CD";
import { CleanCode } from "./CleanCode/CleanCode";
import { DesignPatterns } from "./DesignPatterns/DesignPatterns";
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
  id: 500,
  title: "Patterns, principles, methodologies",
  children: [
    CleanCode,
    CI_CD_CD,
    DRY,
    DesignPatterns,
    EventDelegation,
    FunctionalProgramming,
    ImperativeAndDeclarativeProgramming,
    KISS,
    MethodologyBEM,
    MethodologyAgile,
    MethodologyScrum,
    MethodologyKanban,
    OOP,
    SOLID,
    YAGNI,
  ],
};
