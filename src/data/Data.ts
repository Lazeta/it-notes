// src/Data.ts

export const categories = ["React", "Vue", "Angular", "Node.js"] as const;

export type Category = typeof categories[number];

export const Data = {
    subject: {
        React: {
            title: "React",
            subtopics: {
                ReactJS: {
                    title: "React JS",
                    description: "Learn about React JS."
                },
                ReactTS: {
                    title: "React TS",
                    description: "Learn about React TypeScript."
                },
                ReactNative: {
                    title: "React Native",
                    description: "Learn about React Native."
                },
            },
        },
        Vue: {
            title: "Vue",
            subtopics: {
                VueJS: {
                    title: "Vue JS",
                    description: "Learn about Vue JS."
                },
            },
        },
        Angular: {
            title: "Angular",
            subtopics: {
                AngularJS: {
                    title: "Angular JS",
                    description: "Learn about Angular JS."
                },
            },
        },
        "Node.js": {  // Изменено с NodeJS на "Node.js"
            title: "Node.js",
            subtopics: {
                NodeExpress: {
                    title: "Node.js with Express",
                    description: "Learn about Node.js and Express."
                },
            },
        },
    },
};