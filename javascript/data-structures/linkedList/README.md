# Singly Linked List
<!-- Short summary or background information -->

create a functional single linked list. adding functionality to add, delete and insert notes to the list

## Challenge
<!-- Description of the challenge -->
create the ability to make a linked list, add to the head or tail, can check for a value,, traverse/insert, delete, and print all of the values in a string. 

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
    I started with the demo code from class. A quick adjustment to the append function gave me the insert. From there it was just a matter of knowing how to traverse the list. Still have to figure out the best way to insert into a set place. 

## API
<!-- Description of each method publicly available to your Linked List -->
.insert: this.node.next = this.head ...  this.head = this.node
.append: this.pointer = this.head.next ...  this.pointer.next = null => this.pointer.next = new node
.includes: F this.pointer = this.head.next ...  if this.pointer.value = value, return true
.toString: this.pointer.value => +'{ value } -> ' => this.pointer = this.pointer.next ...  this.head = this.node => +'NULL, return ++
.insertBefore: this.pointer = this.head.next, this.prev ...  if this.pointer.value = value {this.newNode.next = curr, this.prev.next = newNode } else{this.prev = this.curr, this.curr = this.curr.next}
.insertAfter: this.pointer = this.head.next ...  if this.pointer.value = value {this.newNode.next = curr.next, this.pointer.next = this.newNode}   else{this.prev = this.curr, this.curr = this.curr.next}
.delete this.pointer = this.head.next ...  if this.pointer.next.value = value{this.pointer.next = this.pointer.next.next}


![whiteboard]{./assets/CCDA05.jpg}
![whiteboard-inserts]{./assets/CCDA06.jpg}

[CODE](https://github.com/TrunkOfUkuleles/data-structures-and-algorithms/blob/array-binary-search/javascript/data-structures/linkedList/index.js)