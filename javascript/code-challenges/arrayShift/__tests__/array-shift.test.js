'use strict'


const testee = require('../array-shift.js')
// const supertest = require('supertest'); // mock request engine
// const mockRequest = supertest(testee); // start and initialize our server in memory (for testing)


describe("testing functions", () => {

    it ('should insert a thingy in the middle', ()=>{
        expect(testee.insertShiftArray([2,3,4,5,6,7], 42)).toStrictEqual([2,3,4,42,5,6,7])
    })

    it ('should insert a thingy in the middle', ()=>{
        expect(testee.deleteShiftArray([2,3,4,42,5,6,7], 42)).toStrictEqual([2,3,4,5,6,7])

    })


})