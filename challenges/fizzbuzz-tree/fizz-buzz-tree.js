'use strict';

const Node = require('./node')

class kTree {

    constructor(root = null){
        this.root = root
    }

    buzzer(val){
        if (+val % 3 === 0 && val % 5 === 0){
            return 'Fizzbuzz'
        }
        if(+val % 3 === 0){
            return "Fizz"
        }
        if(+val % 5 === 0){
            return "Buzz"
        }
        return +val
    }

    FizzBuzzTree(){ 
        let newTree = JSON.parse(JSON.stringify(this))
        let _walk = node => {
            node.value = this.buzzer(node.value);
            if (node.children && node.children.length>0){
                node.children.forEach(el => {
                return _walk(el)
            })
            }
            
        }
        _walk(newTree.root)
        return newTree
        

    }


}



module.exports = kTree;

