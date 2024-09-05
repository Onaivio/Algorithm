# Two Sum Algorithm

This project demonstrates a solution to the popular "Two Sum" problem. The goal is to find two numbers in an array that add up to a given target value. The solution returns the indices of these two numbers.

## Problem Statement

Given an array of integers and a target value, find two numbers in the array whose sum equals the target. You should return the indices of these two numbers. Assume that each input will have exactly one solution, and you cannot use the same element twice.

## Example

```javascript
const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target)); // Output: [0, 1]
```

In this example, `arr[0] + arr[1] = 2 + 7 = 9`, which equals the target value, so the function returns `[0, 1]`.

## Solution Approach

We solve this problem using a **hash map** (also known as an object in JavaScript) to store the indices of numbers as we iterate through the array.

### Steps:

1. **Initialize a hash map (object)** to store numbers as keys and their indices as values.
2. **Loop through the array**:
   - For each number, calculate the "needed number" (i.e., `target - currentNumber`).
   - Check if the "needed number" exists in the hash map. If it does, return the indices of the current number and the "needed number".
   - If not, add the current number and its index to the hash map.
3. **Return the indices** of the two numbers that sum up to the target.

### Code Implementation

```javascript
function twoSum(arr: number[], target: number): number[] {
    const indicesMap: { [key: number]: number } = {}; // Hash map to store the indices of the numbers
    
    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const neededNumber = target - currentNumber;
        // Check if the needed number is in the map
        if (neededNumber in indicesMap) {
            return [indicesMap[neededNumber], i]; // Return indices of the two numbers
        }
        // Store the current number with its index
        indicesMap[currentNumber] = i;
    }
    // Return an empty array if no solution
    return [];
}
```

### Time Complexity

- The time complexity of this solution is **O(n)**, where `n` is the length of the array.
- We loop through the array once, and each lookup or insert operation in the hash map takes constant time, O(1).

### Space Complexity

- The space complexity is **O(n)** because we store up to `n` elements in the hash map.

---
