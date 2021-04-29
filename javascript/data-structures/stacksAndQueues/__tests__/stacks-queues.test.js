'use strict';

const Stack = require('../lib/stack.js')
const Queue = require('../lib/queue.js')

describe("Stacks and Queues Testing", () => {
    it('can make an empty stack', () => {
        let list = new Stack();
        expect(list.top).toEqual(null);

    })

    it('can push values onto the stack', () => {
        let list = new Stack();
        let first = 1;
        let second = 2;
        let third = 3;

        list.push(first);
        expect(list.top.value).toEqual(1);

        list.push(second);
        expect(list.top.value). toEqual(2);

        list.push(third);
        expect(list.top.value).toEqual(3);
        
    })

    it('Can properly pop off of the stack', () => {
        let list = new Stack();
        let first = 1;
        let second = 2;

        list.push(first);
        expect(list.top.value).toEqual(1);

        list.push(second);
        expect(list.top.value). toEqual(2);

        list.pop();
        expect(list.top.value). toEqual(1);
        
    })

    it('Can pop multiple things off the stack', () => {
        let list = new Stack();
        let first = 1;
        let second = 2;
        let third = 3;
        let fourth = 4;

        list.push(first);
        list.push(second);
        list.push(fourth);
        list.push(third);

        list.pop();
        list.pop();
        list.pop();
        expect(list.top.value). toEqual(1);
        list.pop();
        expect(list.top). toEqual(null);
    })

    it('Can peek into the next value on the stack', () => {
        let list = new Stack();
        let first = 1;
        let second = 2;
        let fourth = 4

        list.push(first);
        list.push(second);
        list.push(fourth);
        let peeker = list.peek()
        expect(peeker).toEqual(2);
        expect(list.top).toEqual(1)
        
    })




    it('can make an empty queue', () => {
        let list = new Queue();
        expect(list.front).toEqual(null);

    })

    it('can enqueue  values onto the queue', () => {
        let list = new Queue();
        let first = 1;
        let second = 2;
        let third = 3;

        list.enqueue(first);
        expect(list.front.value).toEqual(1);

        list.enqueue(second);
        expect(list.front.next.value). toEqual(2);

        list.enqueue(third);
        expect(list.front.next.next.value).toEqual(3);
        
    })

    it('Can properly pop off of the queue', () => {
        let list = new Queue();
        let first = 1;
        let second = 2;

        list.enqueue(first);
        expect(list.front.value).toEqual(1);

        list.enqueue(second);
        expect(list.front). toEqual(1);

        list.dequeue();
        expect(list.front.value). toEqual(1);
        
    })

    it('Can dequeue multiple things off the queue', () => {
        let list = new Queue();
        let first = 1;
        let second = 2;
        let third = 3;
        let fourth = 4;

        list.enqueue(first);
        list.enqueue(second);
        list.enqueue(fourth);
        list.enqueue(third);

        list.dequeue();
        list.dequeue();
        list.dequeue();
        expect(list.front.value). toEqual(1);
        list.dequeue();
        expect(list.front). toEqual(null);
    })

    it('Can peek into the next value on the queue', () => {
        let list = new Queue();
        let first = 1;
        let second = 2;
        let fourth = 4

        list.enqueue(first);
        list.enqueue(second);
        list.enqueue(fourth);
        let peeker = list.peek()
        expect(peeker).toEqual(2);
        expect(listenerCount.front).toEqual(1)
        
    })
})