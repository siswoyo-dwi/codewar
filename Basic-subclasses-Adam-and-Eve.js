git addclass God{
    constructor(){
        return [Man(), Woman()]
      }
      static create(){
        return humans[0]===Man()?'Expected Adam to be a Man':'woman'
      }
    }
    // code
    let humans = God.create()
    console.log(humans[0] instanceof Man, true, 'Expected Adam to be a Man')