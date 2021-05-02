'use strict';

const Stack = require('../lib/stack.js')
const Queue = require('../lib/queue.js');

describe("Stacks and Queues Testing", () => {
    it('can make an empty stack', () => {
        let list = new Stack();
        expect(list.length).toEqual(0);

    })

    it('can push values onto the stack', () => {
        let list = new Stack();
        let first = 1;
        let second = 2;
        let third = 3;

        list.push(first);
        expect(list[list.length]).toEqual('1');

        list.push(second);
        expect(list[list.length]). toEqual('2');

        list.push(third);
        expect(list[list.length]).toEqual('3');
        
    })

    it('Can properly pop off of the stack', () => {
        let list = new Stack();
        let first = 1;
        let second = 2;

        list.push(first);
        expect(list[list.length]).toEqual(1);

        list.push(second);
        expect(list[list.length]). toEqual(2);

        list.pop();
        expect(list[list.length]). toEqual(1);
        
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
        expect(list[list.length]). toEqual(1);
        list.pop();
        expect(list.length). toEqual(0);
    })

    it('Can peek into the top of the stack', () => {
        let list = new Stack();
        let first = 1;
        let second = 2;
        let fourth = 4

        list.push(first);
        list.push(second);
        list.push(fourth);
        let peeker = list.peek()
        expect(peeker).toEqual(4);
        
    })




    it('can make an empty queue', () => {
        let list = new Queue();
        expect(list.length).toEqual(null);

    })

    it('can enqueue  values onto the queue', () => {
        let list = new Queue();
        let first = 1;
        let second = 2;
        let third = 3;

        list.enqueue(first);
        expect(list[0]).toEqual(1);

        list.enqueue(second);
        expect(list[1]). toEqual(2);

        list.enqueue(third);
        expect(list[2]).toEqual(3);
        
    })

    it('Can properly dequeue the queue', () => {
        let list = new Queue();
        let first = 1;
        let second = 2;

        list.enqueue(first);
        expect(list[list.next]).toEqual(1);

        list.enqueue(second);
        expect(list[list.next]). toEqual(1);

        list.dequeue();
        expect(list.next). toEqual(1);
        expect(list[list.next]). toEqual(1);
        
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
        expect(list[list.length]). toEqual(1);
        list.dequeue();
        expect(list[list.length]). toEqual(null);
    })

    it('Can peek at the next value on the queue', () => {
        let list = new Queue();
        let first = 1;
        let second = 2;
        let fourth = 4

        list.enqueue(first);
        list.enqueue(second);
        list.enqueue(fourth);
        let peeker = list.peek()
        expect(peeker).toEqual(1);
        expect(list.length).toEqual(3)
        
    })
})