'use strict';

const Stack = require('./stack.js');

class PseudoQueue{
    constructor(){
        this.next1 = 0;
        this.next2 = 0;
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(value){
        this.stack1.push(value)
        this.stack2.push(value)
    }

    dequeue(){
        let result = [];
        result.push(this.stack1[this.next1])
        delete this.stack1[this.next1]
        this.next1++
        result.push(this.stack2[this.next2])
        delete this.stack2[this.next2]
        this.next2++
        return result
    }

}

module.exports = PseudoQueue