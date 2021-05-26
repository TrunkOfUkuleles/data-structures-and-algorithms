# Challenge Summary
translate:   

               ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

## Whiteboard Process
<!-- Embedded whiteboard image -->
    [SEE BLOG](/blog.md)
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

    after going through step by step, I started on building out the logic. I am glad I had a basic undserstanding as the recursive element made it hard to wrap my head around. Also the sense that I was supposed to mutate the arrays as I went. 

## Solution
<!-- Show how to run your code, and examples of it in action -->

split the array down into managable sizes, reorganizeing along the way. by calling the same function for both sides, you allow the array to be altered so that any changes to ordering can happen from the deepest sections (with 1-2 options)and alter them to be the right order by the time the original call comes back to finish execuuting.


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
                
