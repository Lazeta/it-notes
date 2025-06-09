export const SortFunctions = {
  id: 164,
  title: "Sort functions",
  children: [
    {
      title: "Сортировка пузырьком классическим методом",
      type: "text",
      description: `
            <p>Два вложенных цикла: внешний считает количество проходов, внутренний — сравнивает элементы.</p>
            <p>Всегда делает строго фиксированное количество проходов, даже если массив уже отсортирован.</p>
            <p>Сложность алгоритма О(n^2)</p>
          `,
      code: `
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
          `,
    },
    {
      title: "Сортировка пузырьком do...while + swapped",
      type: "text",
      description: `
            <p>Использует цикл do...while: внешний цикл продолжается, пока хотя бы одна пара была поменяна местами.</p>
            <p>Внутренний цикл один (по всем элементам).</p>
            <p>Если за проход не было ни одной перестановки (swapped остался false), сортировка останавливается раньше, чем в классическом варианте.</p>
            <p>Сложность алгоритма О(n^2)</p>
          `,
      code: `
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
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
