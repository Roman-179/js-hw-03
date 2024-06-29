const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];
const arrs = arr1.concat(arr2, arr3);
let smallest = arrs[0];

for (const arr of arrs) {
  if (arr < smallest) {
    smallest = arr;
  }
}
console.log(smallest);
