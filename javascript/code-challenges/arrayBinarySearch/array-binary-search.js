'use string'

test1 = [0,1,2,3,4,5,6,7,8,9,10]

test2 = [2,4,6,8,12,22,33,44,52,64,78,87,88,99, 100]

test3 = []

function binarySearch(arr, el){

    if (el > arr[arr.length-1] || el<arr[0]){return -1}

    let leftPos = 0
    let rightPos = arr.length - 1
    let midPos = Math.floor(rightPos/2)
    let result = -1

    function innerSearch(array, ele,  left, right, middle){
        //quick check
        if (array[middle] === ele) {
            result = middle

            return 
        }
        if (array[left] === ele){
          result = left
          return 
        }
        if (array[right] === ele){
          result = right
          return 
        }
        //err
        if (middle === left || middle === right || middle - 1 < left || middle + 1 > right || left > right){

            return;
        }



        if (array[middle] > ele) {

            let newRight = middle - 1
            let newMiddle = left + Math.floor((newRight - left) / 2) 
            return innerSearch(arr, ele, left, newRight, newMiddle)
        } 

        if (arr[middle] < ele){

            let newLeft = middle + 1
            let newMiddle = newLeft + Math.floor((right - newLeft)/2) 
            return innerSearch(arr, ele, newLeft, right, newMiddle )
        }
        
        console.log("end?")
    }
    innerSearch(arr, el, leftPos, rightPos, midPos)
    return result

}

//happy PATH
console.log("A", binarySearch(test1, 8)) //exp 8
console.log("B", binarySearch(test2, 6)) // exp 2

// bad PATH
console.log("C", binarySearch(test2, 47)) //exp -1    VVV
console.log("D", binarySearch(test1, 15))

//edge
console.log("E", binarySearch(test3, 7))