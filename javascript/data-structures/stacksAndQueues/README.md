# Stacks And Queues
<!-- Short summary or background information -->

create and test a stack and queue structure. 

## Challenge
<!-- Description of the challenge -->
build a constructor that can store information, and has built in methods to add and remove elements from the set - as a queue and a stack. 

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
    

## API
stack:
- push => S{length:1, 0:pushed} => S{length:2, 0:pushed, 1:pushedagain}
- pop => S{length:2, 0:pushed, 1:pushedagain} => S{length:1, 0:pushed}
- peek => S[S.length - 1]

Queue:
- enqueue => Q{length:1, next:0, 0:pushed} => Q{length:2, next:0, 0:pushed, 1:pushedagain}
- dequeue => Q{length:2, next:0, 0:pushed, 1:pushedagain} => Q{length:1, next:1, 1:pushedagain}
- peel => Q[Q.next]

![whiteboard]{./assets/CCDA05.jpg}

[CODE]() 