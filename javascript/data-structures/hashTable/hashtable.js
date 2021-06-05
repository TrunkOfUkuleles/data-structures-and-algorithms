



class Node {
    constructor (value){
        this.value = value, 
        this.next = null;
    }
}

class linkedList {
    constructor() {
      this.head = null;
    }
    
    add(val) {
      let node = new Node(val);
  
      if(!this.head) {
        this.head = node;
        // console.log("new Head: ", node)
      } else {
        node.next = this.head;
        this.head = node;

      }
    }
  
    getList() {
      if (!this.head) return 'no list';
      let result = ''
      let current = this.head;
  
      while(current) {
        result += current.value+" => "
        current = current.next;
      }
    //   console.log(result)
      return result
    }
  }

  class HashMap {
      constructor (size){
          this.storage = new Array(size);
          this.size = size
      }

      hash(key){
          return key.split('').reduce((acc, cur) => {
              return acc +cur.charCodeAt(0)
          }, 0) * 19 %this.size
      }
  
      set(key, val){
          let hashed = this.hash(key)

          if(!this.storage[hashed]){
              let start = new linkedList();
              start.add([key, val])
              this.storage[hashed]= start
            //   console.log("new LL: ", start)
          }else{
              this.storage[hashed].add([key,val])
            //   console.log("ADDING to LL: ", this.storage)
          }
      }

      print(){
          return this.storage.reduce((acc, cur)=>{
            if (!cur){return acc}
            return acc+cur.getList()+" --> "
          },'head --> ')
      }

      get(key){
          if (!this.storage[this.hash(key)]){return "Not Found"}
        return this.storage[this.hash(key)]
      }

      contains(key){
        let hashed = this.hash(key)

        return this.storage[hashed] !== undefined
      }
  
    }

    let testing = new HashMap(5);

    testing.set('julien', 'edwards');
    testing.set('jjjmcool', 'edwards');
    testing.set('fergie', 'edwards');
    testing.set('whatsa', 'edwards');
    testing.set('pon', 'edwards');
    testing.set('julien', 'bedwards');
    // console.log(testing)
    console.log(testing.print())
    console.log(testing.get('eeee'))
    console.log(testing.contains('ergie'))