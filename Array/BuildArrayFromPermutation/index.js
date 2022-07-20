// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

var buildArray = function (nums) {
  let newArray = []; //  0(n)

  for (let i = 0; i < nums.length; i++) {//0(n)
    let value = nums[nums[i]]; // 0(1)
    newArray.push(value); // 0(1)
  }

  return newArray;
};


// Time Complexity: O(n)
// Space Complexity: O(n)