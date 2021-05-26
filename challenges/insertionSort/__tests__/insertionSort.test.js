

'use strict';

const insertionSort = require('../insertionSort.js'); 

describe("Insertion Sort Testing", () => {

    it('can return the appropriate array', () => {

        // let test1= [20,18,12,8,5,-2]
        // let test2 = [5,12,7,5,5,7]
        // let test3 = [2,3,5,7,13,11]

        let realTest = [8,4,23,42,16,15]

        // let result = insertionSort(test1)
        // let resalt = insertionSort(test2)
        // let resolt = insertionSort(test3)
        let wesult = insertionSort(realTest)
        
        // expect(result).toEqual([-2,5,8,12,18,20]);
        // expect(resalt).toEqual([5,5,5,7,7,12]);
        // expect(resolt).toEqual([2,3,5,7,11,13]);
        expect(wesult).toEqual([4,8,15,16,23,42]);
    })

   

})