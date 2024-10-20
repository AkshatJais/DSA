// Binary Search in O(n) - Linear Search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr = [1, 4, 6, 8, 11, 14, 19, 23, 27, 33];
let target = 23;
console.log("O(n) - Linear Search:", linearSearch(arr, target));  // Output: Index of the target

// Binary Search in  O(log n) - Binary Search

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log("O(log n) - Binary Search:", binarySearch(arr, target));  // Output: Index of the target

// Binary Search in  O(n^2) - Binary Search with Nested Looops

function quadraticBinarySearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {  // This nested loop creates O(n^2)
            let low = 0;
            let high = arr.length - 1;
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);

                if (arr[mid] === target) {
                    return mid;
                } else if (arr[mid] < target) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
    }
    return -1;
}

console.log("O(n^2) - Binary Search:", quadraticBinarySearch(arr, target));  // Output: Index of the target

// Binary Search in O(n^3) - Binary Search with Triple Nested Loops

function cubicBinarySearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {  // Adding another loop to create O(n^3)
                let low = 0;
                let high = arr.length - 1;
                while (low <= high) {
                    let mid = Math.floor((low + high) / 2);

                    if (arr[mid] === target) {
                        return mid;
                    } else if (arr[mid] < target) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
            }
        }
    }
    return -1;
}

console.log("O(n^3) - Binary Search:", cubicBinarySearch(arr, target));  // Output: Index of the target
