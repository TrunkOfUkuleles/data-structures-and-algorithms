'use strict';

const Node = require('./node.js')


class Stack {
    constructor(){
        this.top = null;
    }

    push(value){
    let newNode = new Node(value);
    if (!this.top) {
        this.top = newNode;
    }else{
        newNode.next = this.top;
        this.top = newNode;
    }
        return this
    }

    pop(){
        let result;
        if (!this.top) {
            return console.error("womp");
        }else{
            result = this.top.value
            this.top = this.top.next;
        }
            return result
    }

    peek(){
        let result;
        if (!this.top) {
            return "EMPTY";
        }else{
        return this.top.next.value
        }
    }

    isEmpty(){
        this.top.value ? true : false
    }
}

module.exports = Stack;
