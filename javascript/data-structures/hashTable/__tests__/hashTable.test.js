'use strict';


const HashMap = require('../hashtable.js')
// import HashMap from '../hashtable.js'



describe("Hash Table Testing", () => {
    it('can make a hash table', () => {
        let table = new HashMap(10);
        expect(table).toBeDefined();
    })

    const testSet = new HashMap(10)
    testSet.set('julien', 'edwards');
    testSet.set('jjjmcool', 'edwards');
    testSet.set('fergie', 'edwards');
    testSet.set('whatsa', 'edwards');
    testSet.set('pon', 'edwards');
    testSet.set('julien', 'bedwards');

 
    it('can populate the hash table', () => {
        expect(testSet.contains('julien')).toBe(true);
        expect(testSet.contains('fergie')).toBe(true);
        expect(testSet.contains('please steppyy')).toBe(false);
    })

    it('can get a LL from the table without collision', () => {
        expect(testSet.get('julien')).toBeDefined();
        expect(testSet.get('pon')).toBeDefined();
        expect(testSet.get('pon').head.value).toEqual(['pon', 'edwards'])

        expect(testSet.get('please steppyy')).toEqual("Not Found")


    })


})