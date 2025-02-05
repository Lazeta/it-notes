export const SortFunctions = {
  id: 241,
  title: "Sort functions",
  children: [
    {
      title: "Сортировка пузырьком",
      type: "text",
      description: `
            <p>Алгоритм сортировки пузырьком сравнивает пары соседних элементов и меняет их местами, если порядок неправильный.</p>
            <p>Задача: Реализовать сортировку массива с использованием алгоритма пузырька.</p>
          `,
      code: `
function bubbleSort(arr) {
const n = arr.length;
let swapped;
do {
swapped = false;
for (let i = 0; i < n - 1; i++) {
if (arr[i] > arr[i + 1]) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // обмен элементов
  swapped = true;
  }
}
} while (swapped);
return arr;
}
          `,
    },
  ],
};
