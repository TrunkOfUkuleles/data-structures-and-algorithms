'use strict';

const Node = require('./node')

class BinaryTree {

    constructor(root = null){
        this.root = root
    }

    preOrder(){
        if (this.root===null){return 'Empty'}
        let result = [];
        let _walk = node => {
            result.push(node.value)
            if (node.left) _walk(node.left)
            if(node.right) _walk(node.right)
        }
        _walk(this.root)
        return result
    }

    inOrder(){
        if (this.root===null){return 'Empty'}
        let result = [];
        let _walk = node => {            
            if (node.left) _walk(node.left)
            result.push(node.value)
            if(node.right) _walk(node.right)
        }
        _walk(this.root)
        return result
    }

    postOrder(){
        if (this.root===null){return 'Empty'}
        let result = [];
        let _walk = node => {
            if (node.left) _walk(node.left)
            if(node.right) _walk(node.right)
            result.push(node.value)
        }
        _walk(this.root)
        return result
    }

    findMaximumValue(){
        let large;
        console.log('max', large)
        let _walker = node => {
           if (large === undefined || node.value >large ){
               large = node.value
           if (node.left) _walker(node.left)
           if(node.right) _walker(node.right)
        }
        _walker(this.root)
        return large
   }

}
}
class BinarySearchTree {

    constructor(root = null){
        this.root = root
    }

    preOrder(){
        if (this.root===null){return 'Empty'}
        let result = [];
        let _walk = node => {
            result.push(node.value)
            if (node.left) _walk(node.left)
            if(node.right) _walk(node.right)
        }
        _walk(this.root)
        return result
    }

    inOrder(){
        if (this.root===null){return 'Empty'}
        let result = [];
        let _walk = node => {            
            if (node.left) _walk(node.left)
            result.push(node.value)
            if(node.right) _walk(node.right)
        }
        _walk(this.root)
        return result
    }

    postOrder(){
        if (this.root===null){return 'Empty'}
        let result = [];
        let _walk = node => {
            if (node.left) _walk(node.left)
            if(node.right) _walk(node.right)
            result.push(node.value)
        }
        _walk(this.root)
        return result
    }

    add(val, track=this.root){
        if (track.value && val>track.value){
             if(track.right===null){
                 track.right = new Node(val)
                 return track.right
             }
             this.add(val, track.right)
        }
        if (track.value && val<=track.value){
            if(track.left===null){
                track.left = new Node(val)
                return track.left
            }
            this.add(val, track.left)
       }
    }

    contains(val){
        let flag = false
        let _track = node => {
            if (node.left) _track(node.left)
            if(node.right) _track(node.right)
            if (val === node.value){flag = true}
        }
        _track(this.root)
        return flag;
    }


}

module.exports = {BinaryTree , BinarySearchTree};

