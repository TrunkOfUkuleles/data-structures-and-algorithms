'use strict';

const Node = require('./node.js')


class Queue {
    constructor(value){
        this.front = null,

    }

    enqueue(value){
    let newNode = new Node(value);
    if (!this.front) {
        this.front = newNode;
        this.back = newNode;
    }else{
        this.back.next = newNode
        this.back = this.back.next
    }
        return this
    }

    dequeue(){
        let result;
        if (!this.front) {
            return console.error("womp");
        }else{
            result = this.front.value
            this.front = this.front.next;
        }
            return result
    }

    peek(){
        let result;
        if (!this.front) {
            return console.error("womp");
        }else{
            result = this.front.next.value
        }
        return result
    }

    isEmpty(){
        this.front.value ? true : false
    }
}

module.exports = Queue;