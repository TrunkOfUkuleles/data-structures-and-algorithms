# Challenge Summary
return the first word to occur more than once in that provided string.
## Challenge Description
Implement the following methods:
create a map to check as you traverse the string. if you have seen it before, return that word.
## Approach & Efficiency
I treid to build it in such a way that it would be easy to complicate later. depending on how tricky you want to be in terms of the kind of strings you feed it, I would want to impliment a better sorting system in the beginning. 

## Solution

I went with a key object to quickly reference anything that has been seen before for o(1) time. if I wanted to get more granualr I would add a counter for all the different words seen. 
![repeatedUML](./assets/repeatedUML.jpg)