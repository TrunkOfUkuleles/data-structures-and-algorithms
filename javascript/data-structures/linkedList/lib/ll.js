'use strict';

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
            curr = curr.next;
          }
          curr.next = node
      }
      return this
    }

    insert(value){
        //first node instatiate a new node to add to LL
        let node = new Node(value)
        
        let curr = this.head;
        node.next = curr
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
          let result = "";
          let curr = this.head;
          while(curr){
            result += `{ ${curr.value} } -> `;
            if (curr.next === null){ result += `NULL`}
               curr = curr.next;
          }
          return result;
      }

      insertBefore(value, newVal){

        let node = new Node(newVal)

        if (!this.head) {
            this.head = node;
        }else{
            let curr = this.head;
            let prev;
            while(curr){
              if(curr.value === value){
                prev.next = node;
                node.next = curr;
              }
              prev = curr;
              curr = curr.next;
          }
      }
      return this
    }

      insertAfter(value, newVal){

        let node = new Node(newVal)

        if (!this.head) {
            this.head = node
        }else{
            let curr = this.head;
            while(curr.next){
              if(curr.value === value){
                node.next = curr.next
                curr.next = node
              }
              curr = curr.next;
            }
        }
        return this
        
      }

      delete(val){
        if (this.head.value === val){
         return  this.head = this.head.next
        }
        let curr = this.head;
        while(curr.next){
          if (curr.next.value === val){
            curr.next = curr.next.next
          }
          curr = curr.next;
        }

      }

      nthFromEnd(n){

        let track = [];
        let curr = this.head;
          while(curr){
            track.unshift(curr.value)
            console.log(track)
            curr = curr.next;
          }
        if (n!==0 && track.length < n){return null}
        return track[n]

      }
      

}

module.exports = LinkedList;