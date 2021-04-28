'use strict';

// const LinkedList = require('../lib/ll.js');
const LL = require('../lib/ll.js');
const func = require('../lib/ll-zip.js')

describe("Linked List Test", () => {
    it('should create an empty linked list on instantiation', () => {
        let list = new LL();
        expect(list.head).toEqual(null);
    })

    it('should add a node to the list (append + more than 1)', () => {
        let list = new LL();
        let first = 1;
        let second = 2;
        let third = 3;

        list.append(first);
        expect(list.head.value).toEqual(1);

        list.append(second);
        expect(list.head.next.value). toEqual(2);

        list.append(third);
        expect(list.head.next.next.value).toEqual(3);
        
    })

    it('Can properly insert into the linked list', () => {
        let list = new LL();
        let first = 1;
        let second = 2;

        list.append(first);
        expect(list.head.value).toEqual(1);

        list.insert(second);
        expect(list.head.value). toEqual(2);
        
    })

    it('Can properly insert new node into position before first instance of value, into the linked list', () => {
        let list = new LL();
        let first = 1;
        let second = 2;
        let third = 3;
        let fourth = 4;

        list.append(first);
        list.append(second);
        list.append(fourth);

        list.insertBefore(4, third);
        expect(list.head.next.next.value).toEqual(3);
        
    })

    it('Can properly insert new node into position after first instance of value, into the linked list', () => {
        let list = new LL();
        let first = 1;
        let second = 2;
        let third = 3
        let fourth = 4

        list.append(first);
        list.append(second);
        list.append(fourth);

        list.insertAfter(2, third);
        expect(list.head.next.next.value).toEqual(3);
        
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

    it('Will return a zipped list using llZip', () => {
        let LL1 = new LL();
        let LL2 = new LL();
        let first = 1;
        let second = 2;
        let third = 3;
        let fourth = 4;

        LL1.append(first);
        LL2.append(second);
        LL1.append(third);
        LL2.append(fourth);
        let result = func.zipLists(LL1, LL2);
        let printed = result.toString();
        expect(printed).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL');

    })

})