/**
 * Bubble Sort
 * 
 * Time Complexity: O(n^2)
 * Algorithm: Compare pairs (j and j+1) of values, swapping if necessary for the larger value in ascending 
 * order. Iterate for the entire array (up to n-1 index). Repeat until all sorted, and shrinking each iteration
 * by i since there will be i+1 already sorted elements. 
 * 
 * @param {number[]} arr - array of numbers to be sorted
 */

export default function bubbleSort(arr) {
    let sortStates = [{arr: [...arr]}];
    let flag = false;
    let currMax = 0;

    for (let i = 0, ii = arr.length - 1; i < ii; i++) {
        flag = true;
        currMax = 0;
        for (let j = 0, jj = arr.length - i - 1; j < jj; j++) {
            currMax = Math.max(currMax, arr[j], arr[j+1])

            // Obj to track this iteration's info: which values are being compared and whether they swapped
            const arrValue = {
                arr: [...arr],
                compareA: arr[j],
                compareB: arr[j+1],
                swapped: false,
                // Track when highest value of this iteration is placed at its end (sorted)
                currMax: jj - 1 === j ? currMax : 0
            };

            if (arr[j] > arr[j+1]) {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                flag = false;

                arrValue.arr = [...arr];
                arrValue.swapped = true;
            }
            sortStates = ([...sortStates, arrValue]);
        }
        if (flag) {
            break;
        }
    }
    console.log('sortStates', sortStates)
    
    return { sortedArr: arr, sortStates };
}