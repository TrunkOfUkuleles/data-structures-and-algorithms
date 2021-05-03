'use strict';
class Stack {
    constructor(){
        this.length = 0;
    }

    push(value){
        this[this.length] = value;
        this.length++
        return this
    }

    pop(){
    if (this.length===0){return 'empty stack'}
    let result = this[--this.length];
    delete this[this.length]
    return result
    }

    peek(){
        return this[this.length-1]
    }

    isEmpty(){
        return this.length === 0
    }
}

module.exports = Stack;


// =========

// function Stack() {
//     this.length = 0
// }

// Stack.prototype.push = function (val){
//     this[this.length++] = val
//     return this
// }

// Stack.prototype.pop = function (val){
//     if (this.length===0){return 'empty stack'}
//     let result = this[--this.length];
//     delete[this.length]
// }

// Stack.prototype.peek = function (val){
    //     return this[this.length-1]
    // }

    // Stack.prototype.isEmpty = function (val){
    //     return this.length === 0
    // }