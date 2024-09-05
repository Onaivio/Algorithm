function twoSum(arr: number[], target: number): number[] {
    const indicesMap: { [key: number]: number } = {}; // Hash map to store the indices of the numbers
    
    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];
        const neededNumber = target - currentNumber;
        // Check if the neededNumber is in the map
        if (neededNumber in indicesMap) {
            return [indicesMap[neededNumber], i]; // indices of the two numbers
        }
        // current number with its index
        indicesMap[currentNumber] = i;
    }
    // Return an empty array if no solution 
    return [];
}

// Example usage:
const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target)); // Output: [0, 1]
