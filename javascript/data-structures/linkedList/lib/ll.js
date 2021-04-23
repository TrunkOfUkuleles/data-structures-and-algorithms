'use strict';

const { appendFile } = require('node:fs');
const Node = require('./node.js')

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value){
      //first node instatiate a new node to add to LL
      let node = new Node(value)

      if (!this.head) {
          this.head = node;
      }else{
          let curr = this.head;

          while(curr.next){
              console.log("curr", current)
              current = current.next;
          }
          current.next = node
      }
      return this
    }

}

module.exports = LinkedList;