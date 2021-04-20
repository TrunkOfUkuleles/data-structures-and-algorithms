'use strict'


const { insertShiftArray, deleteShiftArray } = require('../array-shift.js')

// const supertest = require('supertest'); // mock request engine
// const mockRequest = supertest(testee); // start and initialize our server in memory (for testing)


describe("testing functions", () => {

    // it('should be an array', (inp)=>{
    //     expect(typeof inp).toStrictEqual('array')
    // })

    it ('should insert a thingy in the middle', ()=>{
        expect(insertShiftArray([2,3,4,5,6,7], 42)).toBe([2,3,4,42,5,6,7])
    })

    it ('should delete a thingy in the middle', ()=>{
        expect(deleteShiftArray([2,3,4,42,5,6,7], 42)).toBe([2,3,4,5,6,7])

    })

})