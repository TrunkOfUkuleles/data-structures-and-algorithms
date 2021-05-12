'use strict';


const Node = require('../node.js')
const { BinaryTree  } = require('../tree.js');

describe("printing a breadth search", () => {
    it('can make an empty Binary Tree', () => {
        let list = new BinaryTree();
        expect(list.root).toBeDefined();

    })

    let one = new Node(44)
    one.left = new Node(4)
    one.right = new Node(666)
    let brock = new BinaryTree(one)
    const body= {value: 10, left:{value: 7, left:null, right:{value:44 , left:null, right:null}}, right:{value:33 , left:null, right:null}}
    let mock = new BinaryTree(body)

 
    it('print a example of how a breadth first traversal method would look at a tree', () => {
        expect(mock.printBreadth()).toEqual([10,7,33,44]);
        expect(brock.printBreadth()).toEqual([44,4,666]);
    })


})