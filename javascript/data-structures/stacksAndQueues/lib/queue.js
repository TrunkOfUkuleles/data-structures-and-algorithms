'use strict';

const { isNull } = require("node:util");

class Queue {

    constrcuctor(){
        this.length = 0,
        this.next = null
    }

    enqueue(value){
        this[this.length] = value
        if (this.next===null) {this.next = this.length}
        this.length++;
        }

    dequeue(){
        let result = this[this.next]
        this.next++
        delete this[(this.next - 1)]
        this.length--
        console.log(this.length, this.next)
        return result
        }
     peek(){
         console.log(this[this.next])
        return this[this.next]
        }

        isEmpty(){
            return this.length === 0
        }
}


module.exports = Queue;

// constructor(value){
//     this.front = null,
//     this.back = null;
// }

// enqueue(value){
// let newNode = new Node(value);
// if (!this.front) {
//     this.front = newNode;
//     this.back = newNode;
// }else{
//     this.back.next = newNode
//     this.back = this.back.next
// }
//     return this
// }

// dequeue(){
//     let result;
//     if (!this.front) {
//         return console.error("womp");
//     }else{
//         result = this.front.value
//         this.front = this.front.next;
//     }
//         return result
// }

// peek(){
//     let result;
//     if (!this.front) {
//         return console.error("womp");
//     }else{
//         result = this.front.next.value
//     }
//     return result
// }

// isEmpty(){
//     this.front.value ? true : false
// }