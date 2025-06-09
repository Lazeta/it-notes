import { middleware } from "./middleware/middleware";
import { workCycle } from "./workCycle/workCycle";

export const redux = {
    id: 213,
    title: "Redux",
    children: [
        workCycle,
        middleware,
    ],
}