/**
 * Function to merge sort the values in an array
 * using recursion
 *
 * @param {Array}
 * @returns an array with the sorted values from the
 * original array
 */

const mergeSort = function (arr) {
  // Guard clauses
  if (arr.length === 0)
    return 'Invalid input: Please provide a non-empty array';
  if (arr.length < 2) return arr;

  const halfPoint = Math.floor(arr.length / 2);

  //  Separate array into left and right
  const arr1 = mergeSort(arr.slice(0, halfPoint));
  const arr2 = mergeSort(arr.slice(halfPoint));

  return merge(arr1, arr2);
};

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;

  let arr3 = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr3[k++] = arr1[i++];
    }
    if (arr2[j] < arr1[i]) {
      arr3[k++] = arr2[j++];
    }
  }

  for (; i < arr1.length; i++) arr3[k++] = arr1[i];
  for (; j < arr2.length; j++) arr3[k++] = arr2[j];

  return arr3;
}

console.log(mergeSort([1, 4, 3, 2]));
console.log(mergeSort([1, 4, 3, 2, 5]));
console.log(
  mergeSort([
    8, 5, 4, 8, 7, 6, 3, 2, 3, 5, 8, 9, 6, 4, 3, 24, 6, 7, 65, 4, 3, 2, 32, 1,
    12, 4, 1,
  ]),
);
console.log(mergeSort([30, 40, 50, 60, 70]));
console.log(mergeSort([-30, -40, -50, -60, -70]));
