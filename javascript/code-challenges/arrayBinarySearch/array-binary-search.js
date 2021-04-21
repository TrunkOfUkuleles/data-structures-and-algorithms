'use string'

test1 = [0,1,2,3,4,5,6,7,8,9,10]

test2 = [2,4,6,8,12,22,33,44,52,64,78,87,88,99, 100]

test3 = []

function binarySearch(arr, el){

    if (el > arr[arr.length+1] || el<arr[0]){return -1}

    let left = 0
    let right = arr.length + 1

    let result = -1

    function innerSearch(array, el,  left, right, mid=Math.floor(arr.length/2)){
        if (array[mid] === el) {
            result = mid
            return;
        }
        if (mid === left || mid === right || mid-1 < left || mid+1 > right || left > right){
            return;
        }



        if (arr[mid] > el){
            right = mid-1
            middle = left + Math.floor((right - left)/2) 
            return innerSearch(arr, el, left, right, middle )
        }
        if (arr[mid] < el){
            left = mid+1
            middle = left + Math.floor((right - left)/2) 
            return innerSearch(arr, el, left, right, middle )
        }
        
        
    }
    
    return result

}

//happy PATH
console.log(binarySearch(test1, 8))
console.log(binarySearch(test2, 6))
console.log(binarySearch(test2, 47))

// bad PATH
console.log(binarySearch(test1, 15))

//edge
console.log(binarySearch(test3, 7))