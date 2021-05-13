'use strict';


const Node = require('../node.js')
const kTree = require('../fizz-buzz-tree.js');

describe("K-Tree FizzBuzz testing", () => {
    it('can make an empty K Tree', () => {
        let list = new kTree();
        expect(list.root).toBeDefined();

    })

    let one = new Node(15)
    one.children.push(new Node(4)) 
    one.children.push(new Node(666))
    let brock = new kTree(one)
    const body= {value: 10, children:[{value: 7, children:[{value: 44, children:[]}]}, {value: 33, children:[]}]}
    let mock = new kTree(body)

 
    it('can return a Fizzed/Buzzed version of the tree', () => {
        expect(mock.FizzBuzzTree()).toEqual({root: {value: "Buzz", children:[{value: 7, children:[{value: 44, children:[]}]}, {value: "Fizz", children:[]}]}});
        expect(brock.FizzBuzzTree()).toEqual({root: {value: "FizzBuzz", children:[{value: 4, children:[]}, {value: "Fizz", children:[]}]}});
    })


})