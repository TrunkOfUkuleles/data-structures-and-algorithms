# Hashtables
<!-- Short summary or background information -->

## Challenge
Implement a Hashtable with the following methods:

    add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
    get: takes in the key and returns the value from the table.
    contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
    hash: takes in an arbitrary key and returns an index in the collection. 

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
assuming we know the key/index we are looking for, the ideal would be a time of o(1). next from that would be having to traverse a linked list - at which point it becomes O(n)

## API
<!-- Description of each method publicly available in each of your hashtable -->

ADD(set) - create a hash using the key input. Then check if there is a linked list at the returned has turned index. If not, create a new linked list and node with the value being the key, value pair. Set that as the head of the linked list. If there was already a linked list in the table, create a new node with the key, value pair and add that to the linked list.

GET - has the key, and return the value at the hashed index of the table. 

CONTAINS - hash the key and lookup the index. Then check the linked list by checking the first index of each value to compare with the passed ket. return true if they ever match. Return false otherwise. 

hash - take the key and break the string down into characters and adding their character codes together. Then multiply by a prime number (19), and find the remainder of dividing that big number by the Hash Table size. That will act as the index of the the key,value pair when storing. 