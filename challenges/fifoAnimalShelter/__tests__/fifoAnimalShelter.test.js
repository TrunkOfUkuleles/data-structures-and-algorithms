'use strict';

const AnimalShelter = require('../lib/fifo-animal-shelter.js')

describe("Stacks and Queues Testing", () => {
    class Animal{
        constructor(type, name){
            this.time = new Date();
            this.type = type;
            this.name = name;
        }
    }

           let Shelter = new AnimalShelter();
    it('can make an empty Queue with 2 stacks', () => {
        expect(Shelter.dogs).toBeDefined();
        expect(Shelter.cats).toBeDefined();

    })

    it('can enqueue animals into the shelter', () => {

        Shelter.enqueue(new Animal('dog', 'steve'));
        Shelter.enqueue(new Animal('cat', 'casey'));
        Shelter.enqueue(new Animal('dog', 'meatbone'));
        Shelter.enqueue(new Animal('cat', 'dolly'));
        Shelter.enqueue(new Animal('dog', 'pup'));
        expect(Shelter.cats.length).toEqual(2);
        expect(Shelter.dogs.length).toEqual(3);
        
    })

    it('Can dequeue animals out of the shelter', () => {

       let adopt1 = Shelter.dequeu('dog');
       let adopt2 = Shelter.dequeu('dog');
       expect(Shelter.dogs.length).toEqual(1);
       expect(adopt1.name).toBe('steve');
       expect(adopt2.name).toBe('meatbone');
       let adopt3 = Shelter.dequeu('cat');
       expect(Shelter.cats.length).toEqual(1);
       expect(adopt3.name).toBe('casey');

       let faker = Shelter.dequeu();
       expect(faker).toBe(null);
        
    })
})