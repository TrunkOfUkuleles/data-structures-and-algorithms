

'use strict';

const quickSort = require('../quickSort.js'); 

describe("Insertion Sort Testing", () => {

    it('can return the appropriate array', () => {

        // let test1= [20,18,12,8,5,-2]
        // let test2 = [5,12,7,5,5,7]
        // let test3 = [2,3,5,7,13,11]

        let realTest = [8,4,23,42,16,15]

        // let result = mergeSort(test1)
        // let resalt = mergeSort(test2)
        // let resolt = mergeSort(test3)
        let wesult = quickSort(realTest, 0, arr.length-1)
        
        // expect(result).toEqual([-2,5,8,12,18,20]);
        // expect(resalt).toEqual([5,5,5,7,7,12]);
        // expect(resolt).toEqual([2,3,5,7,11,13]);
        expect(wesult).toEqual([4,8,15,16,23,42]);
    })

   

})