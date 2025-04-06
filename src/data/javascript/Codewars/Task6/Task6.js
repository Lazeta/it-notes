export const Task_6 = {
  title: "Task 6",
  id: 1005,
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
};
