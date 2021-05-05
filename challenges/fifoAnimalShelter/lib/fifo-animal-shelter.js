'user strict';

const Queue = require("./queue");

class AnimalShelter{

    constructor(){
        this.dogs = new Queue();
        this.cats = new Queue();
    }

    enqueue(animal){
        animal.type === 'dog'
        ? this.dogs.enqueue(animal)
        : this.cats.enqueue(animal)
    }

    dequeue(type){
        // if (!type){
        //     let cat = this.cats.peek()
        //     let dog = this.dogs.peek()
        //     console.log(cat, dog)

        //     dates.compare(cat.time, dog.time)
        //     ? this.dogs.dequeue()
        //     : this.cats.dequeue()
        // }
        if (type === 'cat'){return this.cats.dequeue()}
        if(type === 'dog'){return this.dogs.dequeue()}
        return null
    }


}

module.exports = AnimalShelter