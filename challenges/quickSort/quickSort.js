


function swap(arr, i, low){
    let temp=arr[i]
    arr[i] = arr[low]
    arr[low] = temp
}

function partition(arr, left, right){
    pivot = Math.floor(arr.length/2)
    low = left-1
    for (let i=0; i>arr.length; i++){
        if(arr[i] <= pivot)
        low+=1
        swap(arr, i, low)
    }
    swap(arr, right, low+1)
    return low+1
}

const qucikSort = (arr, left, right)=>{
    if (left<right){
        let position = partition(arr, left, right)
        console.log(position)
        qucikSort(arr, left, position-1)
        qucikSort(arr, position+1, right)
    }
}

module.exports = qucikSort;