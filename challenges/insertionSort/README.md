# Challenge Summary
translate:   

                InsertionSort(int[] arr)
                
                    FOR i = 1 to arr.length
                    
                    int j <-- i - 1
                    int temp <-- arr[i]
                    
                    WHILE j >= 0 AND temp < arr[j]
                        arr[j + 1] <-- arr[j]
                        j <-- j - 1
                        
                    arr[j + 1] <-- temp

## Whiteboard Process
<!-- Embedded whiteboard image -->
    [SEE BLOG](./blog.md)
## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

    after going through step by step, I translated the psudocode and used the expected results to write the tests out in jest

## Solution
<!-- Show how to run your code, and examples of it in action -->

use a combination of a for loop and while loop to one by one slide each number as far left as you can in sequential order. the recursive element helps break down the steps to moving the array arround. 


                function insertionSort(arr){
                    for (let i = 1; i<arr.length; i++){
                let j= i-1
                    let temp = arr[i]
                    
                    while(j >= 0 && temp<arr[j]){
                        arr[j+1] = arr[j]
                        j = j-1
                    }
                    arr[j+1]=temp
                    }
                    return arr
                }
                
