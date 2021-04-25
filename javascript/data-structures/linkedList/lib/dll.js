'use strict';

const Node = require('./node2.js')

class DoublyLinkedList {
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
            curr = curr.next;

          }
          node.prev = curr 
          curr.next = node
      }
      return this
    }

    insert(value){
        //first node instatiate a new node to add to LL
        let node = new Node(value)
        
        let curr = this.head;
        node.next = curr;
        node.next.prev = node;
        this.head = node
        
        return this
      }

      includes(value){
        //first node instatiate a new node to add to LL
        let result = false
        let curr = this.head
        while(curr.next){
              if (curr.value === value) {result = true}
               curr = curr.next;
          }
        return result
    }
      

      toString(){
          let result = ""
          let curr = this.head;
          while(curr){
            result += `{ ${curr.value} } -> `
            if (curr.next === null){ result += `NULL`}
            
               curr = curr.next;
          }
          return result
      }

}

module.exports = DoublyLinkedList;