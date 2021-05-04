'use strict';

class Queue {

    constructor(){
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


        delete this[this.next-1]


        this.length--


        return result
        }
     peek(){
         if (this.next===null || this.next === -1){return 'Empty'}
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