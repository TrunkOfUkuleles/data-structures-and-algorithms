'use strict';



const mb = require('../multi-bracket-validation.js');



describe("Multi-bracket Validation Test", () => {

    let test1 = '{}';
    let test2 = '[({}]';
    let test3 = '{}(){}';
    let test4 = '{(dsfdsf)';
    let test5 = '{}{Code}[Fellows](())';

    it('should return a boolean', () => {
        let test = mb('()')
        console.log("TEST:   ", test)
        expect(typeof test).toBe('boolean');
    })

    it('should return true for cases where the brackets are balanced', () => {
        let a = mb(test1);
        let b = mb(test3)
        expect(a).toBe(true)
        expect(b).toBe(true)
        
    })

    it('should return false for cases where the bracketsin the string are not balanced', () => {
        let c = mb(test2)
        let d = mb(test4)
        expect(c).toBe(false)
        expect(d).toBe(false)
    })

    it('Should ignore non bracket inputs', () => {
        let f = mb(test5)
        expect(f).toBe(true)
    })
   

    });