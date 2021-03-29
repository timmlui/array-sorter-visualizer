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

export default function heapSort(arr) {
    let sortStates = [{arr: [...arr]}];
    const n = arr.length;

    // Heapify subtree roooted at index i
    function heapify(n, i) {
        let largest = i; // Initialize largest as root
        // Index of left and right child of root
        const left = 2*i + 1;
        const right = 2*i + 2;
        
        // See if left child of root exists and is greater than root
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        
        // See if right child of root exists and is greater than current largest
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        
        // Change root if needed
        if (largest !== i) {
            swap(i, largest);
            // Heapify down this subtree
            heapify(n, largest);
        }
    }

    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    // Build a maxheap
    for (let i=Math.floor(n/2) - 1; i>=0; i--) {
        heapify(n, i);   
    }
    
    // One by one extract elements
    for (let i=n-1; i>0; i--) {
        swap(i, 0); // swap first and last 
        heapify(i, 0); // heapify subtree (excluding all swapped nodes)
    }

    const arrValue = { arr };
    sortStates.push(arrValue);
    console.log('sortStates', sortStates)
    
    return { sortedArr: arr, sortStates };
}