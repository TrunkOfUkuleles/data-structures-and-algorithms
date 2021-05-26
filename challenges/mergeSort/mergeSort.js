



const merge = (l,r,a) => {
    let i = 0
    let j = 0
    let k = 0
    while(i < l.length && j < r.length){
        if (l[i] <= r[j]){
            a[k] = l[i]
            i+=1
        }else if (l[i] > r[j]){
            a[k] = r[j]
            j+=1
        }
        k+=1
    }
    if (i >= l.length){
        let leftover = r.slice(j)
        a.splice(k, a.length-k, ...leftover)
    }else{
        let leftover = l.slice(i)
        a.splice(k, a.length-k, ...leftover)
    }
}


function mergeSort (arr){
    let n = arr.length

    if (n>1) {
        let mid = Math.floor(n/2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        mergeSort(left)
        mergeSort(right)
        merge(left, right, arr)
    }
    return arr

}

module.exports = mergeSort;