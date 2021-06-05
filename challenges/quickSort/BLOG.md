

### Quick Sort


## [8,4,23,42,16,15]

EXAMPLE:

QS = ([8,4,23,42,16,15], 0, 5) =>{
    //check that it is ordered correctly
    left < right //true
    position = Partition([8,4,23,42,16,15], 0, arr.length-1)
                    
                    !!) pivot= Math.floor(arr.length/2) //42
                        low = -1
                        for (let i=left;i<=right; i++){
                            if (arr[0] < arr[pivot]){
                                low++ //low=1
                                Swap([8,4,23,42,16,15], i, low)

                                        !!!) let temp = arr[i] //8
                                            arr[0] = arr[low]
                                            arr[low] = arr[0]
                            }
                            if (1 < 15){
                                low++ //low=2
                                Swap([8,4,23,42,16,15], 2, 1)

                                        !!!) let temp = arr[i] //4
                                            arr[1] = arr[]
                                            arr[low] = arr[0]
                            }

                        }
}