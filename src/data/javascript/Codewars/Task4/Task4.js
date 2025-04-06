export const Task_4 = {
  title: "Task 4",
  id: 1003,
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
};
