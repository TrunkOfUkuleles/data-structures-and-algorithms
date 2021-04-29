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
        let newNode = new Node(value);
        let result;
        if (!this.top) {
            return console.error("womp");
        }else{
            result = this.top.next.value
        }
            return result
    }

    isEmpty(){
        this.top.value ? true : false
    }
}

module.exports = Stack;
