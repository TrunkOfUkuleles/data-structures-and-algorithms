'use strict';


const Node = require('../node.js')
const kTree = require('../fizz-buzz-tree.js');

describe("Stacks and Queues Testing", () => {
    it('can make an empty Binary Tree', () => {
        let list = new kTree();
        expect(list.root).toBeDefined();

    })

    let one = new Node(44)
    one.left = new Node(4)
    one.right = new Node(666)
    let brock = new kTree(one)
    const body= {value: 10, left:{value: 7, left:null, right:{value: 44 , left: null, right: null}}, right:{value: 33, left: null, right: null}}
    let mock = new kTree(body)

 
    it('can return a Fizzed/Buzzed version of the tree', () => {
        expect(mock.FizzBuzzTree()).toEqual({root: {value: 'Buzz', left:{value: 7, left:null, right:{value:44 , left:null, right:null}}, right:{value:"Fizz" , left:null, right:null}}});
        expect(brock.FizzBuzzTree()).toEqual({value: 44, left:{value: 4, left:null, right:null}, right:{value:"Fizz" , left:null, right:null}});
    })


})