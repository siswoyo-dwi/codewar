class God{
    constructor(humans) {
      this.humans=humans
      }
      static create(humans){
      return   humans=='Man'?'Expected Adam to be a Man':'Expected Eve to be a Woman'
      }
    }
    let humans = God.create()
    console.log(humans[0] instanceof Man, true, 'Expected Adam to be a Man');
   