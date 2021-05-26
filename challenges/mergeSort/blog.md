### Merge Sort

## Psuedo

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



## EXAMPLE MergeSort

# [8,4,23,42,16,15]

0) n = arr.length (6)

1) mid = 3, left=[8,4,23], right=[42,16,15]
        MergeSort(left ([8,4,23])) 
        L.0) n = 3
        L.1)mid=1.5, left=[8,4], right=[23]
            MergeSort(left ([8,4]))
            L.L.0) n=2
            L.L.1) mid=1 left[8], right=[4]
                MergeSort(left) <= 1 //break
                MergeSort(right) <= 1 //break>
                Merge(left(8),right(4), arr([8,4]))
                    i) i=0,j=0,k=0
                    ii) WHILE (i< left.length(1) && j < right.length(1))
                        a) arr[k] = 4     //[4]
                        b)j++
                        c)k++
                        d) arr=[...arr, 8]         //left=[4, 8]
            MergeSort(right([23]))
            L.R.0)n=1
            L.R.1) mid=.5, left=[23], right=[]
                MergeSort(left)
                MergeSort(right)
                Merge(left(23), right([]), arr([23]))
                    i) i=0,j=0,k=0
                    ii) arr = [...arr, left]      //right=[23]
            Merge(left[4,8], right[23], arr)
                i) i=0,j=0,k=0
                ii)While (i< left.length(2) && j < right.length(1))
                    a) arr[0] = 4
                    b) i++
                    c) k++
                   While (i< left.length(2) && j < right.length(1))
                    a) arr[1] = 8
                    b) i++
                    c) k++
                    d)arr=[...arr, 23]                   // combined = [4,8,23]
        MergeSort(right ([42,16,15]))
        R.0) n=3
        R.1) mid=1.5, left=[42,16], right=[15]
            MergeSort(left ([42,16]))
            R.L.0) n=2
            R.L.1) mid=1, left=[42], right=[16]
                MergeSort(left)
                MergeSort(right)
                Merge(left(42), right(16), arr ([42,16]))
                    i) i=0,j=0,k=0
                    ii) WHILE (i< left.length(1) && j < right.length(1))
                        a) arr[0] = right[j] //arr=[16]
                        b) j++
                        c)k++
                        d) arr=[...arr, left(42)]        // left = [16,42]
            MergeSort(right([15]))
            R.R.0) n=1
            R.R.1) mid=.5, left=[15], right=[]
                MergeSort(left)
                MergeSort(right)
                Merge(left([15]), righ([]), arr([15]))
                    i) i=0,j=0,k=0
                    ii) arr = [...arr, left]             //right=[15]
            Merge(left([16,42]), right([15]), arr([42,16,15]))
                i) i=0,j=0,k=0
                ii)WHILE (i< left.length(2) && j < right.length(1))
                    a) arr[0] = 15
                    b) j++
                    c) k++
                    d) arr = [...arr, left([16,42])]    // combined = [15,16,42]

        Merge(left([4,8,23]), right([15,16,42]), arr)
            i) i=0,j=0,k=0
            ii) While (i< left.length(3) && j < right.length(3))
                a) arr[0] = 4
                b) i++
                c) k++
                While (i< left.length(3) && j < right.length(3))
                a) arr[1] = 8
                b) i++
                c) k++
                While (i< left.length(3) && j < right.length(3))
                a) arr[2] = 15
                b) j++
                c) k++
                While (i(3)< left.length(3) && j < right.length(3))
                a) arr[3] = 16
                b) j++
                c) k++
                While (i(3)< left.length(3) && j < right.length(3))
                a) arr[4] = 23
                b) i++
                c) k++
                d) arr=[...arr, right] 

    return that sorted array [4,8,15,16,32,42]