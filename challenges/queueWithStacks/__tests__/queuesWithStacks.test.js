'use strict';

const PseudoQueue = require('../lib/queue-with-stacks.js')

describe("Stacks and Queues Testing", () => {
    it('can make an empty Queue with 2 stacks', () => {
        let Que = new PseudoQueue();

        expect(Que.stack1).toBeDefined();
        expect(Que.stack2).toBeDefined();

    })

    it('can enqueue values into the stacks', () => {
        let push = new PseudoQueue();

        push.enqueue(1);
        expect(push.stack1[0]).toEqual(1);
        expect(push.stack2[0]).toEqual(1);
        
        push.enqueue(2);
        expect(push.stack1[1]).toEqual(2);
        expect(push.stack2[1]).toEqual(2);

        push.enqueue(3);
        expect(push.stack1.length).toEqual(3)
        expect(push.stack1.peek()).toEqual(3)
        console.log("PUSH TEST: ", push.stack1, push.stack2)
        
    })

    it('Can properly dequeue off of the 2 stacks (FIFO)', () => {
        let deq = new PseudoQueue();

        deq.enqueue(1);
        expect(deq.stack1[0]).toEqual(1);

        deq.enqueue(2);
        expect(deq.stack2[1]).toEqual(2);

        deq.dequeue();
        expect(deq.next1). toEqual(1);

        console.log("DEQ TEST: ", deq.stack1, deq.stack2)
        
    })
})