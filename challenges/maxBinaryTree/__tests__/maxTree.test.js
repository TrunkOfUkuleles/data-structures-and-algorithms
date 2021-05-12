'use strict';


const Node = require('../node.js')
const { BinaryTree , BinarySearchTree } = require('../tree.js');

describe("Stacks and Queues Testing", () => {
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

 
    it('can return the max value in a tree', () => {
        expect(mock.findMaximumValue()).toEqual(44);
        expect(brock.findMaximumValue()).toEqual(666);
    })


})