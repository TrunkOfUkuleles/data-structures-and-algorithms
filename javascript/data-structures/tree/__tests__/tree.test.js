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
    let brock = new BinarySearchTree(one)
    const body= {value: 10, left:{value: 7, left:null, right:{value:44 , left:null, right:null}}, right:{value:33 , left:null, right:null}}
    let mock = new BinaryTree(body)

 
    it('Can successfully return a collection from a preorder traversal', () => {
        expect(mock.preOrder()).toEqual([10, 7, 44, 33]);
    })

    it('Can successfully return a collection from a inorder traversal', () => {
        expect(mock.inOrder()).toEqual([7, 44, 10, 33]);
    })

    it('Can successfully return a collection from a postorder traversal', () => {
        expect(mock.postOrder()).toEqual([44, 7, 33, 10]);
    })

   it('can add to the tree', () => {
       brock.add(30)
       expect(brock.root.value).toEqual(44);
       expect(brock.preOrder()).toEqual([ 44, 4, 30, 666 ]);

       brock.add(400)
       expect(brock.preOrder()).toEqual([ 44, 4, 30, 666, 400 ]);
    })

    it('can see if a tree contains a val', () => {
        expect(brock.contains(30)).toBe(true);
        expect(brock.contains(200)).toBe(false);
     })

})