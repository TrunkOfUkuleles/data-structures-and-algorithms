'use strict';

const Stack = require('../lib/stack.js')
const Queue = require('../lib/queue.js');

describe("Stacks and Queues Testing", () => {
    it('can make an empty stack', () => {
        let list = new Stack();
        expect(list.length).toEqual(0);

    })

    it('can push values onto the stack', () => {
        let push = new Stack();

        push.push(1);
        expect(push[push.length-1]).toEqual(1);
        
        push.push(2);
        expect(push[push.length-1]). toEqual(2);

        push.push(3);
        expect(push[push.length-1]).toEqual(3);
        
    })

    it('Can properly pop off of the stack', () => {
        let list = new Stack();
        let first = 1;
        let second = 2;

        list.push(1);
        expect(list[list.length-1]).toEqual(1);

        list.push(2);
        expect(list[list.length-1]). toEqual(2);

        list.pop();
        expect(list[list.length-1]). toEqual(1);
        
    })

    it('Can pop multiple things off the stack', () => {
        let pop = new Stack();

        pop.push(1);
        pop.push(2);
        pop.push(4);
        pop.push(3);

        pop.pop();
        pop.pop();
        pop.pop();
        expect(pop[0]). toEqual(1);
        pop.pop();
        expect(pop.length). toEqual(0);
    })

    it('Can peek into the top of the stack', () => {
        let list = new Stack();
        let first = 1;
        let second = 2;
        let fourth = 4

        list.push(1);
        list.push(2);
        list.push(4);
        let peeker = list.peek()
        expect(peeker).toEqual(4);
        
    })




    it('can make an empty queue', () => {
        let Q = new Queue();
        expect(Q.length).toEqual(0);

    })

    it('can enqueue values onto the queue', () => {
        let enqueue = new Queue();

        enqueue.enqueue(1);
        expect(enqueue[0]).toEqual(1);

        enqueue.enqueue(2);
        expect(enqueue[1]). toEqual(2);

        enqueue.enqueue(3);
        expect(enqueue[2]).toEqual(3);
        
    })

    it('Can properly dequeue the queue', () => {
        let dequeue = new Queue();

 
        dequeue.enqueue(1);
        expect(dequeue.next).toEqual(0);

        dequeue.enqueue(2);
        expect(dequeue[dequeue.next]). toEqual(1);

        dequeue.dequeue();
        console.log("DEQUEUE:", dequeue.length, dequeue.next)
        expect(dequeue.next). toEqual(1);
        expect(dequeue[dequeue.next]). toEqual(2);
        
    })

    it('Can dequeue multiple things off the queue', () => {
        let multiple = new Queue();

        multiple.enqueue(1);
        multiple.enqueue(2);
        multiple.enqueue(4);
        multiple.enqueue(3);

        multiple.dequeue();
        multiple.dequeue();
        multiple.dequeue();
        expect(multiple[multiple.next]). toEqual(3);
        multiple.dequeue();
        expect(multiple.next). toEqual(4);
        expect(multiple.length). toEqual(0);
    })

    it('Can peek at the next value on the queue', () => {
        let peek = new Queue();

        peek.enqueue(1);
        peek.enqueue(3);
        peek.enqueue(4);
        let peeker = peek.peek()
        expect(peeker).toEqual(1);
        expect(peek.length).toEqual(3)
        
    })
})