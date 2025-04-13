export const Task_1 = {
  title: "Task 1",
  id: 1000,
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
};
