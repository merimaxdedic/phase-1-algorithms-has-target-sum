function hasTargetSum(arr, target) {
  const numMap = {};

  for (let num of arr) {
    if (numMap[target - num]) {
      return true;
    }
    numMap[num] = true;
  }

  return false;
}
// 1. Create an empty object called numMap.
// 2. Iterate over each number num in the array.
// - Check if target - num exists as a key in numMap.
// - If it does, return true.
// - Store num as a key in numMap.
// 3. If no two numbers add up to the target, return false.

// 1.hasTargetSum([1, 2, 3, 4, 5], 9) should true because 4 + 5 equals 9.
// 2. hasTargetSum([1, 2, 3, 4, 5], 10) should return false because no two numbers in the array add up to 10.
// 3. hasTargetSum([], 5) should return false because the array is empty.


if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
