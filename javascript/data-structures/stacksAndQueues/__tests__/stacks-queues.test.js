'use strict';

const { Stack , Queue  } = require('../lib/stacks-and-queues.js');

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
        expect(list.head.value).toEqual(1);

        list.push(second);
        expect(list.head.next.value). toEqual(2);

        list.push(third);
        expect(list.top.next.next.value).toEqual(3);
        
    })

    it('Can properly pop off of the stack', () => {
        let list = new Stack();
        let first = 1;
        let second = 2;

        list.push(first);
        expect(list.head.value).toEqual(1);

        list.push(second);
        expect(list.head.value). toEqual(2);

        list.pop();
        expect(list.head.value). toEqual(1);
        
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
        expect(listenerCount.top).toEqual(1)
        
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

        list.push(first);
        expect(list.front.value).toEqual(1);

        list.push(second);
        expect(list.front.next.value). toEqual(2);

        list.push(third);
        expect(list.front.next.next.value).toEqual(3);
        
    })

    it('Can properly pop off of the queue', () => {
        let list = new Queue();
        let first = 1;
        let second = 2;

        list.push(first);
        expect(list.front.value).toEqual(1);

        list.push(second);
        expect(list.front.value). toEqual(2);

        list.pop();
        expect(list.front.value). toEqual(1);
        
    })

    it('Can dequeue multiple things off the queue', () => {
        let list = new Queue();
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
        expect(list.front.value). toEqual(1);
        list.pop();
        expect(list.front). toEqual(null);
    })

    it('Can peek into the next value on the queue', () => {
        let list = new Queue();
        let first = 1;
        let second = 2;
        let fourth = 4

        list.push(first);
        list.push(second);
        list.push(fourth);
        let peeker = list.peek()
        expect(peeker).toEqual(2);
        expect(listenerCount.front).toEqual(1)
        
    })































    it('The head property will properly point to the first node in the linked list', () => {
        let list = new LL();
        let first = 1;
        let second = 2;

        list.append(first);
        expect(list.head.value).toEqual(1);

        list.append(second);
        expect(list.head.value).toEqual(1);
        
    })

    it('Will return true when searching for a value in the linked list that does exist', () => {
        let list = new LL();
        let first = 1;
        let second = 2;
        let third = 3;

        list.append(first);
        list.append(second);
        list.append(third);
        let result = list.includes(3);
        expect(result).toEqual(false);

    })

    it('Will return false when searching for a value in the linked list that does not exist', () => {
        let list = new LL();
        let first = 1;
        let second = 2;

        list.append(first);
        list.append(second);
        let result = list.includes(3);
        expect(result).toEqual(false);

    })

    it('Can properly return a collection of all the values that exist in the linked list', () => {
        let list = new LL();
        let first = 1;
        let second = 2;
        let fourth = 44;
        list.append(first);
        list.append(second);
        list.append(fourth);
        let testing = list.toString();
        expect(testing).toEqual('{ 1 } -> { 2 } -> { 44 } -> NULL');
    })

    it('Can properly delete a node of a given value', () => {
        let list = new LL();
        let first = 1;
        let second = 2;
        let fourth = 44;
        list.append(first);
        list.append(second);
        list.append(fourth);

        list.delete(2);
        expect(list.head.next.value).toEqual(44);
    })

    it('Can locate the value of nodes nth from the tail of the LL', () => {
        let nthList = new LL();
        let first = 1;
        let second = 2;
        let fourth = 44;
        nthList.append(first);
        nthList.append(second);
        nthList.append(fourth);
        let testing = nthList.nthFromEnd(0);
        expect(testing).toEqual(44);
        let testing2 = nthList.nthFromEnd(2);
        expect(testing2).toEqual(1);
    })

    it('Can run the edge cases', () => {
        let edgeList = new LL();
        let first = 1;
        let second = 2;
        let fourth = 44;
        edgeList.append(first);
        edgeList.append(second);
        edgeList.append(fourth);
        let testing = edgeList.nthFromEnd(6);
        expect(testing).toEqual(null);

        let testing2 = edgeList.nthFromEnd(2);
        expect(testing2).toEqual(1);

        let testing3 = edgeList.nthFromEnd(-1);
        expect(testing3).toEqual(null);

        let newLL = new LL();
        newLL.append(2);
        let one = newLL.nthFromEnd(1);
        expect(one).toEqual(null);

        newLL.append(3);
        newLL.append(4);
        newLL.append(67);
        newLL.append(7);
        newLL.append(35);

        let middle = newLL.nthFromEnd(3);
        expect(middle).toEqual(4)


        

    })

})