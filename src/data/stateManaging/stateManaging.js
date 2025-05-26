import { redux } from "./Redux/redux";
import { reduxToolkit } from "./Redux/ReduxToolkit/reduxToolkit";

export const stateManaging = {
    id: 21,
    title: "State Managing",
    children: [
        redux,
        reduxToolkit,
    ],
};