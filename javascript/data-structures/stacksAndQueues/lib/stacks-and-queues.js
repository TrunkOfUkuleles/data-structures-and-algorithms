'use strict';

module.exports = {

    class Node {
    constructor (value){
        this.value = value, 
        this.next = null;
    }
}


class Stack {
    constructor(){
        this.top = null,
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

class Queue {
    constructor(value){
        this.front = null,
        this.back = null
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
}
