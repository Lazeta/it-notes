export const Task_7 = {
  title: "Task 7",
  id: 1006,
  children: [
    {
      title: "Did she say hallo?",
      type: "text",
      description: `
You received a whats up message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Halloween can pass the test)
function should be case insensitive to pass the tests
            `,
      code: `
function validateHello(str) {
const greetings = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
const lowerStr = str.toLowerCase()
const words = lowerStr.match(/\\w+/g)
for (let word of words){
if(greetings.includes(word)){
return true
}
}
return false
}

// or 

const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);

// or

const hellos = {
hello: 'english',
ciao: 'italian',
salut: 'french',
hallo: 'german',
hola: 'spanish',
ahoj: 'czech republic',
czesc: 'polish',
}

const validateHello = greetings => {
for (key in hellos) {
if (greetings.toLowerCase().includes(key)) {
return true
}
}
return false
}

// or

const vivas = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc'];
const validateHello = message => new RegExp(vivas.join('|'), 'i').test(message);
            `,
    },
  ],
};
