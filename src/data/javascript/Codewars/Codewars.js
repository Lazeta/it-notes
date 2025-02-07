export const Codewars = {
  id: 174,
  title: "Codewars",
  children: [
    {
      title: "Task 1",
      children: [
        {
          title: "Count Odd Numbers below n",
          type: "text",
          description: `
                Given a number n, return the number of positive odd numbers below n, EASY!

                Examples (Input -> Output)
                7  -> 3 (because odd numbers below 7 are [1, 3, 5])
                15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
                Expect large Inputs!
              `,
          code: `
function oddCount(n){
if (n <= 0){
return 0
}
if (n % 2 === 0){
return n / 2
} else {
return (n - 1) / 2
}
}

// or

function oddCount(n){
return n % 2 === 0 ? n / 2 : (n - 1) / 2 
}

// or 

const oddCount = n => n % 2 === 0 ? n / 2 : (n - 1) / 2
              `,
        },
      ],
    },
    {
      title: "Task 2",
      children: [
        {
          title: "Pole Vault Starting Marks",
          type: "text",
          description: `
              For a pole vaulter, it is very important to begin the approach run at the best possible starting mark. This is affected by numerous factors and requires fine-tuning in practice. But there is a guideline that will help a beginning vaulter start at approximately the right location for the so-called "three-step approach," based on the vaulter's body height.
              This guideline was taught to me in feet and inches, but due to the international nature of Codewars, I am creating this kata to use metric units instead.
              You are given the following two guidelines to begin with: (1) A vaulter with a height of 1.52 meters should start at 9.45 meters on the runway. (2) A vaulter with a height of 1.83 meters should start at 10.67 meters on the runway.
              You will receive a vaulter's height in meters (which will always lie in a range between a minimum of 1.22 meters and a maximum of 2.13 meters). Your job is to return the best starting mark in meters, rounded to two decimal places.
              Hint: Based on the two guidelines given above, you will want to account for the change in starting mark per change in body height. This involves a linear relationship. (If you're not clear on that, search online for "linear equation.") But there is also a constant offset involved. If you can determine the rate of change described above, you should be able to determine that constant offset.
              `,
          code: `
// Remember: Body height of 1.52 m --> starting mark: 9.45 m
//           Body height of 1.83 m --> starting mark: 10.67 m
// All other starting marks are based on these guidelines!

function startingMark(bodyHeight){
const slope = (10.67 - 9.45) / (1.83 - 1.52)
const freeMember = 9.45 - (slope * 1.52)
const result = slope * bodyHeight + freeMember
return parseFloat(result.toFixed(2))
}

// or

const startingMark = bodyHeight => {
const slope = (10.67 - 9.45)/(1.83 - 1.52);
const freeMember = 9.45 - (slope * 1.52);
const x = slope * bodyHeight + freeMember;
return parseFloat(x.toFixed(2)) 
}

// or 

function startingMark(bodyHeight) {
let a = {x: 1.52, y: 9.45},
  b = {x: 1.83, y: 10.67},
  slope = (b.y - a.y) / (b.x - a.x);
return Math.round((slope * bodyHeight + b.y - slope * b.x) * 100) / 100;
}
              `,
        },
      ],
    },
    {
      title: "Task 3",
      children: [
        {
          title: "Playing with cubes II",
          type: "text",
          description: `
              Hey Codewarrior!
              In the previous kata, you have implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code one (or more) such that one can instantiate an object via it, handling either no arguments or a single integer. 
              Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!    
              The constructor taking no arguments should assign 0 to Cube's Side property.
              `,
          code: `
// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
constructor(side){
this.side = (side !== undefined) ? Math.abs(side) : 0
}
getSide() {
return this.side; 
}
setSide(n) {
this.side = Math.abs(n);
}
}

// or

class Cube {
constructor(side){
this.setSide(side)
}
getSide() {
return this.side; 
}
setSide(n = 0) {
this.side = Math.abs(n);
}
}
              `,
        },
      ],
    },
    {
      title: "Task 4",
      children: [
        {
          title: "Polish alphabet",
          type: "text",
          description: `
              There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
              Your task is to change the letters with diacritics:
              ą -> a,
              ć -> c,
              ę -> e,
              ł -> l,
              ń -> n,
              ó -> o,
              ś -> s,
              ź -> z,
              ż -> z
              and print out the string without the use of the Polish letters.
              For example:
              "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
              `,
          code: `
function correctPolishLetters (string) {
const ArrayDiacriticsLetters = [
{ key: 'ą', value: 'a' },
{ key: 'ć', value: 'c' },
{ key: 'ę', value: 'e' },
{ key: 'ł', value: 'l' },
{ key: 'ń', value: 'n' },
{ key: 'ó', value: 'o' },
{ key: 'ś', value: 's' },
{ key: 'ź', value: 'z' },
{ key: 'ż', value: 'z' }
]

let spreadString = [...string]
let result = []
for(let i = 0; i < string.length; i++){
for(let j = 0; j < ArrayDiacriticsLetters.length; j++){
  if(spreadString[i] === ArrayDiacriticsLetters[j].key){
    result.push(ArrayDiacriticsLetters[j].value)
  }
}
if(!(result[i]) === true){
  result.push(spreadString[i])
} 
}

return result.join('')
}

// or

function correctPolishLetters (str) {
return str
.replace(/ą/g, 'a')
.replace(/ć/g, 'c')
.replace(/ę/g, 'e')
.replace(/ł/g, 'l')
.replace(/ń/g, 'n')
.replace(/ó/g, 'o')
.replace(/ś/g, 's')
.replace(/ź/g, 'z')
.replace(/ż/g, 'z')
}

// or

describe("Tests", () => {
it("test", () => {
assert.strictEqual(correctPolishLetters("Jędrzej Błądziński"), "Jedrzej Bladzinski");
assert.strictEqual(correctPolishLetters("Lech Wałęsa"), "Lech Walesa");
assert.strictEqual(correctPolishLetters("Maria Skłodowska-Curie"), "Maria Sklodowska-Curie");
});
});

// or

const correctPolishLetters = str => {
const diacritics = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};

return str.replace(/[ąćęłńóśźż]/g, match => diacritics[match])
}
              `,
        },
      ],
    },
    {
      title: "Task 5",
      children: [
        {
          title: "Who is going to pay for the wall?",
          type: "text",
          description: `
                Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
                Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is.
              `,
          code: `
function whoIsPaying(name){
const sliceName = name.slice(0, 2)
if(name.length > 2){
return [name, sliceName]
}
return [name]
}

// or 

const whoIsPaying = name => name.length > 2 ? ([name, name.substr(0, 2)]) : [name]
              `,
        },
      ],
    },
    {
      title: "Task 6",
      children: [
        {
          title: "Smallest unused ID",
          type: "text",
          description: `
                Hey awesome programmer!

                You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

                Therefore you need a method, which returns the smallest unused ID for your next new data item...

                Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

                Go on and code some pure awesomeness!
              `,
          code: `
function nextId(ids){
let maxId = Math.max(...ids)
for(let i = 0; i <= maxId; i++){
if(!ids.includes(i)){
  return i
}
}
return maxId + 1
} 

// or 

function nextId(ids){
var x = 0;
while (ids.includes(x)) x++;
return x;
}

// or 

function nextId(ids){
const used = new Set(ids);
for (let i = 0; i <= ids.length; i++) {
  if (!used.has(i)) return i;
}
}
              `,
        },
      ],
    },
    {
      title: "Task 7",
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
const words = lowerStr.match(/\w+/g)
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
    },
    {
      title: "Task 8",
      children: [
        {
          title: "title",
          type: "text",
          description: `
                word
              `,
          code: `
              // code 
              `,
        },
      ],
    },
    {
      title: "Task 9",
      children: [
        {
          title: "title",
          type: "text",
          description: `
                word
              `,
          code: `
              // code 
              `,
        },
      ],
    },
    {
      title: "Task 10",
      children: [
        {
          title: "title",
          type: "text",
          description: `
                word
              `,
          code: `
              // code 
              `,
        },
      ],
    },
    {
      title: "Task 11",
      children: [
        {
          title: "title",
          type: "text",
          description: `
                word
              `,
          code: `
              // code 
              `,
        },
      ],
    },
    {
      title: "Task 12",
      children: [
        {
          title: "title",
          type: "text",
          description: `
                word
              `,
          code: `
              // code 
              `,
        },
      ],
    },
    {
      title: "Task 13",
      children: [
        {
          title: "title",
          type: "text",
          description: `
                word
              `,
          code: `
              // code 
              `,
        },
      ],
    },
    {
      title: "Task 14",
      children: [
        {
          title: "title",
          type: "text",
          description: `
                word
              `,
          code: `
              // code 
              `,
        },
      ],
    },
    {
      title: "Task 15",
      children: [
        {
          title: "title",
          type: "text",
          description: `
                word
              `,
          code: `
              // code 
              `,
        },
      ],
    },
    {
      title: "Task 16",
      children: [
        {
          title: "title",
          type: "text",
          description: `
                word
              `,
          code: `
              // code 
              `,
        },
      ],
    },
  ],
};
